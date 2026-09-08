"use client";

import { useCountUpProgress } from "./useCountUpProgress";

// Animates from 0 up to `target` once the number scrolls into view.
// `decimals` > 0 switches from a comma-grouped integer (e.g. "50,000") to a
// fixed-point decimal (e.g. "1.5"), for figures like "$1.5T".
export function CountUpStat({
  target,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}) {
  const { ref, progress } = useCountUpProgress();
  const value = target * progress;
  const formatted =
    decimals > 0
      ? value.toFixed(decimals)
      : Math.round(value).toLocaleString("en-US");

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
