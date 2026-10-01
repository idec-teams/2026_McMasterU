import { InlineReference } from "@/components/wiki/InlineReference";
import type { WikiReference } from "@/types/wiki";

// Binds a page's ordered reference list to a `Cite` marker and hands the same
// list back for the references section. Numbering is the array index, so the
// inline markers and the bottom list always agree. Call once per page at module
// scope so the returned component keeps a stable identity.
export function createCitations(references: WikiReference[]) {
  const numberById = new Map(
    references.map((ref, index) => [ref.id, index + 1]),
  );

  function Cite({ id }: { id: string }) {
    const number = numberById.get(id);
    if (number === undefined) {
      // Unknown id — render nothing rather than a broken [undefined] marker.
      return null;
    }
    return <InlineReference id={id} number={number} />;
  }

  return { Cite, references };
}
