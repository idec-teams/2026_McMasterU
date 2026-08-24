import { Banner } from "@/components/wiki/Banner";
import { ReferencesSection } from "@/components/wiki/ReferencesSection";
import { WikiPage } from "@/components/wiki/WikiPage";
import { WikiSection } from "@/components/wiki/WikiSection";
import { createCitations } from "@/lib/wiki/citations";

export const metadata = {
  title: "Community — MEYcell",
};

const { references } = createCitations([
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

export default function CommunityPage() {
  return (
    <>
      <Banner title="Community">
        <p>
          How MEYcell engages with communities, stakeholders, and the public.
        </p>
      </Banner>

      <WikiPage>
        <WikiSection id="overview" title="Overview">
          <p>COMING SOON</p>
        </WikiSection>

        <WikiSection id="stakeholders" title="Stakeholders">
          <p>COMING SOON</p>
        </WikiSection>

        <WikiSection id="industry" title="Industry">
          <p>COMING SOON</p>
        </WikiSection>

        <WikiSection id="contact" title="Contact">
          <p>COMING SOON</p>
        </WikiSection>

        <WikiSection id="initiatives" title="Initiatives">
          <p>COMING SOON</p>
        </WikiSection>

        <WikiSection id="surveys" title="Surveys">
          <p>COMING SOON</p>
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
