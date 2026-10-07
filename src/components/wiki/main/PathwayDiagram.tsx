// The TAG pathway in S. cerevisiae with MEYcell's proposed edits marked on it.
//
// Drawn as inline SVG rather than exported from BioRender so it scales
// without blurring, re-colours with the theme, and stays editable.
//
// LAYOUT RULE: every arrow is ARROW long and every text-to-arrow gap is GAP,
// so node centres are *derived* (variable pitch) rather than placed on a fixed
// pitch. A fixed pitch cannot give both, because the labels differ in width —
// "PA" is a fifth of "Malonyl-CoA". `hw` is half the rendered text width at
// 17px; if you change a label, measure and update its `hw` or the gaps drift.
//
// SOURCE OF TRUTH: the iDEC report (Sept 30 2026). Only what the report
// supports appears here: five overexpressed genes, and the POX1/PXA1 knockout
// strains that block peroxisomal beta-oxidation. GUT2, FAA2 and the TGL
// lipases are not in the report and are not drawn.
//
// TEXT RULE: muted italic is reserved for the source strain.
//
// Compartment boxes were removed by request, so localisation now lives only in
// this comment and the <desc>: ACC1/FAS/TPS1 cytosolic, OLE1 and the
// PA->DAG->TAG run at the ER, DGA1 at the ER-lipid droplet interface
// (Sorger & Daum 2002, cited in the report), POX1/PXA1 peroxisomal, BGL2
// secreted to the cell wall.

const GAP = 12;
const ARROW = 56;
const SPINE_Y = 150;
const BRANCH_Y = 330;

const NODES = [
  { label: "Glucose-6-P", hw: 49 },
  { label: "Acetyl-CoA", hw: 45 },
  { label: "Malonyl-CoA", hw: 50 },
  { label: "Acyl-CoA", hw: 37 },
  { label: "PA", hw: 10 },
  { label: "DAG", hw: 17 },
  { label: "TAG droplets", hw: 50 },
  { label: "Lipid release", hw: 49 },
] as const;

/** Centres derived from the constant gap + arrow, so spacing cannot drift.
 *  The 89 start centres the whole run in the viewBox. */
const X = NODES.reduce<number[]>((acc, node, i) => {
  acc.push(
    i === 0 ? 89 : acc[i - 1] + NODES[i - 1].hw + node.hw + 2 * GAP + ARROW,
  );
  return acc;
}, []);

const arrowFrom = (i: number) => X[i] + NODES[i].hw + GAP;
const arrowMid = (i: number) => arrowFrom(i) + ARROW / 2;

/** Overexpressed steps above the spine, keyed to the arrow they act on. */
const BOOSTED = [
  { on: 1, gene: "ACC1**", strain: "S. cerevisiae · double mutant" },
  { on: 3, gene: "OLE1", strain: "S. cerevisiae" },
  { on: 5, gene: "DGA1", strain: "S. cerevisiae" },
  { on: 6, gene: "(RNAt) BGL2", strain: "S. cerevisiae" },
] as const;

/** Native steps and co-substrates, under the spine. */
const UNDER = [
  { x: arrowMid(0), label: "glycolysis" },
  { x: arrowMid(2), label: "FAS1 · FAS2" },
  { x: arrowMid(3), label: "+ Gro-3-P" },
  { x: arrowMid(4), label: "Pah1" },
] as const;

/** Trehalose hangs off glucose-6-phosphate: glycolysis carries most of the
 *  carbon on toward acetyl-CoA, TPS1 diverts some into trehalose. */
const TRE = { x: X[0] + 110 + GAP + 38, hw: 38 };

/* ------------------------------------------------------------------ */
/* Background gear train                                                */
/* ------------------------------------------------------------------ */

const VIEW_W = 1254;
const VIEW_H = 400;

/** Opacity of the whole gear layer — the one knob for how loud it is. */
const GEAR_OPACITY = 0.25;
/** Softens the gears so they sit behind the text instead of competing with
 *  it. In viewBox units; 0 turns it off. */
const GEAR_BLUR = 1.5;
/** Fill strength relative to the outline, so the gears read as hollow. */
const GEAR_FILL = 0.14;

