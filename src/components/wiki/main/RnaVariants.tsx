// A figurative RNA alignment: one parent thermometer sequence with variants
// stacked under it. Substitutions sit off the baseline and in gold, and an
// insertion knocks the rest of its row out of register, so the block reads as
// a mutant library rather than as real data. Nothing here is a real sequence.

const BASES = ["A", "G", "C", "U"] as const;

const COLS = 26;
const ROWS = 11;
const CELL = 12; // px between bases
const LINE = 34; // px between rows
const PAD = 8;

/** Deterministic in [0, 1), so the server and the browser draw the same thing. */
function rand(i: number, k: number) {
  const s = Math.sin(i * 127.1 + k * 311.7) * 43758.5453;
  return s - Math.floor(s);
}

const PARENT = Array.from(
  { length: COLS },
  (_, i) => BASES[Math.floor(rand(i, 1) * 4)],
);

type Cell = {
  base: string;
  /** Changed from the parent: drawn in gold, nudged off the baseline. */
  mutated: boolean;
  /** Horizontal offset in px, for the row that carries an insertion. */
  shift: number;
  dy: number;
};

/** The parent row, then variants that differ from it at a few positions. */
function buildRow(row: number): Cell[] {
  if (row === 0) {
    return PARENT.map((base) => ({ base, mutated: false, shift: 0, dy: 0 }));
  }
  // Two or three substitutions, and on every third row an insertion that
  // pushes everything after it half a cell to the right.
  const count = 2 + Math.floor(rand(row, 2) * 2);
  const sites = new Set(
    Array.from({ length: count }, (_, k) =>
      Math.floor(rand(row, 10 + k) * COLS),
    ),
  );
  const insertAt = row % 3 === 0 ? Math.floor(rand(row, 5) * COLS) : -1;

  return PARENT.map((parent, i) => {
    const mutated = sites.has(i);
    const base = mutated
      ? BASES[(BASES.indexOf(parent) + 1 + Math.floor(rand(row, i) * 3)) % 4]
      : parent;
    return {
      base,
      mutated,
      shift: insertAt >= 0 && i >= insertAt ? CELL * 0.5 : 0,
      dy: mutated ? (rand(row, i + 40) - 0.5) * 7 : 0,
    };
  });
}

const ROWS_DATA = Array.from({ length: ROWS }, (_, row) => buildRow(row));

const WIDTH = COLS * CELL + CELL + PAD * 2;
const HEIGHT = ROWS * LINE + PAD * 2;

export function RnaVariants() {
  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      className="h-auto w-full"
      role="img"
      aria-labelledby="rna-variants-title"
    >
      <title id="rna-variants-title">
        A parent RNA thermometer sequence with mutant variants stacked beneath
        it, substitutions highlighted
      </title>

      {ROWS_DATA.map((cells, row) => (
        <g
          // biome-ignore lint/suspicious/noArrayIndexKey: rows are positional
          key={row}
          transform={`translate(${PAD} ${PAD + LINE * (row + 0.7)})`}
        >
          {cells.map((cell, i) => (
            <text
              // biome-ignore lint/suspicious/noArrayIndexKey: bases are positional
              key={i}
              x={i * CELL + cell.shift}
              y={cell.dy}
              className={cell.mutated ? "fill-gold" : "fill-primary"}
              opacity={cell.mutated ? 0.85 : row === 0 ? 0.5 : 0.3}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 13,
              }}
            >
              {cell.base}
            </text>
          ))}
        </g>
      ))}
    </svg>
  );
}
