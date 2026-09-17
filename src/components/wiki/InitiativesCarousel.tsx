"use client";

// from embla carousel
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

export type Initiative = {
  id: string;
  title: string;
  description: string;
  outcome: string;
};

export function InitiativesCarousel({
  initiatives,
}: {
  initiatives: Initiative[];
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "center",
    containScroll: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const active = initiatives[selectedIndex];

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2 sm:gap-3">
        {canScrollPrev ? (
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous initiative"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary/60 hover:text-primary"
          >
            &#8249;
          </button>
        ) : (
          <div className="h-8 w-8 shrink-0" />
        )}

        <div className="min-w-0 flex-1 overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {initiatives.map((item, i) => (
              <div
                key={item.id}
                className="min-w-0 shrink-0 grow-0 basis-full px-2 sm:basis-4/5"
              >
                <button
                  type="button"
                  onClick={() => scrollTo(i)}
                  aria-label={`Go to ${item.title}`}
                  className={
                    i === selectedIndex
                      ? "flex aspect-video w-full cursor-default items-center justify-center border border-border bg-surface/30 text-sm text-body transition-all"
                      : "flex aspect-video w-full cursor-pointer items-center justify-center border border-dashed border-border bg-surface/20 text-xs text-body opacity-50 transition-all hover:opacity-80"
                  }
                >
                  {i === selectedIndex ? "[image]" : ""}
                </button>
              </div>
            ))}
          </div>
        </div>

        {canScrollNext ? (
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next initiative"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary/60 hover:text-primary"
          >
            &#8250;
          </button>
        ) : (
          <div className="h-8 w-8 shrink-0" />
        )}
      </div>

      <div className="space-y-2 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-body">
          {active.title}
        </p>
        <p className="mx-auto max-w-md text-sm leading-relaxed text-body">
          <span className="font-medium text-foreground">Description:</span>{" "}
          {active.description}
        </p>
        {active.outcome ? (
          <p className="mx-auto max-w-md text-sm leading-relaxed text-body">
            <span className="font-medium text-foreground">Outcome:</span>{" "}
            {active.outcome}
          </p>
        ) : null}
      </div>

      <div className="flex items-center justify-center gap-1.5">
        {initiatives.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => scrollTo(i)}
            aria-label={`Go to ${item.title}`}
            className={
              i === selectedIndex
                ? "h-1.5 w-1.5 rounded-full bg-primary transition-all"
                : "h-1.5 w-1.5 rounded-full bg-border transition-all hover:bg-primary/50"
            }
          />
        ))}
      </div>
    </div>
  );
}
