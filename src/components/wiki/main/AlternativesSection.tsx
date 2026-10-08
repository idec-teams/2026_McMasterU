import { PhotoSection } from "@/components/wiki/main/PhotoSection";

// Why alternative proteins haven't won people over — the bridge from the
// problem to MEYcell.
export function AlternativesSection() {
  return (
    <PhotoSection
      id="alternatives"
      src="/problem-background-2.jpg"
      fadeFrom="raised"
      cueTo="bioreactor"
    >
      {/* Sits above centre, closer to where the previous section's text sat. */}
      <div className="-translate-y-24">
        <h2 className="font-display mb-8 max-w-5xl text-4xl leading-tight text-foreground lg:text-5xl">
          What about the alternatives?
        </h2>

        <p className="max-w-3xl text-lg leading-relaxed text-foreground">
          Alternative proteins were supposed to be the answer. But when we
          tested them ourselves, they were dry, they lacked juiciness, and they
          just didn&apos;t taste like meat. One bite told us why alternative
          proteins haven&apos;t won consumers over: sustainability only matters
          if the food actually tastes good enough to choose.
        </p>

        <p className="font-display mt-10 text-2xl leading-tight text-foreground lg:text-4xl">
          That’s where <span className="text-primary">MEYcell</span> comes in.
        </p>
      </div>
    </PhotoSection>
  );
}
