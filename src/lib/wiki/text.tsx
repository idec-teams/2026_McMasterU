import { cloneElement, Fragment, isValidElement, type ReactNode } from "react";
import { InlineReference } from "@/components/wiki/InlineReference";
import type { WikiReference } from "@/types/wiki";

type NodeList = ReactNode[];

// Each splitAndReplace call keys its own matches from "m0", so two segments
// produced by different passes (or different parts of the same pass) can
// each mint an "m0" — a collision once they land as siblings in the same
// final array. Re-keying by final position (stable for a given input) fixes
// it without threading a shared counter through every pass.
function reindexKeys(nodes: NodeList): NodeList {
  return nodes.map((node, index) =>
    isValidElement(node)
      ? // biome-ignore lint/suspicious/noArrayIndexKey: static text split, order never changes
        cloneElement(node, { key: `n${index}` })
      : node,
  );
}

// Runs `pattern` over `text` and lets `render` turn each match into a node,
// splicing the untouched text in between. The shared primitive behind every
// rule below.
function splitAndReplace(
  text: string,
  pattern: RegExp,
  render: (match: RegExpMatchArray, key: string) => ReactNode,
): NodeList {
  const result: NodeList = [];
  let lastIndex = 0;
  let index = 0;
  for (const match of text.matchAll(pattern)) {
    const start = match.index ?? 0;
    if (start > lastIndex) result.push(text.slice(lastIndex, start));
    result.push(render(match, `m${index++}`));
    lastIndex = start + match[0].length;
  }
  if (lastIndex < text.length) result.push(text.slice(lastIndex));
  return result;
}

// Re-applies a rule to only the plain-text parts left by earlier rules, so
// passes never re-match inside a node an earlier pass already produced.
function mapStrings(nodes: NodeList, fn: (text: string) => NodeList): NodeList {
  return nodes.flatMap((node) =>
    typeof node === "string" ? fn(node) : [node],
  );
}

// ---- Individual rules, each a NodeList -> NodeList pass ----

// Species names that should always render in italics per standard
// scientific-writing convention, wherever they appear in model page prose.
const ITALIC_TERMS = [
  "Saccharomyces cerevisiae",
  "S. cerevisiae",
  "Rattus norvegicus",
  "Mycobacterium tuberculosis",
  "E. coli",
  "B. subtilis",
  "S. enterica",
];
const ITALIC_PATTERN = new RegExp(
  `(?:${ITALIC_TERMS.map((term) => term.replace(/\./g, "\\.")).join("|")})`,
  "g",
);

function applyItalics(nodes: NodeList): NodeList {
  return mapStrings(nodes, (text) =>
    splitAndReplace(text, ITALIC_PATTERN, (match, key) => (
      <em key={key}>{match[0]}</em>
    )),
  );
}

// Rate-constant exponents typed as "s-1" / "s−1" (also "units-1", "aa·s-1",
// etc) — superscripts the trailing "-1" so it reads as an exponent (s⁻¹)
// instead of a subtraction.
const EXPONENT_PATTERN = /(?<=[A-Za-z])[-−]1(?!\d)/g;

function applyExponents(nodes: NodeList): NodeList {
  return mapStrings(nodes, (text) =>
    splitAndReplace(text, EXPONENT_PATTERN, (_match, key) => (
      <sup key={key}>-1</sup>
    )),
  );
}

// Melting-temperature labels typed as "Tm,1" — renders as Tm with a
// subscript "1" instead of a literal comma-digit.
const TM_SUBSCRIPT_PATTERN = /Tm,(\d)/g;

function applyTmSubscripts(nodes: NodeList): NodeList {
  return mapStrings(nodes, (text) =>
    splitAndReplace(text, TM_SUBSCRIPT_PATTERN, (match, key) => (
      <Fragment key={key}>
        Tm<sub>{match[1]}</sub>
      </Fragment>
    )),
  );
}

// The effective-initiation-rate label typed as "k_init,eff" — renders as
// k_init with a subscript "eff" instead of a literal comma.
const K_INIT_EFF_PATTERN = /k_init,eff/g;

function applyKInitEffSubscript(nodes: NodeList): NodeList {
  return mapStrings(nodes, (text) =>
    splitAndReplace(text, K_INIT_EFF_PATTERN, (_match, key) => (
      <Fragment key={key}>
        k_init
        <sub>eff</sub>
      </Fragment>
    )),
  );
}

// A stand-in name for a tool/model that hasn't been finalized yet — bold and
// underlined so it reads unmistakably as a placeholder pending a real name.
const MODEL_NAME_PATTERN = /\[Model Name\]/g;

function applyModelNamePlaceholder(nodes: NodeList): NodeList {
  return mapStrings(nodes, (text) =>
    splitAndReplace(text, MODEL_NAME_PATTERN, (match, key) => (
      <strong key={key} className="underline">
        {match[0]}
      </strong>
    )),
  );
}

// Matches an inline citation marker like "[ref1]" as typed in a write-up.
// A leading space is consumed (not just the bracket) so the citation renders
// tight against the preceding word — InlineReference's own margin provides
// the visual gap, matching how <Cite> is used on the Project page.
const CITATION_PATTERN = / ?\[ref(\w+)\]/g;

function applyCitations(
  nodes: NodeList,
  references: WikiReference[],
): NodeList {
  const numberById = new Map(
    references.map((reference, index) => [reference.id, index + 1]),
  );
  return mapStrings(nodes, (text) =>
    splitAndReplace(text, CITATION_PATTERN, (match, key) => {
      const id = `ref${match[1]}`;
      const number = numberById.get(id);
      if (number === undefined) return match[0];
      return <InlineReference key={key} id={id} number={number} />;
    }),
  );
}

export function renderWithItalics(text: string): ReactNode {
  return reindexKeys(applyItalics([text]));
}

// Renders model-page prose: turns "[refN]" markers into numbered links to
// the page's References section, bolds+underlines "[Model Name]" as a
// pending-name placeholder, subscripts Tm/k_init labels, superscripts
// rate-constant exponents, and italicizes species names. A citation marker
// with no matching reference id renders as plain literal text.
export function renderModelText(
  text: string,
  references: WikiReference[] = [],
): ReactNode {
  let nodes: NodeList = [text];
  nodes = applyCitations(nodes, references);
  nodes = applyModelNamePlaceholder(nodes);
  nodes = applyTmSubscripts(nodes);
  nodes = applyKInitEffSubscript(nodes);
  nodes = applyExponents(nodes);
  nodes = applyItalics(nodes);
  return reindexKeys(nodes);
}
