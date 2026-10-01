import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

export function PagePlaceholder({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="min-h-[70vh] pt-40 pb-28">
      <div className="max-w-3xl mx-auto px-6">
        <SectionEyebrow tone="brand">{eyebrow}</SectionEyebrow>
        <h1 className="font-display text-5xl lg:text-6xl text-foreground leading-tight mb-6">
          {title}
        </h1>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </section>
  );
}
