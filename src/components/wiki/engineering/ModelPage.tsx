import { Banner } from "@/components/wiki/Banner";
import { WikiPage } from "@/components/wiki/WikiPage";
import { WikiSection } from "@/components/wiki/WikiSection";
import { LOREM_PARAGRAPH, LOREM_SENTENCE } from "@/lib/wiki/placeholders";
import type { SummaryPoint } from "@/types/wiki";
import { ModelImagePlaceholder } from "./ModelImagePlaceholder";
import { SummaryBoxes } from "./SummaryBoxes";

const SUMMARY_POINTS: SummaryPoint[] = [
  { title: "Experimental Design", body: LOREM_SENTENCE },
  { title: "Key Findings", body: LOREM_SENTENCE },
  { title: "Implications", body: LOREM_SENTENCE },
];

// Shared layout for the 5 engineering model pages (RNAt, ML1, ML2, Kinetic,
// Financial). Every section below is placeholder copy — once a model's real
// write-up exists, replace the body text at its usage site; the structure
// itself (sections, TOC, image slots) stays the same.
export function ModelPage({ title, src }: { title: string, src: string }) {
  return (
    <>
      <Banner title={title} src={src}>
        <p>{LOREM_PARAGRAPH}</p>
      </Banner>

      <section className="mx-auto max-w-7xl px-6 pt-16">
        <SummaryBoxes points={SUMMARY_POINTS} />
      </section>

      <WikiPage>
        <WikiSection id="problem-statement" title="Problem Statement">
          <p>{LOREM_PARAGRAPH}</p>
        </WikiSection>

        <WikiSection id="background" title="Background">
          <p>{LOREM_PARAGRAPH}</p>
        </WikiSection>

        <WikiSection id="model-construction" title="Model Construction">
          <p>{LOREM_PARAGRAPH}</p>
          <ModelImagePlaceholder label="Model construction figure" />
          <div className="border-l-2 border-primary/30 pl-5">
            <h3 className="font-display text-lg text-foreground mb-3">
              Model Assumptions
            </h3>
            <p>{LOREM_PARAGRAPH}</p>
          </div>
        </WikiSection>

        <WikiSection id="results" title="Results">
          <p>{LOREM_PARAGRAPH}</p>
          <ModelImagePlaceholder label="Results figure" />
        </WikiSection>

        <WikiSection id="discussion" title="Discussion">
          <p>{LOREM_PARAGRAPH}</p>
        </WikiSection>

        <WikiSection id="validation" title="Validation">
          <p>{LOREM_PARAGRAPH}</p>
        </WikiSection>

        <WikiSection
          id="limitations-next-steps"
          title="Limitations & Next Steps"
        >
          <p>{LOREM_PARAGRAPH}</p>
        </WikiSection>
      </WikiPage>
    </>
  );
}
