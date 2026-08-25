"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ReadMoreLink } from "@/components/wiki/ReadMoreLink";

type RoadmapPane = { title: string; lines: string[] };

// Placeholder copy — swap each pane's title/lines for the real roadmap
// write-up when it's ready.
const ROADMAP_PANES: RoadmapPane[] = [
  {
    title: "Prototype",
    lines: [
      "Lorem ipsum dolor sit amet.",
      "Consectetur adipiscing elit.",
      "Sed do eiusmod tempor.",
    ],
  },
  {
    title: "Lab Validation",
    lines: [
      "Incididunt ut labore dolore.",
      "Magna aliqua enim ad minim.",
      "Veniam quis nostrud exercitation.",
    ],
  },
  {
    title: "Pilot Fermentation",
    lines: [
      "Ullamco laboris nisi aliquip.",
      "Ex ea commodo consequat.",
      "Duis aute irure dolor.",
    ],
  },
  {
    title: "Partner Testing",
    lines: [
      "Reprehenderit in voluptate velit.",
      "Esse cillum dolore eu fugiat.",
      "Nulla pariatur excepteur sint.",
    ],
  },
  {
    title: "Scale-Up",
    lines: [
      "Occaecat cupidatat non proident.",
      "Sunt in culpa qui officia.",
      "Deserunt mollit anim id est.",
    ],
  },
  {
    title: "Product Launch",
    lines: [
      "Laborum et dolore magna aliqua.",
      "Ut enim ad minim veniam.",
      "Quis nostrud exercitation ullamco.",
    ],
  },
];

// Gap between panes in px — kept in sync with the track's `gap-4` below so
// the arrows scroll by exactly one pane at a time.
const PANE_GAP_PX = 16;

// Horizontal, non-looping roadmap carousel: side arrows step one pane at a
// time and disable at each end instead of wrapping back to the start.
export function RoadmapCarousel({ readMoreHref }: { readMoreHref: string }) {
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
    <div>
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
              <h3 className="font-display text-lg text-foreground mb-3">
                {pane.title}
              </h3>
              <div className="space-y-1 text-sm leading-relaxed text-body">
                {pane.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
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

      <div className="mt-6 flex justify-center">
        <ReadMoreLink href={readMoreHref} />
      </div>
    </div>
  );
}
