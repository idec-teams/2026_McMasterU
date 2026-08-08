import { Banner } from "@/components/wiki/Banner";
import { WikiPage } from "@/components/wiki/WikiPage";
import { WikiSection } from "@/components/wiki/WikiSection";

export const metadata = {
  title: "Documentation — MEYcell",
};

export default function DocumentationPage() {
  return (
    <>
      <Banner eyebrow="Documentation" title="MEYcell Documentation">
        <p>Our parts, constructs and lab notebook compiled together.</p>
      </Banner>

      <WikiPage>
        <WikiSection id="opportunity" title="Market Opportunity">
          <p>
            The alternative protein market and where animal-free fat fits within
            it. Content coming soon.
          </p>
        </WikiSection>

        <WikiSection id="model" title="Business Model">
          <p>
            How MEYcell reaches producers and scales from pilot to production.
            Content coming soon.
          </p>
        </WikiSection>

        <WikiSection id="roadmap" title="Roadmap">
          <p>
            Milestones from proof of concept to commercial partnership. Content
            coming soon.
          </p>
        </WikiSection>
      </WikiPage>
    </>
  );
}
