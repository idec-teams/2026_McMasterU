import { renderModelText } from "@/lib/wiki/text";
import type { WikiReference } from "@/types/wiki";

// Renders a block of prose as one <p> per blank-line-separated paragraph,
// running each through renderModelText — italicizing species names, linking
// "[refN]" markers to their entry in `references`, and applying the other
// shared prose formatting rules. Renders nothing for empty/pending text.
export function Paragraphs({
  text,
  references,
}: {
  text: string;
  references: WikiReference[];
}) {
  const paragraphs = text.trim();
  if (!paragraphs) return null;
  return (
    <>
      {paragraphs.split(/\n\s*\n/).map((paragraph) => (
        <p key={paragraph}>{renderModelText(paragraph, references)}</p>
      ))}
    </>
  );
}
