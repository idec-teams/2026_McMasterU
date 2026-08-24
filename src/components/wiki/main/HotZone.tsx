"use client";

import { useEffect, useRef } from "react";

const SIZE = 380; // px — diameter of the hot zone

// Cursor-following thermal hot spot. The visual sits inside the hero's masked
// texture stack (so it fades at the edges like everything else), but pointer
// events are read from the panel itself — the stack is pointer-events-none.
//
// The element is moved by mutating style.transform directly instead of React
// state: pointermove fires dozens of times per second and none of it needs a
// re-render. The long CSS transition retargets on every move, which is what
// produces the subtle "chasing" lag.
export function HotZone() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const panel = el.closest<HTMLElement>("[data-hero-panel]");
    if (!panel) return;

    const onMove = (e: PointerEvent) => {
      const rect = panel.getBoundingClientRect();
      const x = e.clientX - rect.left - SIZE / 2;
      const y = e.clientY - rect.top - SIZE / 2;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      el.style.opacity = "1";
    };
    const onLeave = () => {
      el.style.opacity = "0";
    };

    panel.addEventListener("pointermove", onMove);
    panel.addEventListener("pointerleave", onLeave);
    return () => {
      panel.removeEventListener("pointermove", onMove);
      panel.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="absolute top-0 left-0 opacity-0 transition-[transform,opacity] duration-1000 ease-out motion-reduce:transition-none"
      style={{
        width: SIZE,
        height: SIZE,
        background:
          "radial-gradient(circle, rgb(var(--ember-rgb) / 0.22), transparent 68%)",
      }}
    />
  );
}
