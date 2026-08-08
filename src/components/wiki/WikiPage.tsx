import {
  Children,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";
import type { TocItem, WikiSectionProps } from "@/types/wiki";
import { ReferencesSection } from "./ReferencesSection";
import { WikiSection } from "./WikiSection";
import { WikiTOC } from "./WikiTOC";

// Section components WikiPage recognizes when building the table of contents.
// Register new WikiSection specializations here so they appear in the sidebar.
const SECTION_TYPES: unknown[] = [WikiSection, ReferencesSection];

function isSectionElement(
  node: ReactNode,
): node is ReactElement<WikiSectionProps> {
  return isValidElement(node) && SECTION_TYPES.includes(node.type);
}

// Content shell: table of contents + sections. The page header is a separate
// concern — put a <Banner> above this in the route file.
export function WikiPage({ children }: { children: ReactNode }) {
  // TOC is inferred from the direct section children — add a section and it
  // appears in the sidebar automatically; nothing to keep in sync by hand.
  const items: TocItem[] = Children.toArray(children)
    .filter(isSectionElement)
    .map((el) => ({ id: el.props.id, title: el.props.title }));

  return (
    <div className="pt-16 pb-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,1fr)] gap-12">
          <WikiTOC items={items} />
          <div className="min-w-0 max-w-3xl">{children}</div>
        </div>
      </div>
    </div>
  );
}
