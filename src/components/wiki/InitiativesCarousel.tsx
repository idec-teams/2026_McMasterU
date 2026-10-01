"use client";

// from embla carousel
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

export type Initiative = {
  id: string;
  title: string;
  description: string;
  outcome: string;
  images: string[];
};

type Slide = {
  key: string;
  src: string;
  initiative: Initiative;
};

export function InitiativesCarousel({
  initiatives,
}: {
  initiatives: Initiative[];
}) {
  const slides: Slide[] = initiatives.flatMap((initiative) =>
    initiative.images.map((src, i) => ({
      key: `${initiative.id}-${i}`,
      src,
      initiative,
    })),
  );

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

  const activeSlide = slides[selectedIndex];
  const activeInitiative = activeSlide?.initiative ?? initiatives[0];

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
            {slides.map((slide, i) => (
              <div
                key={slide.key}
                className="min-w-0 shrink-0 grow-0 basis-full px-2 sm:basis-4/5"
              >
                <button
                  type="button"
                  onClick={() => scrollTo(i)}
                  aria-label={`Go to image ${i + 1}`}
                  className={
                    i === selectedIndex
                      ? "flex w-full cursor-default items-center justify-center transition-all"
                      : "flex w-full cursor-pointer items-center justify-center opacity-50 transition-all hover:opacity-80"
                  }
                >
                  <div className="border border-border bg-surface/30 p-2">
                    <img
                      src={slide.src}
                      alt={slide.initiative.title}
                      className="block h-[400px] w-auto object-cover"
                    />
                  </div>
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

      <div className="flex items-center justify-center gap-1.5">
        {slides.map((slide, i) => (
          <button
            key={slide.key}
            type="button"
            onClick={() => scrollTo(i)}
            aria-label={`Go to image ${i + 1}`}
            className={
              i === selectedIndex
                ? "h-1.5 w-1.5 rounded-full bg-primary transition-all"
                : "h-1.5 w-1.5 rounded-full bg-border transition-all hover:bg-primary/50"
            }
          />
        ))}
      </div>

      <div className="space-y-2 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-body">
          {activeInitiative.title}
        </p>
        <p className="mx-auto max-w-md text-sm leading-relaxed text-body">
          <span className="font-medium text-foreground">Description:</span>{" "}
          {activeInitiative.description}
        </p>
        {activeInitiative.outcome ? (
          <p className="mx-auto max-w-md text-sm leading-relaxed text-body">
            <span className="font-medium text-foreground">Outcome:</span>{" "}
            {activeInitiative.outcome}
          </p>
        ) : null}
      </div>
    </div>
  );
}
