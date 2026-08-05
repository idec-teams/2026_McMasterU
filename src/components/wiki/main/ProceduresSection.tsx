"use client";

import { Dna, Droplets, Flame, FlaskConical } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import type { Step } from "@/types/wiki";

const STEPS: Step[] = [
  {
    num: "01",
    title: "Engineer the Yeast",
    icon: Dna,
    body: "Saccharomyces cerevisiae is genetically modified to overexpress lipid biosynthesis pathways — including fatty acid synthase and diacylglycerol acyltransferase — enabling massive accumulation of intracellular triglycerides identical to animal fat.",
  },
  {
    num: "02",
    title: "Accumulate Lipids",
    icon: Droplets,
    body: "MEYcells proliferate in fed-batch bioreactors under carbon-rich conditions, packing their interiors with lipid droplets. Each cell becomes a microscopic reservoir of dense, flavorful fat — exceeding 60% lipid dry cell weight.",
  },
  {
    num: "03",
    title: "Integrate with Protein",
    icon: FlaskConical,
    body: "MEYcells are embedded into cultured muscle fiber scaffolds or plant-based protein matrices. Distributed throughout the product like natural marbling, they remain structurally intact during cold storage and transport.",
  },
  {
    num: "04",
    title: "Cook, Burst, Devour",
    icon: Flame,
    body: "At a precise thermal threshold engineered to match cooking temperatures, MEYcell membranes rupture and release their entire lipid payload into the surrounding protein. The result: a juicy, fatty, satisfying bite that is structurally indistinguishable from the real thing.",
  },
];

export function ProceduresSection() {
  return (
    <section id="procedures" className="py-28 bg-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <SectionEyebrow>Mechanism</SectionEyebrow>
          <h2 className="font-display text-4xl lg:text-5xl text-foreground">
            How it works
          </h2>
        </div>

        <StepList />
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
            color: "rgb(var(--teal-rgb) / 0.06)",
          }}
        >
          {step.num}
        </div>
      </div>

      <div className="hidden md:col-start-2 md:row-start-1 md:block w-px self-stretch bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

      <div
        className={`pb-4 md:row-start-1 ${isEven ? "md:col-start-3" : "md:col-start-1"}`}
      >
        <div className="flex items-center gap-3 mb-3">
          <Icon className="w-5 h-5 text-primary" />
          <div className="font-mono text-xs tracking-widest text-primary/60 uppercase">
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
