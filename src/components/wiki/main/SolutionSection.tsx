import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { CellViz } from "@/components/wiki/CellViz";
import type { SolutionStat } from "@/types/wiki";

const SOLUTION_STATS: SolutionStat[] = [
  { label: "Lipid yield per cell", value: "~8×", sub: "vs. wild-type yeast" },
  { label: "Burst temperature", value: "72 °C", sub: "tunable ±5 °C" },
  { label: "Fat composition", value: "Identical", sub: "to animal fat" },
  { label: "Production scale", value: "Bioreactor", sub: "fully scalable" },
];

export function SolutionSection() {
  return (
    <section id="solution" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <SectionEyebrow tone="brand">Our Solution</SectionEyebrow>
            <h2 className="font-display text-4xl lg:text-5xl text-foreground leading-tight mb-8">
              Fat in a cell.
              <br />
              Flavor on demand.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5 text-sm">
              MEYcell is an engineered strain of{" "}
              <em>Saccharomyces cerevisiae</em> — common baker&apos;s yeast —
              modified to accumulate extraordinary quantities of intracellular
              lipids. These are not synthetic substitutes; they are the same
              triglycerides found in animal fat tissue, produced entirely
              without animals.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10 text-sm">
              The key innovation is thermal sensitivity. MEYcell membranes are
              engineered to rupture at a precise temperature threshold that
              matches cooking. The fat stays locked inside during processing and
              storage — then releases instantly the moment heat is applied.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {SOLUTION_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="border border-border bg-card p-4"
                >
                  <div className="font-display text-2xl text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest leading-tight">
                    {stat.label}
                  </div>
                  <div className="font-mono text-[9px] text-accent mt-1">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="font-mono text-[9px] text-muted-foreground/40 tracking-widest uppercase mb-3 text-right">
              Cross-section — MEYcell at 71 °C
            </div>
            <div className="relative aspect-square max-w-sm ml-auto bg-card border border-border/40 flex items-center justify-center overflow-hidden">
              <CellViz />
            </div>
            <div className="mt-2 font-mono text-[9px] text-muted-foreground/35 text-right">
              Lipid droplets visible — awaiting thermal trigger at 72 °C
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
