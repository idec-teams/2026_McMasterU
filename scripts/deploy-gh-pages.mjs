// Build the wiki as a static site and publish it to the `gh-pages` branch.
//
//   pnpm deploy:pages               build, verify, push to origin/gh-pages
//   pnpm deploy:pages --dry-run     build and verify only; nothing is pushed
//   pnpm deploy:pages --repo NAME   override the repo name (the URL sub-path)
//   pnpm deploy:pages --remote X    push somewhere other than `origin`
//
// The site is served from https://<owner>.github.io/<repo>/, so the build is
// prefixed with /<repo>. By default <repo> is read from the `origin` remote,
// which means the same command works unchanged after the code moves to the
// competition repo.
//
// gh-pages holds only the latest build. Each deploy replaces it with a single
// fresh commit (force push) — there is no history worth keeping on a branch of
// generated files, and it avoids merge conflicts on them. `main` is never
// touched.

import { execFileSync } from "node:child_process";
import {
  existsSync,
  readdirSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { join } from "node:path";

const OUT = "out";
const BRANCH = "gh-pages";

const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const option = (name) => {
  const i = args.indexOf(name);
  return i === -1 ? undefined : args[i + 1];
};

const dryRun = flag("--dry-run");
const remote = option("--remote") ?? "origin";

function run(cmd, cmdArgs, opts = {}) {
  return execFileSync(cmd, cmdArgs, { stdio: "inherit", ...opts });
}

function git(cmdArgs, opts = {}) {
  return execFileSync("git", cmdArgs, { encoding: "utf8", ...opts }).trim();
}

function fail(message) {
  console.error(`\n✗ ${message}\n`);
  process.exit(1);
}

// ── 1. Work out the base path ──────────────────────────────────────────────

// Only ask git for the remote when we actually need it, so a dry run with
// --repo works anywhere.
const remoteUrl =
  !dryRun || !option("--repo") ? git(["remote", "get-url", remote]) : "";
const repo =
  option("--repo") ??
  remoteUrl
    .replace(/\.git$/, "")
    .split(/[/:]/)
    .pop();
if (!repo)
  fail(
    `Could not work out the repo name from remote "${remote}". Pass --repo NAME.`,
  );
const basePath = `/${repo}`;

console.log(
  `\n→ Building for ${basePath}/ ${dryRun ? "(dry run)" : `→ ${remote}/${BRANCH}`}\n`,
);

// ── 2. Build ───────────────────────────────────────────────────────────────

rmSync(OUT, { recursive: true, force: true });
run("pnpm", ["exec", "next", "build"], {
  env: { ...process.env, NEXT_PUBLIC_BASE_PATH: basePath },
});

// GitHub Pages runs Jekyll by default, and Jekyll drops every folder that
// starts with "_" — including _next/, where all the JS and CSS live.
writeFileSync(join(OUT, ".nojekyll"), "");

// ── 3. Verify ──────────────────────────────────────────────────────────────
// Every root-relative URL in the built HTML must carry the base path AND
// point at a file that exists with exactly that capitalisation. macOS
// ignores case, GitHub Pages does not — "Efe.jpg" vs "Efe.JPG" works locally
// and 404s live.

function htmlFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) return htmlFiles(p);
    return p.endsWith(".html") ? [p] : [];
  });
}

function existsExactCase(relPath) {
  let dir = OUT;
  for (const segment of relPath.split("/").filter(Boolean)) {
    if (!existsSync(dir) || !statSync(dir).isDirectory()) return false;
    if (!readdirSync(dir).includes(segment)) return false;
    dir = join(dir, segment);
  }
  return existsSync(dir);
}

const unprefixed = new Map();
const missing = new Map();
const note = (map, url, file) => map.set(url, map.get(url) ?? file);

for (const file of htmlFiles(OUT)) {
  const html = readFileSync(file, "utf8");
  for (const [, attr, value] of html.matchAll(
    /\b(src|href|poster|srcset|imagesrcset)="([^"]*)"/gi,
  )) {
    // Only srcset lists hold several "url width" pairs. Everywhere else the
    // whole value is one URL — and may contain spaces ("/hp comms/x.png").
    const urls = /srcset$/i.test(attr)
      ? value.split(",").map((c) => c.trim().split(/\s+/)[0])
      : [value];
    for (const url of urls) {
      if (!url.startsWith("/") || url.startsWith("//")) continue;
      if (url !== basePath && !url.startsWith(`${basePath}/`)) {
        note(unprefixed, url, file);
        continue;
      }
      let rel = decodeURIComponent(url.slice(basePath.length).split(/[?#]/)[0]);
      if (rel === "" || rel.endsWith("/")) rel += "index.html";
      if (!existsExactCase(rel)) note(missing, url, file);
    }
  }
}

const report = (map) =>
  [...map]
    .map(
      ([url, file]) =>
        `    ${url}   (first seen in ${file.slice(OUT.length + 1)})`,
    )
    .join("\n");

if (unprefixed.size) {
  fail(
    `${unprefixed.size} URL(s) are missing the ${basePath} prefix and would 404 on Pages:\n${report(unprefixed)}\n\n` +
      `  Wrap the src with asset() from "@/lib/wiki/asset".`,
  );
}
if (missing.size) {
  fail(
    `${missing.size} URL(s) point at files that don't exist in the build (check the spelling and CAPITALISATION):\n${report(missing)}`,
  );
}
console.log("\n✓ Every link and asset resolves under the base path.");

if (dryRun) {
  console.log(
    `\nDry run — nothing pushed. To preview exactly as Pages will serve it:\n` +
      `  rm -rf /tmp/pages-preview && mkdir -p /tmp/pages-preview && cp -R ${OUT} /tmp/pages-preview${basePath}\n` +
      `  npx serve /tmp/pages-preview   →   open http://localhost:3000${basePath}/\n`,
  );
  process.exit(0);
}

// ── 4. Publish ─────────────────────────────────────────────────────────────

const source = git(["rev-parse", "--short", "HEAD"]);
const dirty = git(["status", "--porcelain"])
  ? " (with uncommitted changes)"
  : "";

const inOut = { cwd: OUT, stdio: "inherit" };
run("git", ["init", "--quiet", "-b", BRANCH], inOut);
run("git", ["add", "-A"], inOut);
run("git", ["commit", "--quiet", "-m", `Deploy ${source}${dirty}`], inOut);
run("git", ["push", "--force", remoteUrl, `${BRANCH}:${BRANCH}`], inOut);
// Drop the throwaway repo so out/ is plain build output again.
rmSync(join(OUT, ".git"), { recursive: true, force: true });

const owner = remoteUrl
  .replace(/\.git$/, "")
  .split(/[/:]/)
  .slice(-2, -1)[0];
console.log(
  `\n✓ Published ${source}${dirty} to ${remote}/${BRANCH}.\n` +
    `  Live in a minute or two at https://${owner?.toLowerCase()}.github.io${basePath}/\n` +
    `  (First time on a repo? Settings → Pages → branch "${BRANCH}", folder "/ (root)".)\n`,
);
