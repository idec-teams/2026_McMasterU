import { ModelImagePlaceholder } from "@/components/wiki/engineering/ModelImagePlaceholder";

// A single Results figure: placeholder image with its caption set below,
// left-aligned. Stack multiple in a column so each figure reads on its own
// as the page scrolls, rather than several images competing in one grid.
export function ModelFigure({ caption }: { caption: string }) {
  return (
    <figure>
      <ModelImagePlaceholder label="Image placeholder" />
      <figcaption className="mt-3 text-left text-sm leading-relaxed text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  );
}
