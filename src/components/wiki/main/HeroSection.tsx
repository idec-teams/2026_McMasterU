"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { CellViz } from "@/components/wiki/CellViz";

export function HeroSection() {
  const [burst, setBurst] = useState(false);

  const triggerBurst = () => {
    setBurst(true);
    setTimeout(() => setBurst(false), 1200);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="font-mono text-[10px] tracking-widest text-primary uppercase mb-6 flex items-center gap-3">
              <span className="inline-block w-6 h-px bg-primary" />
              McMaster iGEM 2026 — Project Wiki
            </div>

            <h1
              className="font-display font-bold leading-[0.92] mb-6"
              style={{ fontSize: "clamp(4.5rem, 11vw, 8rem)" }}
            >
              <span className="text-primary">MEY</span>
              <span className="text-accent">cell</span>
            </h1>

            <p className="text-base text-muted-foreground leading-relaxed mb-3 max-w-lg">
              A genetically engineered yeast cell — loaded with fat — that
              bursts at cooking temperature.
            </p>
            <p className="text-sm text-muted-foreground/70 leading-relaxed mb-10 max-w-lg">
              MEYcell delivers the marbling, juiciness, and flavor of real meat
              to the next generation of sustainable, animal-free protein — from
              bioreactor to plate.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#problem"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-mono text-xs tracking-widest uppercase hover:bg-accent transition-colors duration-200"
              >
                Explore the Science <ChevronRight className="w-3.5 h-3.5" />
              </a>
              <Link
                href="/project"
                className="inline-flex items-center gap-2 border border-border text-muted-foreground px-6 py-3 font-mono text-xs tracking-widest uppercase hover:text-foreground hover:border-foreground/30 transition-colors duration-200"
              >
                The Project
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center gap-8">
            <div className="relative">
              <CellViz burst={burst} />
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 font-mono text-[10px] text-primary/50 tracking-widest uppercase whitespace-nowrap">
                S. cerevisiae — MEY-26 strain
              </div>
            </div>

            <button
              type="button"
              className="mt-8 font-mono text-[10px] tracking-widest uppercase border border-border text-muted-foreground px-4 py-2 hover:border-primary/50 hover:text-primary transition-colors duration-200"
              onClick={triggerBurst}
            >
              Simulate cooking burst
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
