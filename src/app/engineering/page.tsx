import { Banner } from "@/components/wiki/Banner";
import { WikiPage } from "@/components/wiki/WikiPage";
import { WikiSection } from "@/components/wiki/WikiSection";

export const metadata = {
  title: "Engineering — MEYcell",
};

export default function EngineeringPage() {
  return (
    <>
      <Banner eyebrow="Engineering" title="Our Engineering Cycle">
        <p>The design–build–test–learn iterations behind the MEYcell strain.</p>
      </Banner>

      <WikiPage>
        <WikiSection id="design" title="Design">
          <p>
            Design goals and target pathways for lipid overproduction and
            thermal burst. Content coming soon.
          </p>
        </WikiSection>

        <WikiSection id="build" title="Build">
          <p>
            Strain construction, assembly, and cloning strategy. Content coming
            soon.
          </p>
        </WikiSection>

        <WikiSection id="test" title="Test">
          <p>
            Characterization, assays, and measurements against the design goals.
            Content coming soon.
          </p>
        </WikiSection>

        <WikiSection id="learn" title="Learn">
          <p>
            What each iteration taught us and how it fed the next cycle. Content
            coming soon.
          </p>
        </WikiSection>
      </WikiPage>
    </>
  );
}
