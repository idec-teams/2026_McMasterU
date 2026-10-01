import {
  dotDelayMs,
  MARK_DOTS,
  MARK_PERIOD_MS,
  MARK_VIEWBOX,
  MARK_WAVE,
  WORDMARK_CELL_PATH,
  WORDMARK_MEY_PATH,
} from "@/lib/wiki/mey-cell-mark";

// The MEYcell logo, drawn rather than loaded: the wordmark is a traced path
// and the halftone field is 21 circles pulsing on the wave law recovered from
// the original gif (see mey-cell-mark.ts).
//
// Over the raster this buys crisp edges at any size and no image request at
// all. Pure CSS keyframes, so it stays a server component.
//
// `width` is the only size control — height follows the viewBox's aspect
// ratio, so the mark can never end up stretched. `white` picks the ink for
// "MEY" and the dots; "cell" stays brand teal either way.
export function MeyCellMark({
  width = 320,
  white = true,
  className,
}: {
  width?: number;
  /** `true` draws in the page's text colour; `false` in the artwork's cream. */
  white?: boolean;
  className?: string;
}) {
  // Both class names are spelled out in full: Tailwind scans source as plain
  // text, so a composed string like `fill-${x}` would generate no CSS.
  const ink = white ? "fill-foreground" : "fill-cream";

  return (
    <svg
      className={className}
      viewBox={MARK_VIEWBOX}
      role="img"
      focusable="false"
      // Width is inline rather than a Tailwind class because it is a runtime
      // value; Tailwind only sees literal strings in source.
      // `--mey-swing` drives the keyframes' scale, so the pulse depth is
      // defined once, in MARK_WAVE, instead of being restated in globals.css.
      style={
        {
          width,
          height: "auto",
          "--mey-swing": MARK_WAVE.swing,
        } as React.CSSProperties
      }
    >
      <title>MEYcell</title>
      {/* "cell" always takes the brand teal, for the same emphasis the
          wordmark has in running text. */}
      <path className={ink} d={WORDMARK_MEY_PATH} />
      <path
        className="fill-primary"
        d={WORDMARK_CELL_PATH}
        fillRule="evenodd"
      />
      {MARK_DOTS.map((dot) => {
        const [x, y, r] = dot;
        return (
          <circle
            key={`${x}-${y}`}
            className={`mey-dot ${ink}`}
            cx={x}
            cy={y}
            r={r}
            style={{
              animationDuration: `${MARK_PERIOD_MS}ms`,
              animationDelay: `${dotDelayMs(dot)}ms`,
            }}
          />
        );
      })}
    </svg>
  );
}
