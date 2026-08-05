import type { WikiReference } from "@/types/wiki";

// A single entry in the bottom references list, and the anchor target that
// inline markers jump to (`#ref-<id>`).
export function ReferenceItem({
  number,
  reference,
}: {
  number: number;
  reference: WikiReference;
}) {
  const { id, authors, title, source, year, url } = reference;

  return (
    <li
      id={`ref-${id}`}
      className="scroll-mt-28 grid grid-cols-[1.5rem_1fr] gap-2 text-sm leading-relaxed"
    >
      <span className="font-mono text-xs text-primary/70 pt-0.5">
        {number}.
      </span>
      <span className="text-muted-foreground">
        {authors ? (
          <span className="text-foreground/80">{authors} </span>
        ) : null}
        <span className="text-foreground">{title}</span>
        {source ? <span className="italic">. {source}</span> : null}
        {year ? <span>, {year}</span> : null}.
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noreferrer noopener"
            className="ml-2 font-mono text-[11px] text-primary hover:underline"
          >
            ↗ link
          </a>
        ) : null}
      </span>
    </li>
  );
}