/** Gear module: every gear shares it, so their teeth fit each other. */
const MODULE = 13;
/** Teeth per gear, left to right — small to big. */
const TEETH = [8, 10, 12, 15, 18, 22];
/** Each gear sits this many degrees above or below the last, alternating. */
const ZIGZAG = 20;
/** Seconds per turn of the largest gear; smaller ones spin proportionally faster. */
const BIGGEST_SECONDS = 32;

const pitchRadius = (teeth: number) => (MODULE * teeth) / 2;
const outerRadius = (teeth: number) => pitchRadius(teeth) + MODULE;
const mod = (v: number, n: number) => ((v % n) + n) % n;
const rad = (deg: number) => (deg * Math.PI) / 180;

/**
 * Lays the chain out gear by gear. Each one sits exactly one pitch-distance
 * from the last and is turned so a tooth lands in its neighbour's gap, so the
 * train stays meshed as it spins. The finished chain is then centred in the
 * figure, so resizing it never needs coordinates touched by hand.
 */
const GEARS = (() => {
  const chain: { x: number; y: number; teeth: number; phase: number }[] = [];
  TEETH.forEach((teeth, i) => {
    if (i === 0) {
      chain.push({ x: 0, y: 0, teeth, phase: 0 });
      return;
    }
    const prev = chain[i - 1];
    const angle = i % 2 ? ZIGZAG : -ZIGZAG;
    const distance = pitchRadius(prev.teeth) + pitchRadius(teeth);
    // Where the previous gear is at the contact point, as a fraction of one
    // tooth pitch (0.25 = tooth centre, 0.75 = gap centre). This gear must
    // present the complementary fraction there.
    const f = mod((angle - prev.phase) / (360 / prev.teeth), 1);
    chain.push({
      x: prev.x + distance * Math.cos(rad(angle)),
      y: prev.y + distance * Math.sin(rad(angle)),
      teeth,
      phase: angle + 180 - (360 / teeth) * (1 - f),
    });
  });
  const left = Math.min(...chain.map((g) => g.x - outerRadius(g.teeth)));
  const right = Math.max(...chain.map((g) => g.x + outerRadius(g.teeth)));
  const top = Math.min(...chain.map((g) => g.y - outerRadius(g.teeth)));
  const bottom = Math.max(...chain.map((g) => g.y + outerRadius(g.teeth)));
  const dx = (VIEW_W - (right - left)) / 2 - left;
  const dy = (VIEW_H - (bottom - top)) / 2 - top;
  return chain.map((g) => ({ ...g, x: g.x + dx, y: g.y + dy }));
})();

const pt = (radius: number, a: number) =>
  `${(radius * Math.cos(a)).toFixed(2)} ${(radius * Math.sin(a)).toFixed(2)}`;

/**
 * One gear, centred on the origin: a toothed rim, spoked windows and an axle
 * hole, all in a single path so the even-odd rule cuts the openings and one
 * stroke traces every edge.
 */
function gearPath(teeth: number): string {
  const pitch = pitchRadius(teeth);
  const root = pitch - MODULE * 1.1;
  const step = (Math.PI * 2) / teeth;

  let d = "";
  for (let i = 0; i < teeth; i++) {
    const a = i * step;
    d += `${i === 0 ? "M" : "L"}${pt(root, a)}`;
    d += `L${pt(pitch + MODULE, a + step * 0.12)}`;
    d += `L${pt(pitch + MODULE, a + step * 0.38)}`;
    d += `L${pt(root, a + step * 0.5)}`;
  }
  d += "Z";

  const hub = Math.max(pitch * 0.28, MODULE * 1.6);
  const rim = root - Math.max(MODULE * 1.2, pitch * 0.13);
  const spokes = teeth >= 18 ? 6 : teeth >= 12 ? 5 : teeth >= 10 ? 4 : 0;
  const spokeWidth = Math.max(MODULE * 1.3, pitch * 0.14);

  if (spokes && rim - hub > MODULE * 1.5) {
    const span = (Math.PI * 2) / spokes;
    for (let i = 0; i < spokes; i++) {
      const s0 = i * span;
      const s1 = s0 + span;
      const outerGap = Math.asin(spokeWidth / 2 / rim);
      const innerGap = Math.asin(spokeWidth / 2 / hub);
      d += `M${pt(rim, s0 + outerGap)}`;
      d += `A${rim} ${rim} 0 0 1 ${pt(rim, s1 - outerGap)}`;
      d += `L${pt(hub, s1 - innerGap)}`;
      d += `A${hub} ${hub} 0 0 0 ${pt(hub, s0 + innerGap)}Z`;
    }
  }

  const axle = hub * 0.45;
  d += `M${axle} 0A${axle} ${axle} 0 1 0 ${-axle} 0A${axle} ${axle} 0 1 0 ${axle} 0Z`;
  return d;
}

