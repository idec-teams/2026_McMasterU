import { CellViz } from "@/components/wiki/CellViz";
import { HotZone } from "./HotZone";

// Inset hero panel with a slow "thermal drift" background: three soft gradient
// layers that drift on co-prime cycles while a faint warm layer breathes at the
// peak — a nod to the 72 °C burst threshold.
//
// Pure CSS (keyframes in globals.css), so this stays a server component and the
// ambient motion costs no JavaScript. CellViz is the only client island.

const EYEBROW = "MCMASTERU";
const TAGLINE = "Meating the future using directed evolution.";
const ORG = "IDEC 2026";

export function HeroBanner() {
  return (
    <section id="home">
      <div
        data-hero-panel
        className="relative flex min-h-[92vh] flex-col overflow-hidden"
      >
        <ThermalDrift />

        {/* Logo owns the flexible middle — dead-center both axes. The title is
            anchored at the bottom with the meta row, so the gap between logo
            and title grows with the viewport. */}
        <div className="relative flex flex-1 items-center justify-center px-6 py-16">
          {/* translate-y nudges the logo slightly below true center */}
          <div className="relative h-[150px] w-[150px] translate-y-8">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.58]">
              <CellViz />
            </div>
          </div>
        </div>

        <div className="relative px-6 pb-10 text-center sm:px-10">
          <h1
            className="font-display mb-6 font-bold leading-[0.92] tracking-tight"
            style={{ fontSize: "clamp(2.75rem, 8vw, 6rem)" }}
          >
            <span className="text-foreground">MEY</span>
            <span className="text-primary">cell</span>
          </h1>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />
          {/* The tagline is absolutely centered on the panel so it stays on the
              true midline — the side labels have different widths, so a plain
              3-column grid would push it off-center. */}
          <div className="relative mt-6 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between">
            <div className="font-mono text-[10px] tracking-widest text-primary uppercase">
              {EYEBROW}
            </div>
            <p className="text-sm leading-relaxed text-body whitespace-nowrap sm:absolute sm:left-1/2 sm:-translate-x-1/2">
              {TAGLINE}
            </p>
            <div className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
              {ORG}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// The whole texture stack (drift + dots + grain) sits under one mask that
// dissolves toward the edges, so the banner melts into the page background
// instead of ending at a visible rectangle.
const EDGE_FADE_MASK =
  "radial-gradient(120% 95% at 50% 42%, black 55%, transparent 98%)";

function ThermalDrift() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{
        maskImage: EDGE_FADE_MASK,
        WebkitMaskImage: EDGE_FADE_MASK,
      }}
    >
      {/* Teal core */}
      <div
        className="absolute -inset-1/4 animate-[hero-drift-a_61s_ease-in-out_infinite] motion-reduce:animate-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 50% 45%, rgb(var(--teal-rgb) / 0.22), transparent 70%)",
        }}
      />
      {/* Cooler counter-drift, keeps the field from feeling like one blob */}
      <div
        className="absolute -inset-1/4 animate-[hero-drift-b_79s_ease-in-out_infinite] motion-reduce:animate-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 24% 72%, rgb(var(--teal-rgb) / 0.13), transparent 65%)",
        }}
      />
      {/* Thermal peak — the warm note, deliberately faint */}
      <div
        className="absolute -inset-1/4 animate-[hero-ember_53s_ease-in-out_infinite] motion-reduce:animate-none"
        style={{
          background:
            "radial-gradient(ellipse 45% 40% at 66% 34%, rgb(var(--ember-rgb) / 0.5), transparent 62%)",
        }}
      />

      {/* Free-roaming warm spots — dimmer than the cursor zone, wandering on
          their own long cycles so the field is never completely still. */}
      <RoamingZone
        className="animate-[hero-roam-a_97s_ease-in-out_infinite]"
        size={340}
        alpha={0.1}
      />
      <RoamingZone
        className="animate-[hero-roam-b_127s_ease-in-out_infinite]"
        size={260}
        alpha={0.07}
      />

      {/* Cursor-chasing hot spot — the most visible thermal layer. The teal
          field above keeps drifting on its own clock, independent of this. */}
      <HotZone />

      <div className="hero-dots absolute inset-0 opacity-40" />
      <div className="hero-grain absolute inset-0 opacity-[0.035] mix-blend-overlay" />
    </div>
  );
}

function RoamingZone({
  className,
  size,
  alpha,
}: {
  className: string;
  size: number;
  alpha: number;
}) {
  return (
    <div
      className={`absolute top-0 left-0 motion-reduce:animate-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, rgb(var(--ember-rgb) / ${alpha}), transparent 68%)`,
      }}
    />
  );
}
