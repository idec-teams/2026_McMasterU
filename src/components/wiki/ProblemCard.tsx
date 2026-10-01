import { PROBLEM_CARD_COLORS } from "@/lib/wiki/colors";
import type { Problem } from "@/types/wiki";

export function ProblemCard({ problem }: { problem: Problem }) {
  const c = PROBLEM_CARD_COLORS[problem.color];

  return (
    <div
      className={`flex flex-col gap-4 border ${c.border} bg-surface p-8 transition-colors duration-200 ${c.hover}`}
    >
      <div className={`font-display text-5xl font-bold leading-none ${c.stat}`}>
        {problem.stat}
      </div>
      <div className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
        {problem.statLabel}
      </div>
      <h3 className="font-display text-xl text-foreground">{problem.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {problem.body}
      </p>
    </div>
  );
}
