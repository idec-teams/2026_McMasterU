// Re-enable alongside the commented-out visualization block below.
// import { CellViz } from "@/components/wiki/CellViz";

// Used by the hidden "Fat in a cell" block below; restore with it, along
// with `import type { SolutionStat } from "@/types/wiki";`.
// // Every figure here traces to the project or engineering pages. Keep it that
// // way — an unsourced number on the landing page is the first thing a judge
// // will check against the write-up.
// const SOLUTION_STATS: SolutionStat[] = [
//   {
//     label: "Lipid yield",
//     value: "+31.2%",
//     sub: "PXA1 knockout vs BY4741",
//   },
//   // From the iDEC report: "the target temperature of 40°C", with the three
//   // designed thermosensors melting across 36-44 °C. The project page's
//   // 50 °C / 60 °C figures predate this.
//   {
//     label: "Thermal trigger",
//     value: "40 °C",
//     sub: "RNAt target · Tm 36–44 °C",
//   },
//   {
//     label: "Fatty acid profile",
//     value: "Shared",
//     sub: "palmitic · stearic · oleic",
//   },
//   { label: "Chassis", value: "BY4741", sub: "S. cerevisiae, GRAS" },
// ];

export function SolutionSection() {
  return (
    <section id="solution" className="pt-16 pb-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Prose and stats stay in a reading column; the pathway figure below
            breaks out to the full width, which it needs to stay legible. */}
        <div className="grid grid-cols-1 gap-16 items-start">
          {/* "Fat in a cell" — hidden for now; uncomment to bring it back.
          <div className="max-w-3xl">
            <h2 className="font-display text-4xl lg:text-5xl text-foreground leading-tight mb-8">
              Fat in a cell.
              <br />
              Flavor on demand.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5 text-sm">
              MEYcell is an engineered strain of{" "}
              <em>Saccharomyces cerevisiae</em> — common baker&apos;s yeast —
              modified to pack its lipid droplets with triacylglycerols, the
              same class of storage fat that marbles animal tissue. The fatty
              acids it builds are the ones that dominate red meat: palmitic,
              stearic and oleic acid, produced entirely without animals.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10 text-sm">
              The key innovation is thermal control. A synthetic RNA thermometer
              sits in the 5′ UTR of <em>BGL2</em>, which codes for a glucanase
              that digests the yeast cell wall. Cold, the RNA hairpin stays
              folded and the enzyme is never translated, so the fat stays locked
              in through processing and storage. Heat unfolds it, BGL2 is made,
              and the wall gives way under the cell&apos;s own internal
              pressure.
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
          */}

          {/* Cell visualization — hidden for now. CellViz stays in the library
              (still used by the hero banner); uncomment to bring this back.
          <div>
            <div className="font-mono text-[9px] text-muted-foreground/40 tracking-widest uppercase mb-3 text-right">
              Cross-section — MEYcell before the thermal trigger
            </div>
            <div className="relative aspect-square max-w-sm ml-auto bg-card border border-border/40 flex items-center justify-center overflow-hidden">
              <CellViz />
            </div>
            <div className="mt-2 font-mono text-[9px] text-muted-foreground/35 text-right">
              Lipid droplets visible — cell wall still intact
            </div>
          </div>
          */}
        </div>
      </div>
    </section>
  );
}