// biome-ignore lint/correctness/noUnusedVariables: kept for the commented-out
// <Gears /> in the figure below; delete both together if they stay off.
function Gears() {
  const biggest = Math.max(...TEETH);
  return (
    <g
      opacity={GEAR_OPACITY}
      filter={GEAR_BLUR ? "url(#pw-gear-blur)" : undefined}
      // No aria-hidden needed: the parent <svg role="img"> is announced as one
      // image from its <title>/<desc>, so its children are never read out.
    >
      <defs>
        <filter id="pw-gear-blur">
          <feGaussianBlur stdDeviation={GEAR_BLUR} />
        </filter>
      </defs>
      {GEARS.map((gear, i) => (
        <g
          key={gear.teeth}
          transform={`translate(${gear.x.toFixed(2)} ${gear.y.toFixed(2)}) rotate(${gear.phase.toFixed(2)})`}
        >
          <path
            className="mey-gear fill-dim stroke-dim"
            d={gearPath(gear.teeth)}
            fillRule="evenodd"
            fillOpacity={GEAR_FILL}
            strokeWidth={2}
            strokeLinejoin="round"
            style={{
              // Smaller gears spin faster, in proportion to their teeth...
              animationDuration: `${(BIGGEST_SECONDS * gear.teeth) / biggest}s`,
              // ...and each turns against its neighbour.
              animationDirection: i % 2 ? "reverse" : "normal",
            }}
          />
        </g>
      ))}
    </g>
  );
}

