import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { PATHWAY_ENTRIES, SCIENCE_FACTS } from "@/lib/wiki/content";
import type { PathwayEntry } from "@/types/wiki";

export function ScienceSection() {
  return (
    <section id="models" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <SectionEyebrow>The Science</SectionEyebrow>
          <h2 className="font-display text-4xl lg:text-5xl text-foreground max-w-2xl">
            Engineered at the genetic level
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <PathwayTerminal />

          <div className="flex flex-col gap-3">
            {SCIENCE_FACTS.map((fact) => (
              <div
                key={fact.label}
                className="border border-border bg-card p-4 flex items-center gap-4"
              >
                <fact.icon className={`w-5 h-5 flex-shrink-0 ${fact.color}`} />
                <div>
                  <div className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest">
                    {fact.label}
                  </div>
                  <div className="font-mono text-sm text-foreground mt-0.5">
                    {fact.value}
                  </div>
                </div>
              </div>
            ))}

            <div
              className="mt-2 border border-accent/30 bg-card p-5"
              style={{ boxShadow: "0 0 30px rgba(196,255,0,0.06)" }}
            >
              <div className="font-mono text-[9px] tracking-widest uppercase text-accent mb-2">
                iGEM 2026
              </div>
              <div className="font-display text-lg text-foreground mb-1">
                McMaster SynBio
              </div>
              <div className="font-mono text-[10px] text-muted-foreground leading-relaxed">
                Hamilton, Ontario, Canada.
                <br />
                Synthetic biology for a sustainable food future.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const NAME_TONE_CLASS: Record<PathwayEntry["nameTone"], string> = {
  accent: "text-accent",
  danger: "text-red-400/80",
  success: "text-emerald-400",
};

function PathwayTerminal() {
  return (
    <div
      className="lg:col-span-2 bg-card border border-cyan-400/15 p-6 font-mono text-sm"
      style={{ boxShadow: "0 0 40px rgba(0,212,255,0.04)" }}
    >
      <div className="flex items-center gap-2 mb-5 pb-4 border-b border-border">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        <span className="text-[10px] text-muted-foreground ml-2 tracking-wider">
          meycell_pathway.gb — iGEM Part Registry 2026
        </span>
      </div>

      <div className="space-y-3 text-[12px] leading-relaxed">
        {PATHWAY_ENTRIES.map((entry) => (
          <TerminalLine key={entry.name} entry={entry} />
        ))}

        <div className="mt-6 pt-4 border-t border-border">
          <span className="text-muted-foreground">→ Phenotype: </span>
          <span className="text-foreground">
            Oleaginous. &gt;60% lipid DCW. Thermal burst @ 72 °C ± 3 °C.
          </span>
        </div>
        <div>
          <span className="text-muted-foreground">→ Safety: </span>
          <span className="text-foreground">
            Non-pathogenic. GRAS host. Auxotrophic selection. Contained.
          </span>
        </div>
      </div>
    </div>
  );
}

function TerminalLine({ entry }: { entry: PathwayEntry }) {
  return (
    <div>
      <span className="text-cyan-400">{entry.op}</span>{" "}
      <span className={NAME_TONE_CLASS[entry.nameTone]}>{entry.name}</span>{" "}
      <span className="text-muted-foreground/60">{`// ${entry.comment}`}</span>
    </div>
  );
}
