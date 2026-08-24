import { Banner } from "@/components/wiki/Banner";
import { ReferencesSection } from "@/components/wiki/ReferencesSection";
import { WikiPage } from "@/components/wiki/WikiPage";
import { WikiSection } from "@/components/wiki/WikiSection";
import { createCitations } from "@/lib/wiki/citations";

export const metadata = {
  title: "Project — MEYcell",
};

// Example references — replace with real sources as the content is written.
const { Cite, references } = createCitations([
  {
    id: "koch2019",
    authors: "Koch, B. et al.",
    title:
      "Metabolic engineering of Saccharomyces cerevisiae for lipid overproduction",
    source: "Metabolic Engineering",
    year: 2019,
    url: "https://example.org/koch-2019",
  },
  {
    id: "post2020",
    authors: "Post, M. J. et al.",
    title:
      "Scientific, sustainability and regulatory challenges of cultured meat",
    source: "Nature Food",
    year: 2020,
    url: "https://example.org/post-2020",
  },
]);

export default function ProjectPage() {
  return (
    <>
      <Banner title="Project">
        <p>
          Background, design rationale, and results for MEYcell — an engineered
          yeast that delivers animal-identical fat to the next generation of
          alternative protein.
        </p>
      </Banner>

      <WikiPage>
        <WikiSection id="overview" title="Overview">
          <p>
            MEYcell is an engineered strain of <em>Saccharomyces cerevisiae</em>{" "}
            that accumulates intracellular triglycerides identical to animal fat
            <Cite id="koch2019" />, then releases them at cooking temperature to
            restore the marbling that alternative proteins lack.
          </p>
        </WikiSection>

        <WikiSection id="background" title="Background">
          <p>
            Cultivated and plant-based meats still taste lean because they carry
            almost no intramuscular fat, the main driver of flavor and juiciness
            <Cite id="post2020" />. MEYcell targets that gap directly. Full
            content coming soon.
          </p>

          <h4 className="mt-4 font-medium">Key pathways & mechanisms</h4>
          <p className="text-sm text-muted-foreground">
            Describe the metabolic pathways targeted for triglyceride
            accumulation (e.g., acetyl-CoA flux, fatty acid synthase regulation,
            TAG assembly enzymes). Include pathway diagrams or references as
            needed.
          </p>

          <h4 className="mt-4 font-medium">RNA technology background</h4>
          <p className="text-sm text-muted-foreground">
            Summarize RNAt background: types considered, stability strategies,
            and design constraints.
          </p>
        </WikiSection>

        <WikiSection id="mutagenesis" title="How we did mutagenesis">
          <p>
            Describe the mutagenesis strategy: type of mutagenesis
            (site-directed, error-prone PCR, saturation), screening, and
            verification (sequencing strategy, criteria for selecting clones).
          </p>
        </WikiSection>

        <WikiSection id="rnat-choice" title="Our choice of RNAt">
          <p>
            Explain the approach to selecting the RNAt, rationale, and how the
            design was optimized for our project. (e.g. theromodynamic
            modelling, codon optimization, part selection)
          </p>
        </WikiSection>

        <WikiSection id="results" title="Results">
          <p>
            Experimental results and characterization for the MEYcell strain.
            Content coming soon.
          </p>
        </WikiSection>

        <ReferencesSection
          id="references"
          title="References"
          references={references}
        />
      </WikiPage>
    </>
  );
}
