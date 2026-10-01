import type { ProblemSubsection } from "@/components/wiki/entrepreneurship/problemContent";
import type { WikiReference } from "@/types/wiki";

// Full write-up for the "Business Model" section, reached via the details
// page's "Read More" link from the landing page's short teaser. Plain
// title+text subsections (no tables/figures needed here), the same shape as
// PROBLEM_SUBSECTIONS.
export const BUSINESS_MODEL_SUBSECTIONS: ProblemSubsection[] = [
  {
    title: "B2B Ingredient Supply Model",
    text: "MEYcell operates primarily as a business-to-business (B2B) ingredient company, supplying engineered yeast-derived fats directly to alternative meat manufacturers rather than developing and marketing a finished consumer product. The company's core revenue stream is the wholesale sale of MEYcell on a per-kilogram basis, with pricing varying according to purchase volume and contractual commitments.\n\nLong-term supply agreements could provide MEYcell with recurring revenue and establish ongoing relationships with food manufacturers. Additional future revenue opportunities include development agreements to customize lipid profiles for specific food applications, and the potential licensing of MEYcell's engineered yeast platform and associated intellectual property.\n\nOperating as an ingredient supplier allows MEYcell to allocate resources to improve fermentation technology, ingredient performance, and focus on scaling the manufacturing process rather than investing heavily in consumer branding, retail distribution, and product marketing. This model also allows existing alternative protein manufacturers to incorporate MEYcell into their products that consumers already trust and use.",
  },
  {
    title: "Revenue Model",
    text: "MEYcell's current pilot-scale financial model estimates a production cost of approximately $12/kg and a target wholesale selling price of $24/kg. This produces a gross profit of approximately $12 for every kilogram sold, corresponding to a 50% gross margin. These estimates are currently pilot-scale assumptions and will require validation considering fermentation yield, downstream-processing requirements, and as commercial production scales. At the current price assumptions, every kilogram of MEYcell sold contributes approximately $12 toward fixed operating costs and, after break-even is reached, generates profit.\n\nProduction costs are expected to change as MEYcell scales. Potential cost reductions include improved fermentation yield and efficiency, bulk purchasing of raw materials, higher equipment utilization, and improved energy efficiency. The current operating-cost model indicates that the fermentation carbon source, such as molasses or cane sugar, accounts for approximately 88.2% of modeled per-cycle fermentation input costs, making carbon-source cost and feed efficiency important targets to optimize and reduce costs in the future.\n\nWater demand must also be considered because water is required both as a component of fermentation media and for cleaning and sterilization. Other recurring inputs include nitrogen and phosphorus sources, antifoam, pH-control chemicals, electricity, cleaning chemicals, and packaging. Labour is also an important factor when considering operation costs at larger scales. Some job opportunities include fermentation scientists, biotechnology technicians, and process operators.",
  },
  {
    title: "Manufacturing & Scale-Up",
    text: "MEYcell production is based on fermentation using engineered yeast grown in controlled bioreactors. Upstream production would require seed fermentation equipment, feed and media tanks, production bioreactors, air compressors, pumps and piping, harvest and drain tanks, and monitoring and control systems for the fermentation process. The bioreactors must support agitation, aeration, temperature control, and cleaning and sterilization procedures such as CIP/SIP [ref14].\n\nGiven that MEYcell produces only the engineered yeast cells themselves, its downstream process may be simpler than conventional precision fermentation systems that require extensive separation and purification modifications. The downstream processing equipment includes a decanter centrifuge for biomass harvesting, harvest and transfer tanks, a spray dryer, and product handling equipment [ref14].\n\nThe scale-up strategy will evolve from pilot-scale fermentation toward larger commercial systems as production demand and performance are validated. Commercial fermentation facilities with approximately 50,000 L to 200,000 L of total fermentation capacity provide a useful long-term industry benchmark, although the appropriate capacity for MEYcell will ultimately depend on fermentation yield, batch frequency, and business demand.",
  },
  {
    title: "Capital Expenditure (CAPEX)",
    text: "Commercial production will require capital investment in fermentation equipment, downstream processing, utilities, installation, and management. At this stage, all CAPEX estimates should be treated as preliminary because total investment depends on production scale, geographic location, and whether long-term manufacturing is owned internally or outsourced.\n\nThe bioreactor system is expected to represent the largest single equipment expenditure. Pilot-scale single-use bioreactors may cost approximately $5,000-50,000, while custom industrial fermentation systems can exceed $500,000 [ref15]. As commercial production scales, total equipment investment will need to increase accordingly. A commercial-scale precision fermentation facility typically requires investment from $15 million to over $100 million, depending on production capacity and configuration [ref15]. These bioreactor systems will need to include ancillary systems for agitation, aeration, temperature control, and CIP/SIP. A mid-scale facility with 20,000-50,000 L bioreactors producing approximately 500 metric tons of output per year has an estimated cost of $20-40 million [ref15]. A large-scale facility producing 1,000 metric tons per year or more can require equipment investment exceeding $80-100 million [ref15].\n\nFor MEYcell's preliminary CAPEX model, the bioreactor accounts for approximately 75.6% of modeled capital expenditure, making it by far the largest investment. The decanter centrifuge represents approximately 7.5%, while installation and commissioning represent approximately 6.5%. Remaining capital requirements are distributed across spray drying, feed tanks, air compression, pumps, harvest and drain tanks, and initial test fermentations. These estimates will be updated once commercial production capacity and final equipment sizing are confirmed.",
  },
];

// Continues the id/numbering sequence started by PROBLEM_REFERENCES (ref1-5)
// and MARKET_OPPORTUNITY_REFERENCES (ref6-13) so the page's single bottom
// ReferencesSection stays consistently numbered across all sections.
export const BUSINESS_MODEL_REFERENCES: WikiReference[] = [
  {
    id: "ref14",
    authors: "The Good Food Institute.",
    year: "n.d.",
    title: "Deep dive: Fermentation upstream bioprocess design",
    source: "The Good Food Institute",
    url: "https://gfi.org/science/the-science-of-fermentation/deep-dive-fermentation-upstream-bioprocess-design/",
  },
  {
    id: "ref15",
    authors: "More, A. B.",
    year: "2026, August 7",
    title:
      "Precision fermentation food production equipment market research report 2034",
    source: "Market Intelo",
    url: "https://marketintelo.com/report/precision-fermentation-food-production-equipment-market",
  },
];
