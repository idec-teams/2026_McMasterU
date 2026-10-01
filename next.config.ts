import type { NextConfig } from "next";

// GitHub Pages serves a project site from a sub-path —
// https://<owner>.github.io/<repo>/ — so every URL needs that prefix.
// It comes from the environment rather than being hardcoded because the
// same code deploys to more than one repo (ours, then the competition's).
// Unset locally, so `pnpm dev` still runs at the root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  reactCompiler: true,

  // Pages has no Node server: pre-render every route to static files in out/.
  output: "export",
  basePath,
  // /team -> /team/index.html, which a plain file server resolves cleanly.
  trailingSlash: true,
  images: {
    // There is no server to resize images at request time.
    unoptimized: true,
  },
};

export default nextConfig;
