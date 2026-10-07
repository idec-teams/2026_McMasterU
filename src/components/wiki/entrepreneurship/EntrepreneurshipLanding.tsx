import {
  BarChart3,
  Box,
  Calendar,
  ChevronDown,
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
import { MilestoneTimeline } from "@/components/wiki/entrepreneurship/MilestoneTimeline";
import {
  ProblemPanels,
  type ProblemPanelsData,
} from "@/components/wiki/entrepreneurship/ProblemPanels";
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

// The Problem's 3-part teaser, rendered by ProblemPanels. No boxes, no
// green text highlighting — just the big centered statement, its body
// directly below, and each panel's own supporting layout.
const PROBLEM_PANELS: ProblemPanelsData = {
  panel1: {
    heading:
      "Consumers want sustainable meat, but they won't compromise on taste.",
    body: "The alternative protein industry is growing rapidly as it seeks more sustainable food production methods. However, public adoption depends on delivering products that match conventional meat in taste, texture, and overall eating experience while remaining commercially scalable.",
    columns: [
      { icon: BarChart3, label: "Rapidly Growing Market" },
      { icon: Calendar, label: "Year-Round Production" },
      { icon: Factory, label: "Localized Manufacturing" },
      { icon: Leaf, label: "Reduced Resource Consumption" },
    ],
  },
  panel2: {
    heading: "The biggest obstacle isn't protein. It's fat.",
    body: "Although today's plant-based meats can replicate protein structures, they still struggle to reproduce the unique sensory properties created by animal fat. Lipid composition determines juiciness, texture, and flavour release, which makes it one of the largest barriers to consumer adoption.",
    subheading: "Consumers care about:",
    bubbles: [
      { icon: Soup, label: "Taste" },
      { icon: Layers, label: "Texture" },
      { icon: FlaskConical, label: "Aroma" },
      { icon: Droplet, label: "Mouthfeel" },
    ],
  },
  panel3: {
    heading: "Innovation alone isn't enough. Manufacturing must scale.",
    body: "Commercial success requires infrastructure capable of manufacturing alternative proteins at competitive costs. Despite significant research investment and government support, large-scale production remains limited, slowing commercialization and delaying price parity with conventional meat.",
    subheading: "Canada has high scale-up potential:",
    stats: [
      {
        label: "Commercial Facility Cost",
        countUpRange: { min: 15, max: 250, prefix: "$", suffix: "M" },
      },
      {
        label: "Research and Development Grants",
        countUp: { target: 36 },
      },
      { label: "Infrastructure Grants", countUp: { target: 16 } },
    ],
  },
};

// The Market Opportunity section keeps "Market Opportunity" as its id/TOC
// reference in code, but shows this instead as its on-page heading.
const MARKET_OPPORTUNITY_DISPLAY_TITLE =
  "One breakthrough. A trillion-dollar opportunity.";
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

// Business Model's intro: header + body stacked and centered on the left
// half, its 3 stats stacked vertically on the right half — no box around
// either half.
const BUSINESS_MODEL_HEADER =
  "From fermentation to food manufacturers. Built for scale.";
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
const ROADMAP_DISPLAY_TITLE = "From the Lab to the Market";
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
  { label: "Proof-of-Concept (RNA Thermosensor)", fill: "solid" },
  { label: "Functional Validation (Lipid Release)", fill: "solid" },
  { label: "Lab-Scale Production", fill: "pastel" },
  { label: "Pilot-Scale Production", fill: "pastel" },
  { label: "Regulatory Submission", fill: "empty" },
  { label: "Commercial Deployment", fill: "empty" },
];

// The Competitive Advantage section keeps "Competitive Advantage" as its
// id/TOC reference in code, but shows this instead as its on-page heading.
const COMPETITIVE_ADVANTAGE_DISPLAY_TITLE =
  "Different Technology. Different Position.";
const COMPETITIVE_ADVANTAGE_INTRO =
  "Alternative protein companies pursue similar goals through fundamentally different technologies. While cultivated meat, plant-based products, and precision fermentation each address sustainability challenges, MEYcell combines precision fermentation with a controlled lipid-release platform designed to improve sensory performance while maintaining scalable manufacturing.";

// The Intellectual Property section keeps "Intellectual Property" as its
// id/TOC reference in code, but shows this instead as its on-page heading.
const INTELLECTUAL_PROPERTY_DISPLAY_TITLE =
  "Protecting the platform that produces, stores, and releases the lipid.";
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
        <a
          href={`#${ENTREPRENEURSHIP_SECTIONS[0].id}`}
          className="inline-flex items-center gap-2 bg-primary px-6 py-3 font-mono text-xs uppercase tracking-widest text-primary-foreground transition-colors duration-200 hover:bg-accent"
        >
          Experience the Presentation
          <ChevronDown className="h-3.5 w-3.5" />
        </a>
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

          // "The Problem" and "Business Model" drop their heading entirely
          // (still rendered sr-only via hideTitle, so the id/anchor and
          // accessibility tree are unaffected) — their own big centered
          // statements already carry that role visually.
          const hideTitle =
            section.id === MARKET_NEED_SECTION_ID ||
            section.id === BUSINESS_MODEL_SECTION_ID;

          return (
            <FadeSection key={section.id}>
              <WikiSection
                id={section.id}
                title={displayTitle}
                hideTitle={hideTitle}
              >
                {section.id === MARKET_NEED_SECTION_ID ? (
                  <>
                    <ProblemPanels data={PROBLEM_PANELS} />
                    <ReadMoreLink href={readMoreHref} />
                  </>
                ) : section.id === MARKET_OPPORTUNITY_SECTION_ID ? (
                  <>
                    <p className="mx-auto mb-10 max-w-3xl">
                      {MARKET_OPPORTUNITY_INTRO}
                    </p>
                    <div className="mb-10">
                      <MarketOpportunityCircles />
                    </div>
                    <StatColumns columns={MARKET_OPPORTUNITY_STATS} />
                    <ReadMoreLink href={readMoreHref} />
                  </>
                ) : section.id === BUSINESS_MODEL_SECTION_ID ? (
                  <>
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center md:gap-12">
                      <div className="flex flex-col items-center gap-4 text-center">
                        <p className="font-display text-2xl leading-snug text-foreground md:text-3xl">
                          {BUSINESS_MODEL_HEADER}
                        </p>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {BUSINESS_MODEL_BODY}
                        </p>
                      </div>
                      <StatColumns
                        columns={BUSINESS_MODEL_STATS}
                        bordered={false}
                        direction="column"
                      />
                    </div>

                    <div className="border border-border bg-card p-6 md:p-8">
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
                    <p className="mx-auto max-w-3xl">
                      {COMPETITIVE_ADVANTAGE_INTRO}
                    </p>
                    <CompetitorComparisonCards />
                    <ReadMoreLink href={readMoreHref} />
                  </>
                ) : section.id === ROADMAP_SECTION_ID ? (
                  <>
                    <p className="mx-auto max-w-3xl">{ROADMAP_INTRO}</p>
                    <RoadmapCarousel />

                    <div>
                      <h3 className="font-display text-lg text-foreground mb-6">
                        {TRL_HEADING}
                      </h3>
                      <TRLTimeline steps={TRL_STEPS} />
                    </div>

                    <ReadMoreLink href={readMoreHref} />
                  </>
                ) : section.id === INTELLECTUAL_PROPERTY_SECTION_ID ? (
                  <>
                    <p className="mx-auto max-w-3xl">
                      {INTELLECTUAL_PROPERTY_INTRO}
                    </p>
                    <MilestoneTimeline milestones={FILING_STRATEGY_STAGES} />
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
