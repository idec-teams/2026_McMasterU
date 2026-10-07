import type { WikiSectionProps } from "@/types/wiki";

// Base wiki section. `WikiPage` reads its `id`/`title` to build the table of
// contents, and `scroll-mt` offsets the anchor jump past the fixed header.
//
// The title is capped at `max-w-3xl` (the same reading-column width
// `WikiPage` already uses for body text when its TOC is shown) and
// centered via `mx-auto`. On a TOC page that column is already this width,
// so the cap is a no-op there; it only narrows things on a TOC-less page
// (e.g. the Entrepreneurship landing page) where the content would
// otherwise run the full page width.
export function WikiSection({
  id,
  title,
  hideTitle,
  children,
}: WikiSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-28 py-10 border-b border-border/50 first:pt-0 last:border-b-0"
    >
      <h2
        className={
          hideTitle
            ? "sr-only"
            : "font-display text-3xl text-foreground mb-5 max-w-3xl mx-auto"
        }
      >
        {title}
      </h2>
      <div className="text-[15px] leading-relaxed text-body space-y-4">
        {children}
      </div>
    </section>
  );
}
