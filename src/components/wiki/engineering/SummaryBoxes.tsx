import type { SummaryPoint } from "@/types/wiki";

// Three at-a-glance callouts (Experimental Design / Key Findings /
// Implications) shown above a model's detailed write-up.
export function SummaryBoxes({ points }: { points: SummaryPoint[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {points.map((point) => (
        <div key={point.title} className="border border-border bg-card p-6">
          <h3 className="font-display text-base text-foreground mb-2">
            {point.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {point.body}
          </p>
        </div>
      ))}
    </div>
  );
}
