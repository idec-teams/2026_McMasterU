import type { ModelSubsection, WikiReference } from "@/types/wiki";

// Full write-up for the "Market Opportunity" section, reached via the
// details page's "Read More" link from the landing page's short teaser.
// Uses the same title+blocks shape as the engineering model pages
// (ModelSubsection/ModelContentBlock) so the Market Landscape subsection can
// interleave its TAM/SAM/SOM table between paragraphs via the shared
// ModelBlocks renderer, rather than being limited to plain text.
export const MARKET_OPPORTUNITY_SECTIONS: ModelSubsection[] = [
  {
    title: "Value Proposition",
    blocks: [
      {
        type: "paragraph",
        text: "The core value proposition is an engineered whole-cell yeast platform engineered to function as a next-generation fat replacement for alternative protein products. Unlike conventional lipid ingredients, the platform restores key sensory properties—including juiciness, mouthfeel, and flavour release—by replicating the melting behaviour of bovine tallow.",
      },
      {
        type: "paragraph",
        text: "Rather than emulsifying plant oils directly into protein matrices, the technology utilizes the yeast cell wall as a natural encapsulation platform. This enables lipid release during cooking to more closely resemble the marbled distribution of fat in conventional meat, improving both texture and flavour.",
      },
      {
        type: "paragraph",
        text: "Since the platform is built upon industrial fermentation technologies that are already widespread, it represents a scalable business-to-business ingredient solution with strong manufacturing potential and opportunities for future cost competitiveness. Ultimately, the technology provides a more sustainable method for improving sensory performance in alternative proteins while reducing reliance on livestock-derived fat production.",
      },
    ],
  },
  {
    title: "Market Landscape",
    blocks: [
      {
        type: "paragraph",
        text: "The global protein industry presents a significant commercial opportunity as demand for sustainable food production continues to increase alongside population growth, food insecurity concerns, and environmental pressures. This opportunity can be evaluated through three market categories:",
      },
      {
        type: "table",
        caption: "Market sizing framework: TAM, SAM, and SOM",
        headers: ["Market", "Target Audience"],
        rows: [
          ["Total Addressable Market (TAM)", "Global meat industry"],
          [
            "Serviceable Addressable Market (SAM)",
            "Consumers willing to adopt alternative proteins based on geography and accessibility",
          ],
          [
            "Serviceable Obtainable Market (SOM)",
            "Customers realistically reachable considering production cost and consumer acceptance of alternative proteins",
          ],
        ],
      },
      {
        type: "paragraph",
        text: "Although the TAM remains extremely large, the current SOM is constrained by technological limitations, manufacturing costs, and misinformation associated with novel food technologies. However, gradual expansion within the SOM is primarily driven by high growth technologies such as cultured meat and precision fermentation, as discussed under Consumer Adoption below.",
      },
    ],
  },
  {
    title: "Cultivated Meat",
    blocks: [
      {
        type: "paragraph",
        text: "The cultivated meat sector is projected to expand from USD 246.9 million in 2022 to approximately USD 6.9 billion by 2030, corresponding to a 51.6% compound annual growth rate (CAGR) [ref6]. North America remains the largest market, while the Asia Pacific region is growing the fastest, with poultry and burgers currently dominating revenue and holding market shares of 39% and 41% respectively in 2022 [ref6].",
      },
    ],
  },
  {
    title: "Precision Fermentation",
    blocks: [
      {
        type: "paragraph",
        text: "Precision fermentation represents one of the fastest-growing sectors within food biotechnology. The global market is projected to increase from USD 4.68 billion in 2025 to USD 101.53 billion by 2033, corresponding to a 48.3% CAGR [ref7].",
      },
      {
        type: "paragraph",
        text: "Unlike cultivated meat, precision fermentation is increasingly viewed as commercially viable because it integrates with existing food manufacturing infrastructure. In particular, the yeast production segment currently represents 43.1% of market revenue, demonstrating the scalability and commercial readiness of microbial fermentation platforms [ref7].",
      },
    ],
  },
  {
    title: "Plant-Based Meat",
    blocks: [
      {
        type: "paragraph",
        text: "The plant-based meat sector is expected to grow from USD 9.57 billion in 2024 to USD 21.81 billion by 2030, with a 14.7% CAGR [ref8]. Its comparatively lower CAGR of 14.7% suggests a stabilization phase where consumers increasingly prioritize taste, price parity, and nutritional value over novelty. Within this segment, chicken alternatives show the strongest growth potential due to the global affordability and cultural acceptance of poultry [ref8].",
      },
    ],
  },
  {
    title: "Consumer Adoption",
    blocks: [
      {
        type: "paragraph",
        text: "The long-term viability and consumer adoption of the alternative protein sector depends on a transition from niche vegetarian and vegan markets toward broad adoption by regular meat consumers. While ethical considerations regarding animal welfare and environmental sustainability frequently motivate initial trials, repeat purchasing behavior is primarily driven by taste, price, and health. Approximately 74% of U.S. consumers currently prefer conventional meat over cultivated alternatives. However, consumer behaviour also demonstrates increasing openness toward sustainable protein sources, with 72% of consumers already incorporating plant-based foods into their diets [ref9][ref7]. These trends suggest that improving sensory quality rather than changing consumer values may represent the largest opportunity for market expansion.",
      },
      {
        type: "paragraph",
        text: "According to a 2025 consumer snapshot by the Good Food Institute, generational and gender-based trends are emerging in the United States, where Gen Z and Millennial consumers are the most likely to consume plant-based meat monthly, with male consumers reporting slightly higher usage rates (22%) than females (17%). Within these demographics, taste (66%) and affordability (53%) are cited as the primary drivers for purchase. On the other hand, high cost (43%) and unsatisfactory flavor profiles (37%) remain the most significant barriers to adoption [ref10]. While a 2024 UK study suggests that personal health benefits often rank as a top motivation alongside animal welfare and environmental concerns, these factors rarely override sensory and economic expectations at the point of sale [ref11].",
      },
      {
        type: "paragraph",
        text: "The economic principles of the income and substitution effects further clarify these consumption patterns. Broad market viability requires alternative proteins to achieve price parity or a discount relative to conventional meat to reach mainstream and lower-income consumers. While higher-income demographics are more likely to experiment with premium alternatives, sustained price premiums still limit long-term adoption. The income effect suggests that as long as alternative meat carries a premium, it remains a luxury good, limiting its accessibility. Furthermore, the substitution effect dictates that if conventional meat remains cheaper and is perceived as tastier, consumers will revert to traditional products unless alternative options can bridge the gap in both cost and culinary experience [ref10][ref12].",
      },
      {
        type: "paragraph",
        text: 'Finally, consumer perception of alternative proteins remains one of the primary barriers to commercialization and widespread adoption. The nomenclature and public perception of production methods significantly influence consumer trust. Terms such as "lab-grown," "cell-based," or "cultured" often carry negative connotations and trigger distrust due to a lack of technical understanding. Research indicates that when the production process is described using the term "cultivated meat," consumer willingness to try the product increases to approximately 45% [ref13]. This suggests that consumer education strategies must accompany product launches to reduce social stigma and improve trust. Ultimately, once alternative proteins match conventional meat in taste, texture, and price, the production method becomes a secondary consideration for most consumers.',
      },
    ],
  },
  {
    title: "Strategic Opportunity",
    blocks: [
      {
        type: "paragraph",
        text: "As alternative proteins transition from early adoption toward commercial maturity, future growth will increasingly depend upon technological innovation rather than marketing alone. The industry requires continued progress in synthetic biology, fermentation optimization, and scalable manufacturing infrastructure to overcome existing barriers related to cost and product performance. By addressing these technical challenges, research-driven platforms like MEYcell have the potential to expand beyond consumers with plant-based diets, and instead, appeal to the broader population seeking sustainable food products that deliver sensory qualities comparable to conventional meat.",
      },
    ],
  },
];

