import Image from "next/image";
import type { ReactNode } from "react";

// Reusable page banner. Pass the structured bits (title / image) as props; put
// any optional extra content (description, CTA, breadcrumb) in children. Leave
// `src` empty to render the treated navy fallback until a real image exists —
// swapping in a photo later is a one-line `src` change.
//
// Images are desaturated + scrimmed + brand-tinted so any source (a team photo
// or a microscopy macro) reads as part of the teal/navy system. For remote URLs
// add the host to `images.remotePatterns` in next.config; local files in
// /public need no config.
export function Banner({
  src,
  alt = "",
  title,
  children,
}: {
  src?: string;
  alt?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header
      className={`relative overflow-hidden border-b border-border bg-card ${
        // With an image, reserve a tall banner canvas and let text sit over it.
        // Without one, collapse to a compact header so there's no empty void.
        src ? "flex min-h-[20rem] items-end md:min-h-[26rem]" : ""
      }`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="object-cover grayscale-[0.35]"
        />
      ) : null}

      {/* Scrim: keeps text legible over any image, and gives the fallback depth. */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/30" />
      {/* Subtle brand tint so photos join the teal/navy palette. */}
      <div className="absolute inset-0 bg-primary/5" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-28 pb-14">
        <h1 className="font-display text-4xl leading-tight text-foreground md:text-6xl">
          {title}
        </h1>
        {children ? (
          <div className="mt-4 max-w-2xl text-sm leading-relaxed text-body">
            {children}
          </div>
        ) : null}
      </div>
    </header>
  );
}
