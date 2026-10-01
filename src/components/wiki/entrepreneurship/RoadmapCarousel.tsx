"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type RoadmapPane = { year: string; title: string; description: string };

const ROADMAP_PANES: RoadmapPane[] = [
  {
    year: "2026",
    title: "Prototype",
    description: "Refine and validate technology.",
  },
  {
    year: "2027",
    title: "Pilot Fermentation",
    description: "Pilot-scale production and optimization.",
  },
  {
    year: "2028",
    title: "Customer Trials",
    description: "Partner testing and product validation.",
  },
  {
    year: "2029",
    title: "Regulatory",
    description: "Submit and obtain regulatory approval.",
  },
  {
    year: "2030",
    title: "Commercial Launch",
    description: "First commercial production and sales.",
  },
  {
    year: "2032+",
    title: "Global Scale",
    description: "Expand manufacturing and market reach.",
  },
];

// Gap between panes in px — kept in sync with the track's `gap-4` below so
// the arrows scroll by exactly one pane at a time.
const PANE_GAP_PX = 16;

// Horizontal, non-looping roadmap carousel: side arrows step one pane at a
// time and disable at each end instead of wrapping back to the start.
export function RoadmapCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateScrollState = () => {
      setCanScrollPrev(track.scrollLeft > 4);
      setCanScrollNext(
        track.scrollLeft < track.scrollWidth - track.clientWidth - 4,
      );
    };

    updateScrollState();
    track.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      track.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scrollByPane = (direction: 1 | -1) => {
    const track = trackRef.current;
    const pane = track?.firstElementChild;
    if (!track || !(pane instanceof HTMLElement)) return;
    track.scrollBy({
      left: direction * (pane.offsetWidth + PANE_GAP_PX),
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => scrollByPane(-1)}
        disabled={!canScrollPrev}
        aria-label="Previous roadmap step"
        className="absolute left-0 top-1/2 z-10 flex h-9 w-9 -translate-x-4 -translate-y-1/2 items-center justify-center border border-accent bg-card text-accent transition-opacity hover:bg-accent/10 disabled:pointer-events-none disabled:opacity-30"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 py-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {ROADMAP_PANES.map((pane) => (
          <div
            key={pane.title}
            className="flex w-64 shrink-0 snap-start flex-col items-center border border-border bg-accent/5 p-6 text-center transition-colors duration-200 hover:border-accent"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent mb-1">
              {pane.year}
            </span>
            <h3 className="font-display text-lg text-foreground mb-3">
              {pane.title}
            </h3>
            <p className="text-sm leading-relaxed text-body">
              {pane.description}
            </p>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollByPane(1)}
        disabled={!canScrollNext}
        aria-label="Next roadmap step"
        className="absolute right-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 translate-x-4 items-center justify-center border border-accent bg-card text-accent transition-opacity hover:bg-accent/10 disabled:pointer-events-none disabled:opacity-30"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}
