import { ProblemGrid } from "@/components/wiki/ProblemGrid";

export function ProblemSection() {
  return (
    <section id="problem" className="pt-16 pb-28 bg-deep relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 max-w-3xl">
          <h2 className="font-display text-4xl lg:text-5xl text-foreground leading-tight">
            Meat has a problem.
            <br />
            <span className="text-muted-foreground">
              So does everything trying to replace it.
            </span>
          </h2>
        </div>

        {/* TODO: replace with real framing copy for the problem section. */}
        <p className="mb-12 max-w-3xl text-base leading-relaxed text-body">
          Placeholder text introducing the three pressures below — what they
          are, why they compound, and why the current system cannot absorb them.
          Replace this with the section&apos;s real framing copy.
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
      </div>
    </section>
  );
}
