import {
  Children,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";
import { ReferencesSection } from "@/components/wiki/ReferencesSection";
import { WikiSection } from "@/components/wiki/WikiSection";
import { WikiTOC } from "@/components/wiki/WikiTOC";
import type { TocItem, WikiSectionProps } from "@/types/wiki";

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
export function WikiPage({
  children,
  showToc = true,
}: {
  children: ReactNode;
  // Some pages (e.g. a dynamic landing page that links out to its own
  // details page) don't want the on-page table of contents; set to false
  // to render sections full-width without it.
  showToc?: boolean;
}) {
  // TOC is inferred from the direct section children — add a section and it
  // appears in the sidebar automatically; nothing to keep in sync by hand.
  const items: TocItem[] = Children.toArray(children)
    .filter(isSectionElement)
    .map((el) => ({ id: el.props.id, title: el.props.title }));

  return (
    <div className="pt-16 pb-28">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={
            showToc
              ? "grid grid-cols-1 lg:grid-cols-[200px_minmax(0,1fr)] gap-12"
              : ""
          }
        >
          {showToc ? <WikiTOC items={items} /> : null}
          {/* With no TOC to share the row with, drop the max-w-3xl reading
              column and let sections use the full page width, centering
              each section's heading/text/links within it. */}
          <div
            className={showToc ? "min-w-0 max-w-3xl" : "min-w-0 text-center"}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
