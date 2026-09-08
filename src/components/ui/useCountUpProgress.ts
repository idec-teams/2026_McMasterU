"use client";

import { useEffect, useRef, useState } from "react";

// Quick, snappy count-up — not a slow ticking odometer.
const DEFAULT_DURATION_MS = 900;

// Tracks a 0→1 progress value that starts animating once the returned ref's
// element scrolls into view. Shared by CountUpStat and CountUpRange so both
// stay in sync on timing without duplicating the intersection/rAF plumbing.
export function useCountUpProgress(durationMs: number = DEFAULT_DURATION_MS) {
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let frame: number;
    const start = performance.now();

    const tick = (now: number) => {
      const next = Math.min((now - start) / durationMs, 1);
      setProgress(next);
      if (next < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, durationMs]);

  return { ref, progress };
}
