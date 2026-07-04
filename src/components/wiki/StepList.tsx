"use client";

import { STEPS } from "@/lib/wiki/content";
import { StepRow } from "./StepRow";

export function StepList() {
  return (
    <div className="flex flex-col gap-12">
      {STEPS.map((step, i) => (
        <StepRow key={step.num} step={step} index={i} />
      ))}
    </div>
  );
}
