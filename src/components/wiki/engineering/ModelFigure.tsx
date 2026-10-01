import Image from "next/image";
import { ModelImagePlaceholder } from "@/components/wiki/engineering/ModelImagePlaceholder";

// A single Results figure: a real image once `src` is set, otherwise a
// placeholder, with its caption below, left-aligned. Stack multiple in a
// column so each figure reads on its own as the page scrolls, rather than
// several images competing in one grid.
export function ModelFigure({
  caption,
  src,
  width,
  height,
}: {
  caption: string;
  src?: string;
  width?: number;
  height?: number;
}) {
  return (
    <figure>
      {src ? (
        <div
          className="relative w-full overflow-hidden border border-border bg-section"
          // Frame matches the image's own aspect ratio so it fills the box
          // edge-to-edge instead of letterboxing inside a fixed one.
          style={
            width && height
              ? { aspectRatio: `${width} / ${height}` }
              : undefined
          }
        >
          <Image
            src={src}
            alt={caption}
            fill
            sizes="(min-width: 1024px) 800px, 100vw"
            className="object-contain"
          />
        </div>
      ) : (
        <ModelImagePlaceholder label="Image placeholder" />
      )}
      <figcaption className="mt-3 text-left text-sm leading-relaxed text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  );
}
