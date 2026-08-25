"use client";

import { useCountUpProgress } from "./useCountUpProgress";

// Same count-up-on-scroll behaviour as CountUpStat, but for a range display
// like "$20-$25B" — both ends animate together off one shared progress value.
export function CountUpRange({
  min,
  max,
  prefix = "",
  suffix = "",
  className = "",
}: {
  min: number;
  max: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const { ref, progress } = useCountUpProgress();
  const minValue = Math.round(min * progress).toLocaleString("en-US");
  const maxValue = Math.round(max * progress).toLocaleString("en-US");

  return (
    <span ref={ref} className={className}>
      {prefix}
      {minValue}-{prefix}
      {maxValue}
      {suffix}
    </span>
  );
}
