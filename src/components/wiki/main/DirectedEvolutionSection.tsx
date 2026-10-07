import { FlowCue } from "@/components/ui/SectionCue";
import { PathwayDiagram } from "@/components/wiki/main/PathwayDiagram";
import { RnaVariants } from "@/components/wiki/main/RnaVariants";

// Fades the figure out towards the text column on its left, so it needs no
// frame to sit apart from the prose.
const FIGURE_FADE =
  "linear-gradient(105deg, transparent 2%, black 58%, black 94%, transparent 100%)";

// How MEYcell counts as directed evolution: variation, selection and
// iteration applied to the RNA thermometer. Completed computational work is
// past tense; the wet-lab round is written as plan.
export function DirectedEvolutionSection() {
  return (
    <section id="directed-evolution" className="bg-background pt-16 pb-28">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-display text-4xl text-foreground lg:text-5xl">
          Directed Evolution
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div className="max-w-3xl">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Directed evolution is variation and selection, repeated, toward a
              function you choose. Ours runs on the RNA thermometer, the switch
              that decides when MEYcell gives up its fat.
            </p>

            <h3 className="font-display mt-10 mb-3 text-2xl text-foreground">
              Variation
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              A constraint-based search built on nuad mutates the designable
              flank of each candidate thermometer, and NUPACK scores how the
              resulting structures behave across temperature. Our plan widens
              that pool further with error-prone PCR.
            </p>

            <h3 className="font-display mt-10 mb-3 text-2xl text-foreground">
              Selection
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Fitness is the switch itself: how completely the start codon stays
              buried when cold, and how sharply it opens at temperature.
              Candidates were swept across a ±10 °C window in half-degree steps,
              penalised for leaking below the target and rewarded for switching
              cleanly at it, with GC content, loop size and stem length as
              filters. Our plan then selects in yeast on a fluorescent reporter
              at 40 °C, keeping the cells that respond most and fastest.
            </p>

            <h3 className="font-display mt-10 mb-3 text-2xl text-foreground">
              Iteration
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Every round fed the next. Starting from a control sequence we
              changed one feature at a time: bulges in the stem, adenines in the
              loop, a shortened GC clamp. Bulges opened the structure most,
              while loop adenines barely moved it. Those findings guided several
              further rounds, arriving at three final sequences that melt
              between 36 and 44 °C.
            </p>
          </div>

          {/* Decorative: hidden rather than stacked once the columns collapse,
              and faded on the left so it never crowds the text. */}
          <div
            className="hidden self-center lg:block"
            style={{ maskImage: FIGURE_FADE, WebkitMaskImage: FIGURE_FADE }}
          >
            <RnaVariants />
          </div>
        </div>

        <h3 className="font-display mt-20 mb-8 text-2xl text-foreground">
          Proposed Engineering
        </h3>
        <PathwayDiagram />

        <FlowCue to="promo" />
      </div>
    </section>
  );
}
