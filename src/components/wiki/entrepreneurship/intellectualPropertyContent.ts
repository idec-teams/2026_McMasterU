import type { ModelSubsection, WikiReference } from "@/types/wiki";

// Full write-up for the "Intellectual Property" section, reached via the
// details page's "Read More" link from the landing page's short teaser.
// Uses the same title+blocks shape as the engineering model pages
// (ModelSubsection/ModelContentBlock) so the platform-component and
// patent-protection lists render as real bullet lists, and the planned
// patent vs. trade secret breakdown renders as a real table, via the shared
// ModelBlocks renderer.
export const INTELLECTUAL_PROPERTY_SECTIONS: ModelSubsection[] = [
  {
    title: "Intellectual Property Strategy",
    blocks: [
      {
        type: "paragraph",
        text: "MEYcell's intellectual property strategy focuses on protecting the integrated platform responsible for lipid production, intracellular storage, the controlled release and the format in which it is incorporated into food products.",
      },
      {
        type: "paragraph",
        text: "The current platform contains several components that may form part of a future IP portfolio:",
      },
      {
        type: "list",
        items: [
          "The engineered S. cerevisiae strain",
          "The lipid-overexpression pathway",
          "The heat-responsive RNA thermometer",
          "The use of engineered whole yeast cells as the lipid delivery system",
          "The hydrogel formulation used to incorporate MEYcell into alternative proteins",
          "The specific food applications and future product-specific formulations",
        ],
      },
      {
        type: "paragraph",
        text: "The purpose of this strategy is not to protect a single ingredient, but to establish protection around the combination of biological engineering and food application that defines MEYcell's platform and gives it a unique position within the market.",
      },
    ],
  },
  {
    title: "Core Patent Protection",
    blocks: [
      {
        type: "paragraph",
        text: "The initial patent strategy focuses on MEYcell's integrated platform. The current design uses an engineered S. cerevisiae strain in which pathways including ACC1 and DGA1 overexpression are used to redirect cellular metabolism towards increased triacylglycerol accumulation. ACC1 increases the supply of malonyl-CoA for fatty-acid synthesis, while DGA1 promotes the conversion of fatty acyl-CoAs into triacylglycerols for intracellular storage.",
      },
      {
        type: "paragraph",
        text: "This lipid production system is combined with an engineered temperature-responsive mechanism. During cooking, heat activates the RNA thermometer, initiating the cellular response that enables release of the stored lipid.",
      },
      {
        type: "paragraph",
        text: "Therefore, the core protection centers on:",
      },
      {
        type: "list",
        items: [
          "Engineered lipid production",
          "Intracellular storage",
          "Temperature responsive activation",
          "Controlled release",
          "Functional food application",
        ],
      },
      {
        type: "paragraph",
        text: "This integrated system is more central to MEYcell's competitive position than any individual component on its own. Future patent applications may expand beyond the core platform to protect improvements such as modified lipid profiles, optimized release, hydrogel formulations, and application specific uses.",
      },
    ],
  },
  {
    title: "Patents and Trade Secrets",
    blocks: [
      {
        type: "paragraph",
        text: "The IP strategy uses both patent protection and trade-secret protection.",
      },
      {
        type: "table",
        caption: "Planned patent protection vs. trade-secret protection",
        headers: ["Planned Patent Protection", "Trade-Secret Protection"],
        rows: [
          ["Engineered strain architecture", "Media formulations"],
          ["Lipid-production pathway configuration", "Fermentation conditions"],
          ["Heat-responsive regulatory system", "Process control parameters"],
          [
            "Whole cell lipid delivery approach",
            "Proprietary scale-up knowledge",
          ],
          ["Hydrogel delivery formulation", ""],
          ["Application specific formulations", ""],
        ],
      },
      {
        type: "paragraph",
        text: "This layered approach allows MEYcell to protect the externally reproducible components of the technology, while retaining proprietary manufacturing knowledge that contributes to yield, consistency, performance, and production cost.",
      },
    ],
  },
  {
    title: "Patent Landscape",
    blocks: [
      {
        type: "paragraph",
        text: "The patent landscape surrounding MEYcell extends beyond alternative meat. Relevant patent activity spans precision fermentation, metabolic engineering, microbial lipid production, engineered yeast, food formulations and controlled release technologies.",
      },
      {
        type: "paragraph",
        text: "Patent activity in the broader alternative protein sector reportedly reaches a peak in 2022 before declining in subsequent years [ref32], reflecting market consolidation rather than a lack of IP density. MEYcell operates at the intersection of several biotechnology fields in which significant prior IP already exists.",
      },
      {
        type: "paragraph",
        text: "This can be seen with adjacent companies. Impossible Foods has established patent protection around fermentation-derived heme technology, using engineered yeast to produce leghemoglobin for incorporation into plant-based meat. Although its technology targets heme rather than lipid delivery, it demonstrates that engineered microbial food-production platforms can support commercially important IP portfolios [ref25].",
      },
      {
        type: "paragraph",
        text: "Melt&Marble also operates within the engineered yeast and lipid production space. Its technology uses metabolic engineering to modify Y. lipolytica for the production of fats with tailored composition and physical properties, and the company has developed patent assets relating to engineered fungal production systems [ref33].",
      },
      {
        type: "paragraph",
        text: "Mission Barns represents another adjacent IP position. Rather than using microbial fermentation, the company has developed proprietary bioreactor technology for the cultivation of animal adipocytes used to produce cultivated pork fat [ref34].",
      },
      {
        type: "paragraph",
        text: "MEYcell's distinguishing concept is the combination of engineered microbial lipid production with retention of the lipid-producing cell as the final encapsulation and controlled-release system.",
      },
    ],
  },
  {
    title: "Freedom to Operate",
    blocks: [
      {
        type: "paragraph",
        text: "MEYcell has not yet completed a freedom-to-operate analysis. MEYcell's FTO analysis will focus on:",
      },
      {
        type: "list",
        items: [
          "Engineered yeast strains designed for increased lipid accumulation",
          "Metabolic engineered strategies used to enhance lipid production and storage",
          "Temperature responsive genetic control systems",
          "Whole cell encapsulation and controlled release systems",
          "Microbial and precision fermentation derived food lipids",
          "Hydrogel based food ingredient delivery systems",
          "Applications of engineered microbial lipids within alternative protein products",
        ],
      },
    ],
  },
  {
    title: "Filing Strategy",
    blocks: [
      {
        type: "paragraph",
        text: "The planned first step is a U.S. provisional patent application covering the core MEYcell platform. The purpose of the provisional filing is to establish an early position while validation and technology refinement continues to progress. The initial filing will focus on the core technology underlying MEYcell. As the platform develops, future filings may address:",
      },
      {
        type: "list",
        items: [
          "Improved engineered strains",
          "Optimized lipid production pathways",
          "Modified lipid profiles",
          "Improved temperature responsive control system",
          "Alternative controlled release mechanisms",
          "Hydrogel and ingredient formulations",
          "Application specific uses",
        ],
      },
      {
        type: "paragraph",
        text: "The long term objective is to create an evolving IP portfolio in which patent protection is constantly iterated and covers the central platform and commercial applications, while trade secrets preserve proprietary process knowledge that contributes to manufacturing performance.",
      },
    ],
  },
];

