// Fixed placeholder coordinates (percent of the plot area, y measured from
// the top) standing in for competitors until real positioning data exists.
const SAMPLE_POINTS = [
  { x: 18, y: 72 },
  { x: 32, y: 58 },
  { x: 45, y: 80 },
  { x: 60, y: 40 },
  { x: 12, y: 30 },
  { x: 70, y: 65 },
  { x: 25, y: 15 },
  { x: 82, y: 48 },
  { x: 55, y: 22 },
  { x: 38, y: 90 },
];

// MEYcell sits in the top-right quadrant.
const MEYCELL_POINT = { x: 88, y: 12 };

// Quadrant scatter placeholder. Axis labels and point positions are
// deliberately generic until the real competitive-positioning criteria and
// data are decided.
export function CompetitiveLandscapeChart() {
  return (
    // Centered against its own width only — the y-axis label is absolutely
    // positioned off the left edge (via right-full) so it hangs outside this
    // box without shifting where the square itself is centered.
    <div className="relative mx-auto w-72 sm:w-96 md:w-[28rem] lg:w-[36rem]">
      <div className="absolute right-full top-0 flex h-full items-center pr-3">
        <span className="-rotate-90 whitespace-nowrap font-mono text-xs uppercase tracking-widest text-muted-foreground">
          y-axis
        </span>
      </div>

      <div className="relative aspect-square w-full border border-border bg-card">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-border" />
        <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-border" />

        {SAMPLE_POINTS.map((point) => (
          <div
            key={`${point.x}-${point.y}`}
            className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-muted-foreground/50"
            style={{ left: `${point.x}%`, top: `${point.y}%` }}
          />
        ))}

        <div
          className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
          style={{ left: `${MEYCELL_POINT.x}%`, top: `${MEYCELL_POINT.y}%` }}
        >
          <div className="h-4 w-4 rounded-full border-2 border-primary bg-primary/30" />
          <span className="mt-1 whitespace-nowrap font-mono text-[10px] uppercase tracking-widest text-primary">
            MEYcell
          </span>
        </div>
      </div>

      <p className="mt-2 text-center font-mono text-xs uppercase tracking-widest text-muted-foreground">
        x-axis
      </p>
    </div>
  );
}
