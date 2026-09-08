import { CountUpRange } from "@/components/ui/CountUpRange";
import { CountUpStat } from "@/components/ui/CountUpStat";

// Colour is the one deliberate exception to the site's monochrome teal
// palette here — TAM/SAM/SOM need to read as distinct, narrowing market
// layers, not as three identical brand-teal shapes.
const CIRCLE_COLORS = {
  tam: {
    border: "border-sky-400/70",
    bg: "bg-sky-500/15",
    label: "text-sky-300",
  },
  sam: {
    border: "border-primary/70",
    bg: "bg-primary/15",
    label: "text-primary",
  },
  som: {
    border: "border-emerald-400/70",
    bg: "bg-emerald-500/15",
    label: "text-emerald-300",
  },
};

// Diameters step down by an equal amount at each breakpoint (TAM-SAM ==
// SAM-SOM), so the visible crescent above each covering circle stays a
// consistent height as the whole diagram scales up.
const TAM_SIZE =
  "h-[20rem] w-[20rem] sm:h-[26rem] sm:w-[26rem] md:h-[32rem] md:w-[32rem] lg:h-[38rem] lg:w-[38rem]";
const SAM_SIZE =
  "h-[14rem] w-[14rem] sm:h-[18rem] sm:w-[18rem] md:h-[22rem] md:w-[22rem] lg:h-[26rem] lg:w-[26rem]";
const SOM_SIZE =
  "h-[9rem] w-[9rem] sm:h-[11rem] sm:w-[11rem] md:h-[13rem] md:w-[13rem] lg:h-[15rem] lg:w-[15rem]";

// TAM/SAM/SOM as three circles that converge at a shared bottom point, each
// diameter smaller than the last — a "target" diagram rather than a Venn
// diagram. They're stacked in DOM order back-to-front (TAM, then SAM, then
// SOM), so SOM paints fully on top, SAM is covered by SOM, and TAM is
// covered by SAM, with only each circle's own crescent showing above the
// one in front of it — no z-index needed, later elements just paint over
// earlier ones.
export function MarketOpportunityCircles() {
  return (
    <div className={`relative mx-auto ${TAM_SIZE}`}>
      {/* TAM — back layer, only its top crescent shows above SAM. */}
      <div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full border ${TAM_SIZE} ${CIRCLE_COLORS.tam.border} ${CIRCLE_COLORS.tam.bg}`}
      >
        <div className="flex flex-col items-center pt-6 text-center sm:pt-8 md:pt-10">
          <span
            className={`font-mono text-[10px] uppercase tracking-widest sm:text-xs ${CIRCLE_COLORS.tam.label}`}
          >
            TAM
          </span>
          <p className="mt-1 text-xs text-body sm:text-sm">
            Global Meat Industry
          </p>
          <CountUpStat
            target={1.5}
            decimals={1}
            prefix="$"
            suffix="T"
            className="mt-2 font-display text-3xl text-foreground sm:text-4xl md:text-5xl"
          />
          <p className="mt-1 text-[9px] uppercase tracking-widest text-muted-foreground sm:text-[10px]">
            USD
          </p>
        </div>
      </div>

      {/* SAM — middle layer, only its top crescent shows above SOM. */}
      <div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full border ${SAM_SIZE} ${CIRCLE_COLORS.sam.border} ${CIRCLE_COLORS.sam.bg}`}
      >
        <div className="flex flex-col items-center pt-5 text-center sm:pt-6 md:pt-8">
          <span
            className={`font-mono text-[10px] uppercase tracking-widest sm:text-xs ${CIRCLE_COLORS.sam.label}`}
          >
            SAM
          </span>
          <p className="mt-1 text-xs text-body sm:text-sm">
            Alternative Protein Market
          </p>
          <CountUpRange
            min={20}
            max={25}
            prefix="$"
            suffix="B"
            className="mt-2 font-display text-2xl text-foreground sm:text-3xl md:text-4xl"
          />
          <p className="mt-1 text-[9px] uppercase tracking-widest text-muted-foreground sm:text-[10px]">
            USD
          </p>
        </div>
      </div>

      {/* SOM — front layer, fully visible. */}
      <div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full border ${SOM_SIZE} ${CIRCLE_COLORS.som.border} ${CIRCLE_COLORS.som.bg}`}
      >
        <div className="flex h-full flex-col items-center justify-center px-3 text-center">
          <span
            className={`font-mono text-[10px] uppercase tracking-widest sm:text-xs ${CIRCLE_COLORS.som.label}`}
          >
            SOM
          </span>
          <p className="mt-1 text-[11px] text-body sm:text-xs">
            Target Manufacturers
          </p>
          <CountUpRange
            min={300}
            max={500}
            className="mt-1 font-display text-xl text-foreground sm:text-2xl md:text-3xl"
          />
          <p className="mt-1 text-[8px] uppercase tracking-widest text-muted-foreground sm:text-[9px]">
            Companies
          </p>
        </div>
      </div>
    </div>
  );
}
