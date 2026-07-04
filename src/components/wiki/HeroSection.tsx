"use client";

import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { CellViz } from "./CellViz";

export function HeroSection() {
  const [burst, setBurst] = useState(false);

  const triggerBurst = () => {
    setBurst(true);
    setTimeout(() => setBurst(false), 1200);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,212,255,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-lime-400/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-[10px] tracking-widest text-cyan-400 uppercase mb-6 flex items-center gap-3"
            >
              <span className="inline-block w-6 h-px bg-cyan-400" />
              McMaster iGEM 2026 — Project Wiki
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-bold leading-[0.92] mb-6"
              style={{ fontSize: "clamp(4.5rem, 11vw, 8rem)" }}
            >
              <span
                className="text-primary"
                style={{ textShadow: "0 0 80px rgba(0,212,255,0.35)" }}
              >
                MEY
              </span>
              <span
                className="text-accent"
                style={{ textShadow: "0 0 80px rgba(196,255,0,0.3)" }}
              >
                cell
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="text-base text-muted-foreground leading-relaxed mb-3 max-w-lg"
            >
              A genetically engineered yeast cell — loaded with fat — that
              bursts at cooking temperature.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="text-sm text-muted-foreground/70 leading-relaxed mb-10 max-w-lg"
            >
              MEYcell delivers the marbling, juiciness, and flavor of real meat
              to the next generation of sustainable, animal-free protein — from
              bioreactor to plate.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.42 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#problem"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-mono text-xs tracking-widest uppercase hover:bg-cyan-300 transition-colors duration-200"
              >
                Explore the Science <ChevronRight className="w-3.5 h-3.5" />
              </a>
              <Link
                href="/procedures"
                className="inline-flex items-center gap-2 border border-border text-muted-foreground px-6 py-3 font-mono text-xs tracking-widest uppercase hover:text-foreground hover:border-foreground/30 transition-colors duration-200"
              >
                Procedures
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.18 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="relative">
              <CellViz burst={burst} />
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 font-mono text-[10px] text-cyan-400/50 tracking-widest uppercase whitespace-nowrap">
                S. cerevisiae — MEY-26 strain
              </div>
            </div>

            <button
              type="button"
              className="mt-8 font-mono text-[10px] tracking-widest uppercase border border-border text-muted-foreground px-4 py-2 hover:border-orange-400/50 hover:text-orange-300 transition-colors duration-200"
              onClick={triggerBurst}
            >
              Simulate cooking burst ↑
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[9px] tracking-widest uppercase text-muted-foreground/40">
            Scroll
          </span>
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-muted-foreground/30 to-transparent"
            animate={{ scaleY: [1, 0.4, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
}