// Continues the id/numbering sequence started by PROBLEM_REFERENCES (ref1-5),
// MARKET_OPPORTUNITY_REFERENCES (ref6-13), BUSINESS_MODEL_REFERENCES
// (ref14-15), and COMPETITIVE_ADVANTAGE_REFERENCES (ref16-31) so the page's
// single bottom ReferencesSection stays consistently numbered across all
// sections. The Impossible Foods heme-patent source cited here is the same
// one already listed as ref25 in COMPETITIVE_ADVANTAGE_REFERENCES, so it's
// cited again by that id rather than duplicated. The last three entries
// (FDA, WIPO, USPTO) weren't tied to a specific inline citation in the
// source write-up but were listed under its own "References" heading, so
// they're kept here as further-reading entries.
export const INTELLECTUAL_PROPERTY_REFERENCES: WikiReference[] = [
  {
    id: "ref32",
    title: "Patents plummet in alt proteins: Has innovation ground to a halt?",
    source: "Food Navigator",
    year: "2025, November 19",
  },
  {
    id: "ref33",
    title: "Technology",
    source: "Melt&Marble",
    year: "n.d.",
  },
  {
    id: "ref34",
    title: "Our process",
    source: "Mission Barns",
    year: "n.d.",
  },
  {
    id: "ref35",
    authors: "U.S. Food and Drug Administration.",
    title:
      "Pre-market consultation for human food made with cultured pork fat cells",
    year: 2025,
  },
  {
    id: "ref36",
    authors: "World Intellectual Property Organization.",
    title:
      "Identifying inventions in the public domain: A guide for inventors and entrepreneurs",
    year: 2020,
  },
  {
    id: "ref37",
    authors: "United States Patent and Trademark Office.",
    title: "Provisional application for patent",
    year: "n.d.",
  },
];
