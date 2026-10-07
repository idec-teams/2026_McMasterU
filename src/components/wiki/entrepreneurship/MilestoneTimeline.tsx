// A horizontal timeline, formatted like TRLTimeline (circles connected by a
// line) but always horizontal rather than flipping to a vertical stack on
// mobile — the alternating label placement below only makes sense against
// a horizontal line, so this scrolls on narrow screens instead. Each
// milestone's label alternates above/below the line rather than always
// sitting below the circle, so adjacent labels don't crowd each other.
//
// Every column renders its label twice (once visible, once
// `invisible`/`aria-hidden`) in the opposite slot, so both the
// above-the-line and below-the-line gaps are the same height for every
// milestone regardless of which one is actually showing text. That keeps
// every circle at the exact vertical center of the row without needing to
// measure anything, which is where the connecting line is drawn.
function MilestoneLabel({ text, hidden }: { text: string; hidden: boolean }) {
  return (
    <p
      aria-hidden={hidden || undefined}
      className={`text-sm text-body ${hidden ? "invisible" : ""}`}
    >
      {text}
    </p>
  );
}

export function MilestoneTimeline({ milestones }: { milestones: string[] }) {
  return (
    <div className="overflow-x-auto pb-2">
      {/* The row's natural width is its content (`shrink-0` columns), but a
          flex container in normal flow still stretches to 100% of its
          parent by default — `justify-center` is what actually centers the
          columns within that full-width row; `min-w-max` alone wouldn't. */}
      <div className="relative flex min-w-max items-center justify-center gap-4 px-2">
        <div
          aria-hidden
          className="absolute left-0 right-0 top-1/2 h-px bg-border"
        />
        {milestones.map((milestone, index) => {
          const above = index % 2 === 0;
          return (
            <div
              key={milestone}
              className="flex w-40 shrink-0 flex-col items-center gap-3 text-center"
            >
              <MilestoneLabel text={milestone} hidden={!above} />
              <span className="z-10 h-3 w-3 shrink-0 rounded-full border-2 border-accent bg-accent" />
              <MilestoneLabel text={milestone} hidden={above} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
