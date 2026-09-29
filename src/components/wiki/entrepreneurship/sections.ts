export type EntrepreneurshipSection = { id: string; title: string };

// Canonical list of entrepreneurship sections, shared by the landing page
// (teaser copy + "Read More") and the details page (full write-up) so their
// section ids/titles can never drift apart — a mismatch would silently break
// the Read More anchors and the details page's table of contents.
export const ENTREPRENEURSHIP_SECTIONS: EntrepreneurshipSection[] = [
  { id: "market-need", title: "The Problem" },
  { id: "market-opportunity", title: "Market Opportunity" },
  { id: "business-model", title: "Business Model" },
  { id: "commercialization-roadmap", title: "Commercialization Roadmap" },
  { id: "competitive-advantage", title: "Competitive Advantage" },
  { id: "intellectual-property", title: "Intellectual Property" },
];

export const ENTREPRENEURSHIP_DETAILS_HREF = "/entrepreneurship/details";
