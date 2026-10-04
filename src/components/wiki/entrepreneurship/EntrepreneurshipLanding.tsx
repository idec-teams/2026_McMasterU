import {
  ArrowDown,
  BarChart3,
  Box,
  Calendar,
  Droplet,
  Factory,
  FileText,
  FlaskConical,
  Layers,
  Leaf,
  Network,
  Soup,
  Users,
} from "lucide-react";
import { Banner } from "@/components/wiki/Banner";
import { CompetitorComparisonCards } from "@/components/wiki/entrepreneurship/CompetitorComparisonCards";
import { MarketOpportunityCircles } from "@/components/wiki/entrepreneurship/MarketOpportunityCircles";
import {
  type ProblemHighlight,
  ProblemHighlights,
} from "@/components/wiki/entrepreneurship/ProblemHighlights";
import { RoadmapCarousel } from "@/components/wiki/entrepreneurship/RoadmapCarousel";
import { StatColumns } from "@/components/wiki/entrepreneurship/StatColumns";
import {
  ENTREPRENEURSHIP_DETAILS_HREF,
  ENTREPRENEURSHIP_SECTIONS,
} from "@/components/wiki/entrepreneurship/sections";
import {
  type TRLStep,
  TRLTimeline,
} from "@/components/wiki/entrepreneurship/TRLTimeline";
import { FadeSection } from "@/components/wiki/FadeSection";
import { ReadMoreLink } from "@/components/wiki/ReadMoreLink";
import { WikiPage } from "@/components/wiki/WikiPage";
import { WikiSection } from "@/components/wiki/WikiSection";

const MARKET_NEED_SECTION_ID = "market-need";
const MARKET_OPPORTUNITY_SECTION_ID = "market-opportunity";
const BUSINESS_MODEL_SECTION_ID = "business-model";
const COMPETITIVE_ADVANTAGE_SECTION_ID = "competitive-advantage";
const ROADMAP_SECTION_ID = "commercialization-roadmap";
const INTELLECTUAL_PROPERTY_SECTION_ID = "intellectual-property";

// The Problem's 3-part teaser, rendered by ProblemHighlights as alternating
// hook/body rows. Each hook highlights its key phrase in the accent color.
const PROBLEM_HIGHLIGHTS: ProblemHighlight[] = [
  {
    title: (
      <>
        Consumers want <span className="text-accent">sustainable meat</span>
        —but they won&apos;t compromise on taste.
      </>
    ),
    body: "The alternative protein industry is growing rapidly as it seeks more sustainable food production methods. However, public adoption depends on delivering products that match conventional meat in taste, texture, and overall eating experience while remaining commercially scalable.",
    columns: [
      { icon: BarChart3, label: "Rapidly Growing Market" },
      { icon: Calendar, label: "Year-Round Production" },
      { icon: Factory, label: "Localized Manufacturing" },
      { icon: Leaf, label: "Reduced Resource Consumption" },
    ],
  },
  {
    title: (
      <>
        The biggest obstacle isn&apos;t protein.{" "}
        <span className="text-accent">It&apos;s fat.</span>
      </>
    ),
    body: "Although today's plant-based meats can replicate protein structures, they still struggle to reproduce the unique sensory properties created by animal fat. Lipid composition determines juiciness, texture, and flavour release, which makes it one of the largest barriers to consumer adoption.",
    columns: [
      { icon: Soup, label: "Taste" },
      { icon: Layers, label: "Texture" },
      { icon: FlaskConical, label: "Aroma" },
      { icon: Droplet, label: "Mouthfeel" },
    ],
  },
  {
    title: (
      <>
        Innovation alone isn&apos;t enough.{" "}
        <span className="text-accent">Manufacturing must scale.</span>
      </>
    ),
    body: "Commercial success requires infrastructure capable of manufacturing alternative proteins at competitive costs. Despite significant research investment and government support, large-scale production remains limited, slowing commercialization and delaying price parity with conventional meat.",
    columns: [
      {
        label: "Commercial Facility Cost",
        countUpRange: { min: 15, max: 250, prefix: "$", suffix: "M" },
      },
      {
        label: "Research and Development Grants",
        countUp: { target: 36 },
      },
      { label: "Infrastructure Grants", countUp: { target: 16 } },
      { label: "High Scale-Up Potential", value: "Canada" },
    ],
  },
];

// The Market Opportunity section keeps "Market Opportunity" as its id/TOC
// reference in code, but shows this instead as its on-page heading.
const MARKET_OPPORTUNITY_DISPLAY_TITLE = (
  <>
    One breakthrough. A{" "}
    <span className="text-emerald-400">trillion-dollar</span> opportunity.
  </>
);
const MARKET_OPPORTUNITY_INTRO =
  "Alternative proteins are entering a period of rapid commercialization, but widespread adoption still depends on delivering products consumers genuinely enjoy. By restoring the sensory experience of animal fat through a scalable fermentation platform, our technology addresses one of the industry's largest barriers while positioning itself within one of the fastest-growing sectors in food biotechnology.";
