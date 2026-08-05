import {
  Children,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
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

export function WikiPage({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
}) {
  // TOC is inferred from the direct section children — add a section and it
  // appears in the sidebar automatically; nothing to keep in sync by hand.
  const items: TocItem[] = Children.toArray(children)
    .filter(isSectionElement)
    .map((el) => ({ id: el.props.id, title: el.props.title }));

  return (
    <div className="pt-32 pb-28">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-12 max-w-3xl">
          <SectionEyebrow tone="brand">{eyebrow}</SectionEyebrow>
          <h1 className="font-display text-5xl lg:text-6xl text-foreground leading-tight">
            {title}
          </h1>
          {intro ? (
            <p className="mt-6 text-body leading-relaxed max-w-2xl">{intro}</p>
          ) : null}
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,1fr)] gap-12">
          <WikiTOC items={items} />
          <div className="min-w-0 max-w-3xl">{children}</div>
        </div>
      </div>
    </div>
  );
}
