"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import type { Step } from "@/types/wiki";

export function StepRow({ step, index }: { step: Step; index: number }) {
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
      <div className={isEven ? "text-left" : "md:order-3 md:text-right"}>
        <div
          className="font-display font-bold leading-none select-none"
          style={{
            fontSize: "clamp(5rem, 12vw, 9rem)",
            color: "rgba(0,212,255,0.06)",
          }}
        >
          {step.num}
        </div>
      </div>

      <div className="hidden md:block w-px self-stretch bg-gradient-to-b from-cyan-400/40 via-cyan-400/20 to-transparent" />

      <div className={`pb-4 ${isEven ? "md:order-3" : ""}`}>
        <div className="flex items-center gap-3 mb-3">
          <Icon className="w-5 h-5 text-cyan-400" />
          <div className="font-mono text-xs tracking-widest text-cyan-400/60 uppercase">
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
