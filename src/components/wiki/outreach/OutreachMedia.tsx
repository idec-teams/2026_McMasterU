import Image from "next/image";
import type { ReactNode } from "react";
import { asset } from "@/lib/wiki/asset";

// Media building blocks for the Outreach page. Every image sits in the same
// frame the Community page uses (hairline border + inset padding), at a fixed
// aspect ratio, so photos of different shapes still line up.

type Aspect = "portrait" | "landscape" | "square";

// Spelled out in full so Tailwind can see them.
const ASPECT: Record<Aspect, string> = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
};

/** A framed photo with a caption. */
export function Photo({
  src,
  caption,
  aspect = "portrait",
  sizes = "(min-width: 768px) 18rem, 100vw",
}: {
  src: string;
  caption: string;
  aspect?: Aspect;
  sizes?: string;
}) {
  return (
    <figure>
      <div className="border border-border bg-surface/30 p-2">
        <div
          className={`relative overflow-hidden bg-section ${ASPECT[aspect]}`}
        >
          <Image
            src={asset(src)}
            alt={caption}
            fill
            sizes={sizes}
            className="object-cover"
          />
        </div>
      </div>
      <figcaption className="mt-2 text-sm leading-snug text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  );
}

/**
 * Text with a photo beside it — the photo sits in a fixed-width column on the
 * right from md up, and drops below the text on small screens. Keeps single
 * images from floating in a half-empty row.
 */
export function MediaRow({
  media,
  children,
}: {
  media: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_16rem] md:items-start">
      <div className="space-y-4">{children}</div>
      <div>{media}</div>
    </div>
  );
}

type Poster = { title: string; src: string };

/**
 * Research posters as equal-height cards. Posters come in different shapes,
 * so each is fitted (not cropped) inside the same landscape frame. Clicking
 * opens the full-resolution file, since the text isn't readable in a card.
 */
export function PosterGrid({ posters }: { posters: Poster[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {posters.map((poster) => (
        <figure
          key={poster.src}
          // An odd poster out spans the row, centred at card width, instead
          // of sitting alone on the left.
          className="sm:last:odd:col-span-2 sm:last:odd:mx-auto sm:last:odd:w-[calc(50%-0.75rem)]"
        >
          <a
            href={asset(poster.src)}
            target="_blank"
            rel="noreferrer"
            className="block border border-border bg-surface/30 p-2 transition-colors hover:border-primary/50"
          >
            <div className="relative aspect-[4/3] bg-white">
              <Image
                src={asset(poster.src)}
                alt={poster.title}
                fill
                sizes="(min-width: 640px) 24rem, 100vw"
                className="object-contain"
              />
            </div>
          </a>
          <figcaption className="mt-2 text-sm leading-snug text-muted-foreground">
            {poster.title}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