const MARKET_OPPORTUNITY_STATS = [
  {
    label: "Precision Fermentation by 2033",
    countUp: { target: 101.5, prefix: "$", suffix: "B", decimals: 1 },
  },
  {
    label: "CAGR Precision Fermentation",
    countUp: { target: 48.3, suffix: "%", decimals: 1 },
  },
  {
    label: "CAGR Cultivated Meat",
    countUp: { target: 51.6, suffix: "%", decimals: 1 },
  },
];

// Business Model's own hook/body box, styled like a single (non-alternating)
// entry from PROBLEM_HIGHLIGHTS — a header on the left highlighting its key
// phrase in green, body text on the right, plus its own 3-stat row.
const BUSINESS_MODEL_HEADER = (
  <>
    From fermentation to food manufacturers.{" "}
    <span className="text-emerald-400">Built for scale.</span>
  </>
);
const BUSINESS_MODEL_BODY =
  "MEYcell is designed as a business-to-business ingredient platform, supplying engineered yeast lipids to alternative meat manufacturers. By leveraging existing fermentation infrastructure, recurring supply agreements, and scalable production, the business model prioritizes long-term manufacturing efficiency over direct consumer sales.";
const BUSINESS_MODEL_STATS = [
  {
    label: "Pilot Production Cost",
    countUp: { target: 12, prefix: "$", suffix: "/KG" },
  },
  {
    label: "Target Wholesale Price",
    countUp: { target: 24, prefix: "$", suffix: "/KG" },
  },
  { label: "Gross Margin", countUp: { target: 50, suffix: "%" } },
];

// Business Model's second box: revenue stream cards (icon, title, one-line
// description each).
const REVENUE_STREAM_COLUMNS = [
  {
    icon: Box,
    label: "Ingredient Sales",
    description: "Primary revenue through wholesale ingredient supply.",
  },
  {
    icon: FileText,
    label: "Long-Term Supply",
    description: "Recurring contracts with manufacturers.",
  },
  {
    icon: Network,
    label: "Technology Licensing",
    description: "License our engineered yeast platform and IP.",
  },
  {
    icon: Users,
    label: "Co-Development",
    description: "Partner on customized lipid profiles and products.",
  },
];

// Same treatment for Commercialization Roadmap.
const ROADMAP_DISPLAY_TITLE = (
  <>
    From the Lab to the <span className="text-emerald-400">Market</span>
  </>
);
const ROADMAP_INTRO =
  "MEYcell's roadmap outlines the technical, regulatory, and manufacturing milestones required to transition from laboratory validation to commercial ingredient production through scalable fermentation and strategic industry partnerships.";

// Static readiness snapshot shown below the roadmap carousel — not on its
// own timeline of future dates like the carousel, just where each milestone
// currently stands (reached vs. upcoming).
const TRL_HEADING = (
  <>
    Technology Readiness Level (TRL):{" "}
    <span className="text-emerald-400">3-4</span>
  </>
);
const TRL_STEPS: TRLStep[] = [
  { label: "Proof-of-Concept (RNA Thermosensor)", filled: true },
  { label: "Functional Validation (Lipid Release)", filled: true },
  { label: "Lab-Scale Production", filled: false },
  { label: "Pilot-Scale Production", filled: false },
  { label: "Regulatory Submission", filled: false },
  { label: "Commercial Deployment", filled: false },
];

// The Competitive Advantage section keeps "Competitive Advantage" as its
// id/TOC reference in code, but shows this instead as its on-page heading.
const COMPETITIVE_ADVANTAGE_DISPLAY_TITLE = (
  <>
    Different Technology.{" "}
    <span className="text-emerald-400">Different Position.</span>
  </>
);
const COMPETITIVE_ADVANTAGE_INTRO =
  "Alternative protein companies pursue similar goals through fundamentally different technologies. While cultivated meat, plant-based products, and precision fermentation each address sustainability challenges, MEYcell combines precision fermentation with a controlled lipid-release platform designed to improve sensory performance while maintaining scalable manufacturing.";

// The Intellectual Property section keeps "Intellectual Property" as its
// id/TOC reference in code, but shows this instead as its on-page heading.
const INTELLECTUAL_PROPERTY_DISPLAY_TITLE = (
  <>
    <span className="text-emerald-400">Protecting the platform</span> that
    produces, stores, and releases the lipid.
  </>
);
const INTELLECTUAL_PROPERTY_INTRO =
  "The IP strategy combines patent protection for the core platform and for future applications, with trade secret protection for the process. MEYcell plans to begin with a U.S. provisional patent and expand the portfolio as the technology and its applications develop. A formal freedom-to-operate analysis remains a planned step before commercialization.";

