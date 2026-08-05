import type { WikiSectionProps } from "@/types/wiki";

// Base wiki section. `WikiPage` reads its `id`/`title` to build the table of
// contents, and `scroll-mt` offsets the anchor jump past the fixed header.
export function WikiSection({ id, title, children }: WikiSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-28 py-10 border-b border-border/50 first:pt-0 last:border-b-0"
    >
      <h2 className="font-display text-3xl text-foreground mb-5">{title}</h2>
      <div className="text-[15px] leading-relaxed text-body space-y-4">
        {children}
      </div>
    </section>
  );
}
