// Cards hidden for now — restore this import with <ProblemGrid /> below.
// import { ProblemGrid } from "@/components/wiki/ProblemGrid";
import { PhotoSection } from "@/components/wiki/main/PhotoSection";

// Compressed copy of /public/problem-background.png (1.9 MB -> 210 KB). The
// site serves images as-is, so the PNG would be downloaded in full.
const BACKGROUND = "/problem-background.jpg";

export function ProblemSection() {
  return (
    <PhotoSection id="problem" src={BACKGROUND} cueTo="alternatives">
      <div className="mb-8 max-w-5xl">
        <h2 className="font-display text-4xl lg:text-5xl text-foreground leading-tight">
          Meat has a problem.
          <br />
          <span className="text-muted-foreground">
            So does everything trying to replace it.
          </span>
        </h2>
      </div>

      <p className="max-w-3xl text-lg leading-relaxed text-body">
        Every year, people consume over 360 million tonnes of meat– demand keeps
        rising faster than our planet or our livestock systems, can sustainably
        support.
      </p>

      {/* Previous body copy and cards, kept for an easy restore:
      <p className="mb-8 max-w-3xl text-base leading-relaxed text-body">
        Demand for meat keeps climbing, and the system that supplies it is
        already among the largest drivers of emissions, freshwater depletion
        and land degradation. Alternative proteins exist to absorb that
        demand. They haven&apos;t — for a reason that gets less attention than
        it deserves.
      </p>

      <ProblemGrid />

      <div className="max-w-3xl py-1">
        <p className="text-base text-foreground leading-relaxed">
          The fat content of real meat is not a luxury — it is the entire
          sensory experience. Without intramuscular fat, alternative proteins
          will never truly compete.{" "}
          <span className="text-accent font-semibold">
            MEYcell closes that gap.
          </span>
        </p>
      </div>
      */}
    </PhotoSection>
  );
}
