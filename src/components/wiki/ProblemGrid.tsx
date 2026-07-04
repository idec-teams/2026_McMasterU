"use client";

import { PROBLEMS } from "@/lib/wiki/content";
import { ProblemCard } from "./ProblemCard";

export function ProblemGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      {PROBLEMS.map((problem, i) => (
        <ProblemCard key={problem.title} problem={problem} index={i} />
      ))}
    </div>
  );
}
