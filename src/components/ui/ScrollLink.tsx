"use client";

import type { ReactNode } from "react";

/** How long the glide takes, in ms. */
const DURATION = 1000;

/** Slow start, quick middle, gentle landing. */
const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;

/**
 * An in-page link that glides to its target with an eased animation instead of
 * jumping. It stays a real `<a href="#id">`, so it still works before
 * hydration, with JavaScript off, or if the target is missing. Users who ask
 * for reduced motion get the plain jump.
 */
export function ScrollLink({
  to,
  className,
  children,
}: {
  /** id of the element to scroll to, without the "#". */
  to: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={`#${to}`}
      className={className}
      onClick={(event) => {
        const target = document.getElementById(to);
        if (!target || matchMedia("(prefers-reduced-motion: reduce)").matches) {
          return;
        }
        event.preventDefault();

        const start = window.scrollY;
        const distance = target.getBoundingClientRect().top;
        const began = performance.now();

        const step = (now: number) => {
          const t = Math.min((now - began) / DURATION, 1);
          // "instant" so a site-wide `scroll-behavior: smooth` can't smooth
          // every frame on top of this animation.
          window.scrollTo({
            top: start + distance * easeInOutCubic(t),
            behavior: "instant",
          });
          if (t < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }}
    >
      {children}
    </a>
  );
}
