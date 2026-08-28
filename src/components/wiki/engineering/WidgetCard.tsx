import Image from "next/image";
import Link from "next/link";
import type { EngineeringWidget } from "@/types/wiki";

// One clickable widget: a background image (once one exists) with the title
// scrimmed over it, matching Banner's treatment so the page reads as one
// system. Until `image` is set, the scrim alone stands in as the background.
export function WidgetCard({ widget }: { widget: EngineeringWidget }) {
  const { title, href, image } = widget;

  return (
    <Link
      href={href}
      className="group relative flex aspect-[4/3] items-end overflow-hidden border border-border bg-section transition-colors duration-200 hover:border-primary/40"
    >
      {image ? (
        <Image
          src={image}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover grayscale-[0.35] transition duration-300 group-hover:grayscale-0"
        />
      ) : null}

      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
      <div className="absolute inset-0 bg-primary/5" />

      <h3 className="relative p-6 font-display text-2xl text-foreground">
        {title}
      </h3>
    </Link>
  );
}
