// "solid" = milestone already reached (filled emerald). "pastel" = the same
// light-green fill used for the competitor boxes elsewhere on this page,
// for a milestone that's partway there. "empty" = still ahead (hollow).
export type TRLStep = { label: string; fill: "solid" | "pastel" | "empty" };

const CIRCLE_FILL: Record<TRLStep["fill"], string> = {
  solid: "border-emerald-400 bg-emerald-400",
  // No contrasting ring — the border matches the fill so the circle reads
  // as a plain pastel dot instead of a pastel fill with a darker-green
  // perimeter.
  pastel: "border-emerald-100 bg-emerald-100",
  empty: "border-border bg-card",
};

// A static readiness-level timeline: a row of circles connected by a line,
// each with its milestone label. Stacks vertically with the line down the
// left on mobile, flips to a horizontal row with the line running through
// the circles from `sm:` up.
export function TRLTimeline({ steps }: { steps: TRLStep[] }) {
  return (
    <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-2">
      <div
        aria-hidden
        className="absolute bottom-0 left-2 top-0 w-px bg-border sm:bottom-auto sm:left-0 sm:right-0 sm:top-2 sm:h-px sm:w-auto"
      />
      {steps.map((step) => (
        <div
          key={step.label}
          className="relative z-10 flex items-center gap-3 sm:flex-1 sm:flex-col sm:items-center sm:gap-2 sm:text-center"
        >
          <span
            className={`h-4 w-4 shrink-0 rounded-full border-2 ${CIRCLE_FILL[step.fill]}`}
          />
          <span className="text-xs leading-snug text-body">{step.label}</span>
        </div>
      ))}
    </div>
  );
}
