import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SOLUTION_STATS } from "@/lib/wiki/content";
import { CellViz } from "./CellViz";

export function SolutionSection() {
  return (
    <section id="solution" className="py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 85% 50%, rgba(0,212,255,0.04) 0%, transparent 55%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <SectionEyebrow tone="cyan">Our Solution</SectionEyebrow>
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
            <div
              className="relative aspect-square max-w-sm ml-auto bg-card border border-border/40 flex items-center justify-center overflow-hidden"
              style={{ boxShadow: "0 0 80px rgba(0,212,255,0.06)" }}
            >
              <CellViz />

              <Readout position="top-4 right-4" tone="cyan">
                T: 71.2 °C
              </Readout>
              <Readout position="top-4 left-4" tone="muted">
                RH: 98%
              </Readout>
              <Readout position="bottom-4 left-4" tone="yellow">
                Status: INTACT
              </Readout>
              <Readout position="bottom-4 right-4" tone="accent">
                Lipid: 62% DCW
              </Readout>
            </div>
            <div className="mt-2 font-mono text-[9px] text-muted-foreground/35 text-right">
              ↑ Lipid droplets visible — awaiting thermal trigger at 72 °C
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type ReadoutTone = "cyan" | "muted" | "yellow" | "accent";

const READOUT_TONES: Record<ReadoutTone, string> = {
  cyan: "text-cyan-400 border-cyan-400/20",
  muted: "text-muted-foreground/50 border-border",
  yellow: "text-yellow-300 border-yellow-300/20",
  accent: "text-accent border-accent/20",
};

function Readout({
  position,
  tone,
  children,
}: {
  position: string;
  tone: ReadoutTone;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`absolute ${position} font-mono text-[10px] px-2 py-1 bg-background/60 border ${READOUT_TONES[tone]}`}
    >
      {children}
    </div>
  );
}