// The filing-strategy progression, shown as a plain vertical flow (no
// bordered box) — each stage centered with a downward arrow to the next.
const FILING_STRATEGY_STAGES = [
  "Core Platform Patent",
  "Platform Improvements",
  "Formulation-Specific Protection",
  "Application Specific Protection",
  "International Protection in Commercially Relevant Markets",
];

export function EntrepreneurshipLanding() {
  return (
    <>
      <Banner title="MEYcell" src="/banners/entrepreneurship.png" centered>
        <p>
          The <span className="text-accent">fat</span> behind better meat.
        </p>
      </Banner>

      <WikiPage showToc={false}>
        {ENTREPRENEURSHIP_SECTIONS.map((section) => {
          const readMoreHref = `${ENTREPRENEURSHIP_DETAILS_HREF}#${section.id}`;

          const displayTitle =
            section.id === MARKET_OPPORTUNITY_SECTION_ID
              ? MARKET_OPPORTUNITY_DISPLAY_TITLE
              : section.id === ROADMAP_SECTION_ID
                ? ROADMAP_DISPLAY_TITLE
                : section.id === COMPETITIVE_ADVANTAGE_SECTION_ID
                  ? COMPETITIVE_ADVANTAGE_DISPLAY_TITLE
                  : section.id === INTELLECTUAL_PROPERTY_SECTION_ID
                    ? INTELLECTUAL_PROPERTY_DISPLAY_TITLE
                    : section.title;

          return (
            <FadeSection key={section.id}>
              <WikiSection id={section.id} title={displayTitle}>
                {section.id === MARKET_NEED_SECTION_ID ? (
                  <>
                    <ProblemHighlights points={PROBLEM_HIGHLIGHTS} />
                    <ReadMoreLink href={readMoreHref} />
                  </>
                ) : section.id === MARKET_OPPORTUNITY_SECTION_ID ? (
                  <>
                    <p className="mb-10">{MARKET_OPPORTUNITY_INTRO}</p>
                    <div className="mb-10">
                      <MarketOpportunityCircles />
                    </div>
                    <StatColumns columns={MARKET_OPPORTUNITY_STATS} />
                    <ReadMoreLink href={readMoreHref} />
                  </>
                ) : section.id === BUSINESS_MODEL_SECTION_ID ? (
                  <>
                    <div className="border border-border bg-card p-6 transition-colors duration-200 hover:border-accent md:p-8">
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-12">
                        <p className="font-display text-2xl leading-snug text-foreground md:order-1 md:self-center md:text-3xl">
                          {BUSINESS_MODEL_HEADER}
                        </p>
                        <p className="text-sm leading-relaxed text-muted-foreground md:order-2 md:self-center">
                          {BUSINESS_MODEL_BODY}
                        </p>
                      </div>
                      <div className="mt-8 border-t border-border pt-6">
                        <StatColumns
                          columns={BUSINESS_MODEL_STATS}
                          bordered={false}
                        />
                      </div>
                    </div>

                    <div className="border border-border bg-card p-6 transition-colors duration-200 hover:border-accent md:p-8">
                      <h3 className="font-display text-lg text-foreground mb-3">
                        Revenue Streams
                      </h3>
                      <StatColumns
                        columns={REVENUE_STREAM_COLUMNS}
                        bordered={false}
                      />
                    </div>

                    <ReadMoreLink href={readMoreHref} />
                  </>
                ) : section.id === COMPETITIVE_ADVANTAGE_SECTION_ID ? (
                  <>
                    <p>{COMPETITIVE_ADVANTAGE_INTRO}</p>
                    <CompetitorComparisonCards />
                    <ReadMoreLink href={readMoreHref} />
                  </>
                ) : section.id === ROADMAP_SECTION_ID ? (
                  <>
                    <p>{ROADMAP_INTRO}</p>
                    <RoadmapCarousel />

                    <div className="border border-border bg-card p-6 transition-colors duration-200 hover:border-accent md:p-8">
                      <h3 className="font-display text-lg text-foreground mb-6">
                        {TRL_HEADING}
                      </h3>
                      <TRLTimeline steps={TRL_STEPS} />
                    </div>

                    <ReadMoreLink href={readMoreHref} />
                  </>
                ) : section.id === INTELLECTUAL_PROPERTY_SECTION_ID ? (
                  <>
                    <p>{INTELLECTUAL_PROPERTY_INTRO}</p>
                    <div className="flex flex-col items-center gap-2">
                      {FILING_STRATEGY_STAGES.map((stage, index) => (
                        <div
                          key={stage}
                          className="flex flex-col items-center gap-2"
                        >
                          {index > 0 ? (
                            <ArrowDown className="h-4 w-4 text-muted-foreground" />
                          ) : null}
                          <div className="rounded-full border border-accent/40 bg-accent/10 px-5 py-2 text-center">
                            <p className="text-sm font-semibold text-accent">
                              {stage}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <ReadMoreLink href={readMoreHref} />
                  </>
                ) : null}
              </WikiSection>
            </FadeSection>
          );
        })}
      </WikiPage>
    </>
  );
}
