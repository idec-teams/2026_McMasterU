// Inline citation marker, e.g. [1]. Links to its matching entry in the
// references section. The number is supplied by `createCitations`, which binds
// it to the page's ordered reference list.
export function InlineReference({
  id,
  number,
}: {
  id: string;
  number: number;
}) {
  return (
    <sup className="ml-0.5">
      <a
        href={`#ref-${id}`}
        className="font-mono text-[0.7em] text-primary hover:underline"
        aria-label={`Reference ${number}`}
      >
        [{number}]
      </a>
    </sup>
  );
}
