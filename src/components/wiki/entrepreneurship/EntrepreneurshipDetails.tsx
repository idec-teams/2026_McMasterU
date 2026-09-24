import { Banner } from "@/components/wiki/Banner";
import {
  PROBLEM_REFERENCES,
  PROBLEM_SUBSECTIONS,
} from "@/components/wiki/entrepreneurship/problemContent";
import { ENTREPRENEURSHIP_SECTIONS } from "@/components/wiki/entrepreneurship/sections";
import { Paragraphs } from "@/components/wiki/Paragraphs";
import { ReferencesSection } from "@/components/wiki/ReferencesSection";
import { WikiPage } from "@/components/wiki/WikiPage";
import { WikiSection } from "@/components/wiki/WikiSection";
import { LOREM_PARAGRAPH } from "@/lib/wiki/placeholders";

// References cited anywhere on this page, across all sections — collected
// here so the single bottom ReferencesSection stays numbered consistently
// as more sections get their real write-up.
const REFERENCES = PROBLEM_REFERENCES;

// Full write-up for each entrepreneurship section, reached via the "Read
// More" links on the landing page. Sections without real content yet fall
// back to placeholder copy; the section list/order lives in
// components/wiki/entrepreneurship/sections.ts and stays in sync with the
// landing page.
export function EntrepreneurshipDetails({
  title,
  src,
}: {
  title: string;
  src: string;
}) {
  return (
    <>
      <Banner title={title} src={src}>
        <p>
          The full business case behind MEYcell — market need, business model,
          competitive position, and commercialization plan.
        </p>
      </Banner>

      <WikiPage>
        {ENTREPRENEURSHIP_SECTIONS.map((section) => (
          <WikiSection key={section.id} id={section.id} title={section.title}>
            {section.id === "market-need" ? (
              PROBLEM_SUBSECTIONS.map((subsection) => (
                <div key={subsection.title} className="space-y-4">
                  <h3 className="font-display text-lg text-foreground mb-3">
                    {subsection.title}
                  </h3>
                  <Paragraphs text={subsection.text} references={REFERENCES} />
                </div>
              ))
            ) : (
              <>
                <p>{LOREM_PARAGRAPH}</p>
                <p>{LOREM_PARAGRAPH}</p>
              </>
            )}
          </WikiSection>
        ))}

        <ReferencesSection
          id="references"
          title="References"
          references={REFERENCES}
        />
      </WikiPage>
    </>
  );
}
