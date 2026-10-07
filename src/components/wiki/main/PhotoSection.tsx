import Image from "next/image";
import type { ReactNode } from "react";
import { SectionCue } from "@/components/ui/SectionCue";
import { asset } from "@/lib/wiki/asset";

// The colour each section's top edge fades from, so a photo melts into the
// section above it. Spelled out in full so Tailwind can see the classes.
const FADE_FROM = {
  background: "from-background",
  raised: "from-raised",
} as const;

/**
 * A full-screen home-page section over a photo, content centred vertically.
 * Two scrims keep text legible: dark on the left where the text sits, opening
 * up to the right so the photo shows; and a top/bottom fade so the image
 * blends into its neighbours instead of ending on a hard edge.
 */
export function PhotoSection({
  id,
  src,
  fadeFrom = "background",
  cueTo,
  children,
}: {
  id: string;
  /** Path under /public. */
  src: string;
  /** Colour of the section above, for a seamless top edge. */
  fadeFrom?: keyof typeof FADE_FROM;
  /** id of the next section, for the cue pinned to the bottom edge. */
  cueTo?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-deep pt-20 pb-8"
    >
      <Image
        src={asset(src)}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-deep via-deep/80 to-deep/20" />
      <div
        className={`absolute inset-0 bg-gradient-to-b via-transparent to-raised ${FADE_FROM[fadeFrom]}`}
      />

      {/* `w-full` because auto margins stop a flex item from stretching. */}
      <div className="relative mx-auto w-full max-w-7xl px-6">{children}</div>

      {cueTo ? <SectionCue to={cueTo} /> : null}
    </section>
  );
}
