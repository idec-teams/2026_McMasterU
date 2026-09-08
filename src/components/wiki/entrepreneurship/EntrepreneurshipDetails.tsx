import { Banner } from "@/components/wiki/Banner";
import { WikiPage } from "@/components/wiki/WikiPage";
import { WikiSection } from "@/components/wiki/WikiSection";
import { LOREM_PARAGRAPH } from "@/lib/wiki/placeholders";
import { ENTREPRENEURSHIP_SECTIONS } from "./sections";

// Full write-up for each entrepreneurship section, reached via the "Read
// More" links on the landing page. Body copy is placeholder text until the
// real write-up for each section exists; the section list/order lives in
// lib/wiki/entrepreneurship.ts and stays in sync with the landing page.
export function EntrepreneurshipDetails() {
  return (
    <>
      <Banner title="Entrepreneurship in Depth">
        <p>
          The full business case behind MEYcell — market need, business model,
          competitive position, and commercialization plan.
        </p>
      </Banner>

      <WikiPage>
        {ENTREPRENEURSHIP_SECTIONS.map((section) => (
          <WikiSection key={section.id} id={section.id} title={section.title}>
            <p>{LOREM_PARAGRAPH}</p>
            <p>{LOREM_PARAGRAPH}</p>
          </WikiSection>
        ))}
      </WikiPage>
    </>
  );
}
