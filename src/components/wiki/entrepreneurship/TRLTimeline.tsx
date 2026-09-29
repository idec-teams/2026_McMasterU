export type TRLStep = { label: string; filled: boolean };

// A static readiness-level timeline: a row of circles connected by a line —
// filled (emerald) for a milestone already reached, empty for one still
// ahead — each with its milestone label. Stacks vertically with the line
// down the left on mobile, flips to a horizontal row with the line running
// through the circles from `sm:` up.
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
            className={`h-4 w-4 shrink-0 rounded-full border-2 bg-card ${
              step.filled
                ? "border-emerald-400 bg-emerald-400"
                : "border-border"
            }`}
          />
          <span className="text-xs leading-snug text-body">{step.label}</span>
        </div>
      ))}
    </div>
  );
}
