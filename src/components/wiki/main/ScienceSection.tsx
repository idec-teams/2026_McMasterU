// DEPRECATED — replaced by PromoVideoSection.
// Kept for reference only; intentionally not exported or imported anywhere.
// Its data (SCIENCE_FACTS, PATHWAY_ENTRIES) was colocated here when
// lib/wiki/content.ts was removed. Delete this file if it is no longer needed.

/*
import { Dna, Droplets, FlaskConical, Thermometer, Zap } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import type { PathwayEntry, ScienceFact } from "@/types/wiki";

const SCIENCE_FACTS: ScienceFact[] = [
  {
    icon: Dna,
    label: "Host Organism",
    value: "S. cerevisiae",
    color: "text-primary",
  },
  {
    icon: Thermometer,
    label: "Burst Threshold",
    value: "72 °C ± 3 °C",
    color: "text-primary",
  },
  {
    icon: Droplets,
    label: "Max Lipid Content",
    value: ">60% DCW",
    color: "text-primary",
  },
  {
    icon: Zap,
    label: "Key Pathway",
    value: "de novo FA synthesis",
    color: "text-primary",
  },
  {
    icon: FlaskConical,
    label: "Production Mode",
    value: "Fed-batch bioreactor",
    color: "text-primary",
  },
];

const PATHWAY_ENTRIES: PathwayEntry[] = [
  {
    op: "GENE",
    name: "FAS1-OE",
    nameTone: "accent",
    comment: "Fatty acid synthase overexpression — lipid chain initiation",
  },
  {
    op: "GENE",
    name: "ACC1-S659A",
    nameTone: "accent",
    comment:
      "Acetyl-CoA carboxylase point mutation — removes feedback inhibition",
  },
  {
    op: "GENE",
    name: "DGA1-OE",
    nameTone: "accent",
    comment: "Diacylglycerol acyltransferase — triglyceride storage in LDs",
  },
  {
    op: "DELETE",
    name: "TGL3, TGL4, TGL5",
    nameTone: "danger",
    comment: "Lipase triple knockout — prevents intracellular fat degradation",
  },
  {
    op: "MODIFY",
    name: "MEMBRANE_COMP",
    nameTone: "success",
    comment:
      "Adjusted phospholipid bilayer — engineered thermal burst at 72 °C",
  },
  {
    op: "PROMOTE",
    name: "GPD1-prom",
    nameTone: "accent",
    comment: "Strong constitutive promoter driving all lipogenic genes",
  },
];

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
              style={{ boxShadow: "0 0 30px rgb(var(--teal-rgb) / 0.06)" }}
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
  accent: "text-primary",
  danger: "text-dim",
  success: "text-accent",
};

function PathwayTerminal() {
  return (
    <div
      className="lg:col-span-2 bg-card border border-primary/15 p-6 font-mono text-sm"
      style={{ boxShadow: "0 0 40px rgb(var(--teal-rgb) / 0.04)" }}
    >
      <div className="flex items-center gap-2 mb-5 pb-4 border-b border-border">
        <div className="w-2.5 h-2.5 rounded-full bg-primary/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-primary/45" />
        <div className="w-2.5 h-2.5 rounded-full bg-primary/25" />
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
      <span className="text-primary">{entry.op}</span>{" "}
      <span className={NAME_TONE_CLASS[entry.nameTone]}>{entry.name}</span>{" "}
      <span className="text-muted-foreground/60">{`// ${entry.comment}`}</span>
    </div>
  );
}
*/

export {};