// Continues the id/numbering sequence started by PROBLEM_REFERENCES (ref1-5)
// so the page's single bottom ReferencesSection stays consistently numbered
// across both sections.
export const MARKET_OPPORTUNITY_REFERENCES: WikiReference[] = [
  {
    id: "ref6",
    title: "Cultured Meat Market (2026–2033)",
    source: "Grand View Research",
    year: "2026, August",
    url: "https://www.grandviewresearch.com/industry-analysis/cultured-meat-market-report",
  },
  {
    id: "ref7",
    title: "Precision Fermentation Market (2026–2033)",
    source: "Grand View Research",
    year: "2026, June",
    url: "https://www.grandviewresearch.com/industry-analysis/precision-fermentation-market-report",
  },
  {
    id: "ref8",
    authors: "Research and Markets.",
    year: "2025, March 5",
    title:
      "Plant-based meat market research 2025: A $21.81 billion industry by 2030, driven by growing investments, new product launches, clean labeling demand, and environmental concerns",
    source: "Yahoo Finance",
    url: "https://finance.yahoo.com/news/plant-based-meat-market-research-140200072.html",
  },
  {
    id: "ref9",
    authors: "IFIC.",
    year: "2019, September 17",
    title: "Consumer research on sustainable eating and food waste",
    source: "IFIC",
    url: "https://ific.org/media/consumer-research-on-sustainable-eating-and-food-waste/",
  },
  {
    id: "ref10",
    authors: "Good Food Institute.",
    year: 2025,
    title: "Consumer snapshot: Plant-based meat in the U.S.",
    source: "Good Food Institute",
    url: "https://gfi.org/wp-content/uploads/2025/04/Consumer-snapshot-Plant-based-meat-in-the-US.pdf",
  },
  {
    id: "ref11",
    authors: "Tso, R., Lim, A. J., & Forde, C. G.",
    year: 2024,
    title:
      "A comparison of the nutritional profile and consumer acceptance of plant-based meat substitutes",
    source: "Current Research in Food Science, 8, 100705",
    url: "https://doi.org/10.1016/j.crfs.2024.100705",
  },
  {
    id: "ref12",
    authors: "Smetana, S., Dräger de Teran, T., & Vogelpohl, A.",
    year: 2024,
    title:
      "Current and future market opportunities for alternative proteins in low and middle income countries",
    source: "Sustainability, 16(6), 2341",
    url: "https://doi.org/10.3390/su16062341",
  },
  {
    id: "ref13",
    authors: "Good Food Institute.",
    year: 2023,
    title: "Cultivated meat consumer insights and nomenclature",
    source: "Good Food Institute",
    url: "https://gfi.org/wp-content/uploads/2023/01/CM-consumer-insights-and-nomenclature-insights-2.pdf",
  },
];
