"use client";

import { Dna, Droplets, Flame, FlaskConical } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { FlowCue } from "@/components/ui/SectionCue";
import type { Step } from "@/types/wiki";

// The four steps run a temperature ramp that mirrors the narrative:
// cold lab work -> growing culture -> fat-loaded -> heat. Color is the story,
// not decoration. Classes are written out in full so Tailwind can see them.
const STEPS: Step[] = [
  {
    num: "01",
    title: "Engineer the Yeast",
    icon: Dna,
    body: "Saccharomyces cerevisiae BY4741 is engineered to push carbon toward storage fat. A deregulated acetyl-CoA carboxylase (ACC1**) lifts the rate-limiting step, DGA1 drives the final acylation into triacylglycerol, and OLE1 shifts the product toward unsaturated fat. β-oxidation and the TAG lipases, the routes that compete for that carbon, are knocked out.",
    tone: {
      icon: "text-sky",
      label: "text-sky/60",
      divider: "from-sky/40 via-sky/20 to-transparent",
      num: "rgb(var(--sky-rgb) / 0.07)",
    },
  },
  {
    num: "02",
    title: "Accumulate Lipids",
    icon: Droplets,
    body: "MEYcells grow under carbon-rich conditions, packing their interiors with lipid droplets until each cell is a microscopic reservoir of fat. Nile Red staining puts our β-oxidation knockout 31.2% above the parent strain, roughly 92 mg of neutral lipid per gram of dry cell weight.",
    tone: {
      icon: "text-primary",
      label: "text-primary/60",
      divider: "from-primary/40 via-primary/20 to-transparent",
      num: "rgb(var(--teal-rgb) / 0.07)",
    },
  },
  {
    num: "03",
    title: "Integrate with Protein",
    icon: FlaskConical,
    body: "MEYcells are embedded into cultured muscle fiber scaffolds or plant-based protein matrices. Distributed through the product like natural marbling, they have to survive the trip: overexpressed TPS1 builds up trehalose, which protects the cells through the freezing and dehydration of cold storage.",
    tone: {
      icon: "text-gold",
      label: "text-gold/60",
      divider: "from-gold/40 via-gold/20 to-transparent",
      num: "rgb(var(--gold-rgb) / 0.07)",
    },
  },
  {
    num: "04",
    title: "Cook, Burst, Devour",
    icon: Flame,
    body: "Heat unfolds the RNA thermometer, ribosomes reach BGL2, and the glucanase eats away at the cell wall until it can no longer hold the cell's internal pressure. The wall gives, and the droplets release into the surrounding protein: the marbling that alternative proteins have been missing.",
    tone: {
      icon: "text-ember",
      label: "text-ember/60",
      divider: "from-ember/40 via-ember/20 to-transparent",
      num: "rgb(var(--ember-rgb) / 0.07)",
    },
  },
];

// overflow-x-clip: the rows slide in from 30px off to the side, and until they
// animate in they'd otherwise widen the page and add a sideways scrollbar.
// `clip`, unlike `hidden`, doesn't create a scroll container.
export function ProceduresSection() {
  return (
    <section id="procedures" className="overflow-x-clip pt-16 pb-28 bg-deep">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="font-display text-4xl lg:text-5xl text-foreground">
            How it works
          </h2>
        </div>

        <StepList />

        <FlowCue to="directed-evolution" />
      </div>
    </section>
  );
}

function StepList() {
  return (
    <div className="flex flex-col gap-12">
      {STEPS.map((step, i) => (
        <StepRow key={step.num} step={step} index={i} />
      ))}
    </div>
  );
}

function StepRow({ step, index }: { step: Step; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;
  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="grid grid-cols-1 md:grid-cols-[1fr_2px_1fr] gap-0 md:gap-8 items-start"
    >
      <div
        className={
          isEven
            ? "md:col-start-1 md:row-start-1 text-left"
            : "md:col-start-3 md:row-start-1 md:text-right"
        }
      >
        <div
          className="font-display font-bold leading-none select-none"
          style={{
            fontSize: "clamp(5rem, 12vw, 9rem)",
            color: step.tone.num,
          }}
        >
          {step.num}
        </div>
      </div>

      <div
        className={`hidden md:col-start-2 md:row-start-1 md:block w-px self-stretch bg-gradient-to-b ${step.tone.divider}`}
      />

      <div
        className={`pb-4 md:row-start-1 ${isEven ? "md:col-start-3" : "md:col-start-1"}`}
      >
        <div className="flex items-center gap-3 mb-3">
          <Icon className={`w-5 h-5 ${step.tone.icon}`} />
          <div
            className={`font-mono text-xs tracking-widest uppercase ${step.tone.label}`}
          >
            Step {step.num}
          </div>
        </div>
        <h3 className="font-display text-2xl text-foreground mb-3">
          {step.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-sm">
          {step.body}
        </p>
      </div>
    </motion.div>
  );
}
