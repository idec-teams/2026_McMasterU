import type { ReactNode } from "react";
import { Banner } from "@/components/wiki/Banner";
import { FadeSection } from "@/components/wiki/FadeSection";
import { ReadMoreLink } from "@/components/wiki/ReadMoreLink";
import { WikiPage } from "@/components/wiki/WikiPage";
import { WikiSection } from "@/components/wiki/WikiSection";
import { CompetitiveLandscapeChart } from "./CompetitiveLandscapeChart";
import { CooperathonSection } from "./CooperathonSection";
import { FeatureComparisonTable } from "./FeatureComparisonTable";
import { MarketOpportunityCircles } from "./MarketOpportunityCircles";
import { RoadmapCarousel } from "./RoadmapCarousel";
import {
  ENTREPRENEURSHIP_DETAILS_HREF,
  ENTREPRENEURSHIP_SECTIONS,
} from "./sections";

const MARKET_OPPORTUNITY_SECTION_ID = "market-opportunity";
const COMPETITIVE_ADVANTAGE_SECTION_ID = "competitive-advantage";
const ROADMAP_SECTION_ID = "commercialization-roadmap";
const COOPERATHON_SECTION_ID = "cooperathon";

// The Market Opportunity section keeps "Market Opportunity" as its id/TOC
// reference in code, but shows this instead as its on-page heading.
const MARKET_OPPORTUNITY_DISPLAY_TITLE = "Targeted Focus in a Massive Market";

// Short teaser copy per section, keyed by id. Each links out to the matching
// section on the details page via ReadMoreLink. Swap this copy for real
// content when it's ready — the section list/order lives in
// components/wiki/entrepreneurship/sections.ts and stays in sync with the
// details page. The market-opportunity, competitive-advantage, roadmap, and
// cooperathon sections render their own custom content instead of a teaser
// (see MarketOpportunityCircles / FeatureComparisonTable +
// CompetitiveLandscapeChart / RoadmapCarousel / CooperathonSection), so none
// of them has an entry here.
const TEASERS: Record<string, ReactNode> = {
  "market-need": (
    <p>
      The gap in today&apos;s fat and lipid supply chain that MEYcell is built
      to close. Content coming soon.
    </p>
  ),
  "business-model": (
    <p>
      How MEYcell reaches producers and scales from pilot to production. Content
      coming soon.
    </p>
  ),
  "intellectual-property": (
    <p>
      The IP position protecting MEYcell&apos;s strain engineering and
      production process. Content coming soon.
    </p>
  ),
  "validation-traction": (
    <p>
      Early validation, partnerships, and momentum behind MEYcell so far.
      Content coming soon.
    </p>
  ),
};

export function EntrepreneurshipLanding() {
  return (
    <>
      <Banner
        title="From Bioreactor to Market"
        src="/banners/entrepreneurship.png"
      >
        <p>
          The business model, market analysis, and commercialization path for
          MEYcell.
        </p>
      </Banner>

      <WikiPage showToc={false}>
        {ENTREPRENEURSHIP_SECTIONS.map((section) => {
          const readMoreHref = `${ENTREPRENEURSHIP_DETAILS_HREF}#${section.id}`;

          const displayTitle =
            section.id === MARKET_OPPORTUNITY_SECTION_ID
              ? MARKET_OPPORTUNITY_DISPLAY_TITLE
              : section.title;

          return (
            <FadeSection key={section.id}>
              <WikiSection
                id={section.id}
                title={displayTitle}
                hideTitle={section.id === COOPERATHON_SECTION_ID}
              >
                {section.id === MARKET_OPPORTUNITY_SECTION_ID ? (
                  <>
                    <MarketOpportunityCircles />
                    <ReadMoreLink href={readMoreHref} />
                  </>
                ) : section.id === COMPETITIVE_ADVANTAGE_SECTION_ID ? (
                  <>
                    <FeatureComparisonTable />
                    <h3 className="font-display text-lg text-foreground mb-3 mt-8">
                      Competitive Landscape
                    </h3>
                    <CompetitiveLandscapeChart />
                    <ReadMoreLink href={readMoreHref} />
                  </>
                ) : section.id === ROADMAP_SECTION_ID ? (
                  <RoadmapCarousel readMoreHref={readMoreHref} />
                ) : section.id === COOPERATHON_SECTION_ID ? (
                  <CooperathonSection readMoreHref={readMoreHref} />
                ) : (
                  <>
                    {TEASERS[section.id]}
                    <ReadMoreLink href={readMoreHref} />
                  </>
                )}
              </WikiSection>
            </FadeSection>
          );
        })}
      </WikiPage>
    </>
  );
}
