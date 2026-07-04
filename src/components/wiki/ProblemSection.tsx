import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { ProblemGrid } from "./ProblemGrid";

export function ProblemSection() {
  return (
    <section id="problem" className="py-28 bg-card relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 max-w-3xl">
          <SectionEyebrow>The Problem</SectionEyebrow>
          <h2 className="font-display text-4xl lg:text-5xl text-foreground leading-tight">
            Meat has a problem.
            <br />
            <span className="text-muted-foreground">
              So does everything trying to replace it.
            </span>
          </h2>
        </div>

        <ProblemGrid />

        <div className="border-l-2 border-accent pl-8 py-1 max-w-3xl">
          <p className="text-base text-foreground leading-relaxed">
            The fat content of real meat is not a luxury — it is the entire
            sensory experience. Without intramuscular fat, alternative proteins
            will never truly compete.{" "}
            <span className="text-accent font-semibold">
              MEYcell closes that gap.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