export function PathwayDiagram() {
  return (
    // Scales with its container and stays centred — the viewBox keeps the
    // proportions. The page itself never gets narrower than `min-width` on
    // <body> in globals.css, which is what keeps the labels legible.
    <figure>
      <div className="rounded-2xl bg-primary/[0.055] px-6 py-8">
        <svg
          viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
          className="mx-auto block h-auto w-full"
          role="img"
          aria-labelledby="pathway-title pathway-desc"
        >
          <title id="pathway-title">
            Proposed engineering of the triacylglycerol pathway in MEYcell
          </title>
          <desc id="pathway-desc">
            Glucose-6-phosphate feeds glycolysis to cytosolic acetyl-CoA, which
            is carboxylated to malonyl-CoA and built into acyl-CoA. With
            glycerol-3-phosphate, acyl-CoA forms phosphatidic acid at the
            endoplasmic reticulum, then diacylglycerol and triacylglycerol,
            stored in lipid droplets. Heating to 40 degrees opens the RNA
            thermometer on BGL2, degrading the cell wall and releasing the
            lipid. ACC1**, OLE1, DGA1, TPS1 and BGL2 are overexpressed.
            Peroxisomal beta-oxidation, which would burn acyl-CoA back to
            acetyl-CoA, is blocked in the POX1 and PXA1 knockout strains. TPS1
            diverts glucose-6-phosphate into trehalose, which protects the cells
            through freezing and drying.
          </desc>

          {/* Turning gears behind the pathway — hidden for now.
          <Gears />
          */}

          <defs>
            <marker
              id="pw-arrow"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M0 0 L10 5 L0 10 z" className="fill-dim" />
            </marker>
          </defs>

          {NODES.map((node, i) => (
            <text
              key={node.label}
              x={X[i]}
              y={SPINE_Y + 6}
              textAnchor="middle"
              className="fill-foreground"
              style={{ fontSize: 17 }}
            >
              {node.label}
            </text>
          ))}
          {NODES.slice(0, -1).map((node, i) => (
            <line
              key={node.label}
              x1={arrowFrom(i)}
              y1={SPINE_Y}
              x2={arrowFrom(i) + ARROW}
              y2={SPINE_Y}
              className="stroke-dim"
              strokeWidth={2.4}
              // Glycolysis is many steps, so that one arrow is dashed.
              strokeDasharray={i === 0 ? "7 5" : undefined}
              markerEnd="url(#pw-arrow)"
            />
          ))}

          {BOOSTED.map((item) => (
            <Boosted
              key={item.gene}
              x={arrowMid(item.on)}
              leaderY={SPINE_Y - 12}
              gene={item.gene}
              strain={item.strain}
            />
          ))}

          {UNDER.map((item) => (
            <text
              key={item.label}
              x={item.x}
              y={SPINE_Y + 28}
              textAnchor="middle"
              className="fill-dim"
              style={{ fontSize: 13 }}
            >
              {item.label}
            </text>
          ))}
          <text
            x={arrowMid(6)}
            y={SPINE_Y + 28}
            textAnchor="middle"
            className="fill-primary"
            style={{ fontSize: 13, fontWeight: 700 }}
          >
            40 °C
          </text>

          {/* Acyl-CoA would drain into peroxisomal beta-oxidation; the
              knockout strains cut that branch. */}
          <line
            x1={X[3]}
            y1={SPINE_Y + 18}
            x2={X[3]}
            y2={238}
            className="stroke-rose/50"
            strokeWidth={2.4}
          />
          <line
            x1={X[3] - 27}
            y1={240}
            x2={X[3] + 27}
            y2={240}
            className="stroke-rose"
            strokeWidth={4}
          />
          <text
            x={X[3]}
            y={274}
            textAnchor="middle"
            className="fill-foreground"
            style={{ fontSize: 15 }}
          >
            β-oxidation
          </text>
          <text
            x={X[3]}
            y={296}
            textAnchor="middle"
            className="fill-rose"
            style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.03em" }}
          >
            ΔPOX1 · ΔPXA1
          </text>
          <text
            x={X[3]}
            y={316}
            textAnchor="middle"
            className="fill-muted-foreground"
            style={{ fontSize: 12, fontStyle: "italic" }}
          >
            S. cerevisiae BY4741
          </text>

          {/* Trehalose branch, elbowing off the glucose-6-phosphate node. */}
          <Boosted
            x={(X[0] + (TRE.x - TRE.hw - GAP)) / 2}
            leaderY={BRANCH_Y - 10}
            gene="TPS1"
            strain="S. cerevisiae"
            top={216}
          />
          <path
            d={`M${X[0]} ${SPINE_Y + 18} V${BRANCH_Y} H${TRE.x - TRE.hw - GAP}`}
            className="stroke-dim"
            strokeWidth={2.4}
            fill="none"
            markerEnd="url(#pw-arrow)"
          />
          <text
            x={TRE.x}
            y={BRANCH_Y + 6}
            textAnchor="middle"
            className="fill-foreground"
            style={{ fontSize: 17 }}
          >
            Trehalose
          </text>
        </svg>
      </div>
    </figure>
  );
}

/** Up-arrow, gene, source strain, and a leader down to the step it acts on. */
function Boosted({
  x,
  leaderY,
  gene,
  strain,
  top = 40,
}: {
  x: number;
  leaderY: number;
  gene: string;
  strain: string;
  top?: number;
}) {
  return (
    <>
      <path
        d={`M${x} ${top} L${x + 11} ${top + 13} L${x + 5} ${top + 13} L${x + 5} ${top + 28} L${x - 5} ${top + 28} L${x - 5} ${top + 13} L${x - 11} ${top + 13} Z`}
        className="fill-primary"
      />
      <text
        x={x}
        y={top + 52}
        textAnchor="middle"
        className="fill-primary"
        style={{ fontSize: 16, fontWeight: 700 }}
      >
        {gene}
      </text>
      <text
        x={x}
        y={top + 72}
        textAnchor="middle"
        className="fill-muted-foreground"
        style={{ fontSize: 12, fontStyle: "italic" }}
      >
        {strain}
      </text>
      <line
        x1={x}
        y1={top + 80}
        x2={x}
        y2={leaderY}
        className="stroke-primary/50"
        strokeWidth={1.6}
      />
    </>
  );
}
