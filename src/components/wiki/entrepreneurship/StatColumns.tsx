import type { LucideIcon } from "lucide-react";
import { CountUpRange } from "@/components/ui/CountUpRange";
import { CountUpStat } from "@/components/ui/CountUpStat";

const VALUE_CLASSNAME =
  "font-display text-2xl uppercase text-emerald-400 md:text-3xl";

// One column in a StatColumns row. `icon` + `label` alone reads as a plain
// feature callout ("icon over label"); adding `description` instead switches
// an icon callout into a feature card ("icon, title, explanatory sentence").
//
// A stat callout ("label over big green number/word") comes from one of
// three mutually exclusive fields: `value` for a static, non-numeric word
// (e.g. "Canada"), `countUp` for a single number that animates from 0 on
// scroll into view (the same CountUpStat used by MarketOpportunityCircles),
// or `countUpRange` for an animated "$15-$250M"-style range.
export type StatColumn = {
  icon?: LucideIcon;
  label: string;
  description?: string;
  value?: string;
  countUp?: {
    target: number;
    prefix?: string;
    suffix?: string;
    decimals?: number;
  };
  countUpRange?: { min: number; max: number; prefix?: string; suffix?: string };
};

function Column({ column }: { column: StatColumn }) {
  const Icon = column.icon;
  const isStat =
    column.value !== undefined ||
    column.countUp !== undefined ||
    column.countUpRange !== undefined;

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-2 p-6 text-center">
      {isStat ? (
        <>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">
            {column.label}
          </span>
          {column.countUpRange ? (
            <CountUpRange
              min={column.countUpRange.min}
              max={column.countUpRange.max}
              prefix={column.countUpRange.prefix}
              suffix={column.countUpRange.suffix}
              className={VALUE_CLASSNAME}
            />
          ) : column.countUp ? (
            <CountUpStat
              target={column.countUp.target}
              prefix={column.countUp.prefix}
              suffix={column.countUp.suffix}
              decimals={column.countUp.decimals}
              className={VALUE_CLASSNAME}
            />
          ) : (
            <span className={VALUE_CLASSNAME}>{column.value}</span>
          )}
        </>
      ) : column.description ? (
        <>
          {Icon ? <Icon className="h-6 w-6 text-accent" /> : null}
          <span className="text-sm font-semibold uppercase text-foreground">
            {column.label}
          </span>
          <span className="text-xs leading-relaxed text-muted-foreground">
            {column.description}
          </span>
        </>
      ) : (
        <>
          {Icon ? <Icon className="h-6 w-6 text-accent" /> : null}
          <span className="text-sm uppercase text-body">{column.label}</span>
        </>
      )}
    </div>
  );
}

// A row of supporting columns (feature icons or quick stats) shown below a
// section's main content — used by both The Problem's per-box highlight
// rows (4 columns) and Market Opportunity's landing stats (3 columns).
// Stacked with a horizontal divider between rows on mobile, flipping to a
// single row with a vertical divider between columns from `sm:` up —
// switching axis (rather than a wrapping grid) is what keeps `divide-*`
// drawing a line only where columns actually meet, since a wrapping grid
// would also draw a stray divider at the start of each wrapped row.
//
// `bordered` (default true) wraps the row in its own box, for use standing
// alone (Market Opportunity's landing stats). Pass false when the row is
// already inside another bordered box (The Problem's per-point box), so the
// two don't nest into a box-within-a-box.
export function StatColumns({
  columns,
  bordered = true,
}: {
  columns: StatColumn[];
  bordered?: boolean;
}) {
  return (
    <div
      className={`flex flex-col divide-y divide-border sm:flex-row sm:divide-x sm:divide-y-0 ${
        bordered ? "border border-border bg-card" : ""
      }`}
    >
      {columns.map((column) => (
        <Column key={column.label} column={column} />
      ))}
    </div>
  );
}
