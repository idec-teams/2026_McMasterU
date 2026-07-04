"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { PROBLEM_CARD_COLORS } from "@/lib/wiki/colors";
import type { Problem } from "@/types/wiki";

export function ProblemCard({
  problem,
  index,
}: {
  problem: Problem;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const c = PROBLEM_CARD_COLORS[problem.color];
  const Icon = problem.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.14 }}
      className={`relative border ${c.border} bg-card p-8 flex flex-col gap-4 group transition-shadow duration-300`}
      style={{ boxShadow: `0 0 0px ${c.glow}` }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 60px ${c.glow}`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0px ${c.glow}`;
      }}
    >
      <Icon className={`w-7 h-7 ${c.icon}`} />
      <div className={`font-display text-5xl font-bold leading-none ${c.stat}`}>
        {problem.stat}
      </div>
      <div className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
        {problem.statLabel}
      </div>
      <h3 className="font-display text-xl text-foreground">{problem.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {problem.body}
      </p>
    </motion.div>
  );
}
