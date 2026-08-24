import type { ReactNode } from "react";
import { Banner } from "@/components/wiki/Banner";
import { ReadMoreLink } from "@/components/wiki/ReadMoreLink";
import { WikiPage } from "@/components/wiki/WikiPage";
import { WikiSection } from "@/components/wiki/WikiSection";
import {
  ENTREPRENEURSHIP_DETAILS_HREF,
  ENTREPRENEURSHIP_SECTIONS,
} from "./sections";

// Short teaser copy per section, keyed by id. Each links out to the matching
// section on the details page via ReadMoreLink. Swap this copy for real
// content when it's ready — the section list/order lives in
// lib/wiki/entrepreneurship.ts and stays in sync with the details page.
const TEASERS: Record<string, ReactNode> = {
  "market-need": (
    <p>
      The gap in today&apos;s fat and lipid supply chain that MEYcell is built
      to close. Content coming soon.
    </p>
  ),
  "market-opportunity": (
    <p>
      The alternative protein market and where animal-free fat fits within it.
      Content coming soon.
    </p>
  ),
  "business-model": (
    <p>
      How MEYcell reaches producers and scales from pilot to production. Content
      coming soon.
    </p>
  ),
  "competitive-advantage": (
    <p>
      What sets MEYcell apart from existing alternative-fat producers and
      processes. Content coming soon.
    </p>
  ),
  "commercialization-roadmap": (
    <p>
      Milestones from proof of concept to commercial partnership. Content coming
      soon.
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
  cooperathon: (
    <p>
      MEYcell&apos;s path through Cooperathon and what it means for the venture.
      Content coming soon.
    </p>
  ),
};

export function EntrepreneurshipLanding() {
  return (
    <>
      <Banner eyebrow="Entrepreneurship" title="From Bioreactor to Market">
        <p>
          The business model, market analysis, and commercialization path for
          MEYcell.
        </p>
      </Banner>

      <WikiPage>
        {ENTREPRENEURSHIP_SECTIONS.map((section) => (
          <WikiSection key={section.id} id={section.id} title={section.title}>
            {TEASERS[section.id]}
            <ReadMoreLink
              href={`${ENTREPRENEURSHIP_DETAILS_HREF}#${section.id}`}
            />
          </WikiSection>
        ))}
      </WikiPage>
    </>
  );
}
