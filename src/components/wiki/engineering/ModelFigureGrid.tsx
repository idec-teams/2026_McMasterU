import Image from "next/image";
import { ModelImagePlaceholder } from "@/components/wiki/engineering/ModelImagePlaceholder";
import { asset } from "@/lib/wiki/asset";
import type { ModelFigurePanel } from "@/types/wiki";

// A multi-part figure (Figure 2a, 2b, ...): one labelled panel per sub-plot,
// laid out in a grid, with the shared caption below the whole figure.
export function ModelFigureGrid({
  caption,
  panels,
}: {
  caption: string;
  panels: ModelFigurePanel[];
}) {
  return (
    <figure>
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-10">
        {panels.map((panel) => (
          <div
            key={panel.label}
            className="w-full space-y-2 sm:w-[calc(50%-1rem)]"
          >
            {panel.src ? (
              <div
                className="relative w-full overflow-hidden border border-border bg-section"
                style={
                  panel.width && panel.height
                    ? { aspectRatio: `${panel.width} / ${panel.height}` }
                    : undefined
                }
              >
                <Image
                  src={asset(panel.src)}
                  alt={panel.caption}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-contain"
                />
              </div>
            ) : (
              <ModelImagePlaceholder
                label={`Image placeholder (${panel.label})`}
              />
            )}
            <p className="text-left text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">
                ({panel.label})
              </span>{" "}
              {panel.caption}
            </p>
          </div>
        ))}
      </div>
      <figcaption className="mt-3 text-left text-sm leading-relaxed text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  );
}
