import { ReferenceItem } from "@/components/wiki/ReferenceItem";
import { WikiSection } from "@/components/wiki/WikiSection";
import type { WikiReference } from "@/types/wiki";

// A WikiSection specialization for references. Placed manually by the page so
// its position is explicit, but still recognized by WikiPage's TOC. Numbering
// follows array order to match the inline markers from `createCitations`.
export function ReferencesSection({
  id,
  title,
  references,
}: {
  id: string;
  title: string;
  references: WikiReference[];
}) {
  return (
    <WikiSection id={id} title={title}>
      <ol className="flex flex-col gap-3">
        {references.map((reference, index) => (
          <ReferenceItem
            key={reference.id}
            number={index + 1}
            reference={reference}
          />
        ))}
      </ol>
    </WikiSection>
  );
}
