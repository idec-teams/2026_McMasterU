import type { ProblemSubsection } from "@/components/wiki/entrepreneurship/problemContent";
import type { WikiReference } from "@/types/wiki";

// Full write-up for the "Competitive Advantage" section, reached via the
// details page's "Read More" link from the landing page's short teaser.
// Plain title+text subsections (no tables/lists needed here), the same
// shape as PROBLEM_SUBSECTIONS/BUSINESS_MODEL_SUBSECTIONS.
//
// Four in-text claims about Beyond Meat (its plant-derived process, its
// product/branding lineup, its cost struggles, and a restaurant-partnership
// expansion) were cited in the source write-up but had no matching entry in
// the reference list supplied alongside it — the list jumped straight from
// "Aviv, T." to "Impossible Foods", skipping where "Beyond Meat" sources
// would alphabetically sit, so this looks like an accidental gap in what
// was copied rather than an intentional omission. ref28-31 below are
// "coming soon" placeholders that keep the citation title identifiable
// (the exact wording used as the in-text citation key) without inventing a
// URL or publish date — replace their `source`/`year` once the real
// bibliographic details are available.
export const COMPETITIVE_ADVANTAGE_SUBSECTIONS: ProblemSubsection[] = [
  {
    title: "Competitor Positioning",
    text: "The alternative protein industry consists of companies using a variety of technologies to recreate the sensory experience of traditional meat.\n\nAleph Farms is a company which uses cellular agriculture to produce cultivated steak products [ref16]. Their process involves deriving stem cells from fertilized cow eggs which are preserved at sub-zero temperatures. Starter cells are moved into cultivators which mimic the environment inside a cow with the implementation of a plant protein matrix of soy and wheat, in which cells develop into steak-like cuts. After the four week process, the product is ready for harvest and packaging [ref16].\n\nImpossible Foods produces products through the means of precision fermentation technology. Their process involves inserting a plant gene into a yeast cell and using fermentation to produce leghemoglobin which gives its products the characteristic meat flavour and aroma [ref17]. Environmental benefits of its process are emphasized, claiming that the technology requires about 75% less water, 95% less land, and generates 87% lower greenhouse gas emission when compared to traditional burgers. Additionally, the products are made without hormones or antibiotics and contain no cholesterol [ref17].\n\nMeanwhile, Beyond Meat takes a different approach by using plant-derived components of meat including proteins, fats, minerals, and carbohydrates. The company applies heat, cooling, and pressure to form the fibrous texture associated with animal meat [ref28].\n\nAdditionally, the three companies differ in product offerings and market positioning. Aleph Farms focuses on premium whole-cut steak products sold through a B2B model and collaboration with culinary partners to create a high-end dining experience [ref18]. Impossible Foods offers a much broader product lineup, including beef patties, meatballs, hot dogs, steak bites, nuggets, tenders, sausages, and collaborative products such as Mila Impossible frozen foods [ref19]. The company positions itself as a brand that appeals not only to vegetarians and vegans but also to traditional meat eaters who desire a more sustainably produced option [ref20]. Beyond Meat offers products such as steak, burgers, ground meat, and sausage while emphasizing health and sustainability in its branding [ref29].",
  },
  {
    title: "Cost Reduction and Scalability",
    text: "Cost reduction and scalability are major focuses within the industry. Aleph Farms has reportedly reduced production costs by 97% since 2020 through simplification of its biomanufacturing process and eliminating a secondary tissue bioreactor phase [ref21]. The company aims to eventually reduce production costs to approximately $6–7 per pound at large scales [ref21]. Impossible Foods has pursued economies of scale, reducing retail prices of its products while relying on large distributors and restaurants to determine final consumer pricing [ref22]. Beyond Meat, however, still struggles to become a cost leader due to high production costs and instead focuses more heavily on differentiation and brand value [ref30].",
  },
  {
    title: "Strengths and Weaknesses",
    text: "Each company possesses unique strengths and weaknesses. Aleph Farms benefits from strong sustainability positioning, regulatory achievements, and growing beef demand in Israel, but faces financial pressures and declining food-tech investment in Israel [ref23][ref24]. Impossible Foods benefits from strong research and development capabilities, patented heme technology, strong distribution channels, and extensive product variety, although its reliance on soy may create supply chain risks [ref25]. Beyond Meat has strong brand recognition and partnerships with major restaurants and retailers such as McDonald's and Taco Bell, but continues to face persistent financial losses [ref26].\n\nThere are also important opportunities and threats shaping the future of the industry. Aleph Farms may benefit from kosher certification opportunities in Israel, where some religious authorities consider cultivated meat to be kosher, and potentially parve, due to the substantial transformation of the original animal cells during production [ref27]. Impossible Foods is targeting flexitarian consumers who still enjoy meat but are seeking more sustainable alternatives, while Beyond Meat continues expanding partnerships with restaurants and food service companies [ref20][ref31]. At the same time, competition within the industry remains intense, particularly in Israel's growing cultivated meat sector, while companies like Beyond Meat face additional challenges from inflation and price-sensitive consumers.",
  },
];

// Continues the id/numbering sequence started by PROBLEM_REFERENCES (ref1-5),
// MARKET_OPPORTUNITY_REFERENCES (ref6-13), and BUSINESS_MODEL_REFERENCES
// (ref14-15) so the page's single bottom ReferencesSection stays
// consistently numbered across all sections.
export const COMPETITIVE_ADVANTAGE_REFERENCES: WikiReference[] = [
  {
    id: "ref16",
    title: "Cultured meat is the new way to steak",
    source: "Aleph Farms",
    year: "n.d.",
    url: "https://aleph-farms.com/our-recipe/",
  },
  {
    id: "ref17",
    title: "The mission that motivates us | Impossible Foods",
    source: "Impossible Foods",
    year: "2018, January 22",
    url: "https://impossiblefoods.com/ca/blog/the-mission-that-motivates-us",
  },
  {
    id: "ref18",
    title: "Amuse—Awaken your palate",
    source: "Aleph Farms",
    year: "n.d.",
    url: "https://aleph-farms.com/journal/amuse/",
  },
  {
    id: "ref19",
    title: "Home page | Impossible Foods",
    source: "Impossible Foods",
    year: "n.d.",
    url: "https://impossiblefoods.com",
  },
  {
    id: "ref20",
    title:
      "Impossible Foods introduces meatier brand identity, transitions to bold new packaging across its award-winning portfolio of Meat From Plants",
    source: "Impossible Foods",
    year: "2024, March 13",
    url: "https://impossiblefoods.com/media/news-releases/impossible-foods-launches-new-brand-identity-and-packaging",
  },
  {
    id: "ref21",
    title: "Aleph Farms secures $29m to propel cultivated steak production",
    source: "New Tech Foods",
    year: "n.d.",
    url: "https://www.newtechfoods.com/news/aleph-farms-secures-29m-to-propel-cultivated-steak-production",
  },
  {
    id: "ref22",
    title:
      "With increasing economies of scale, Impossible Foods delivers double-digit price reductions for the second time in one year",
    source: "Impossible Foods",
    year: "2021, January 5",
    url: "https://impossiblefoods.com/media/news-releases/with-increasing-economies-of-scale-impossible-foods-delivers-double-digit-price-reductions-for-second-time-in-one-year",
  },
  {
    id: "ref23",
    authors: "Aviv, T.",
    title: "Report name: An overview of the Israeli beef market",
    year: "n.d.",
  },
  {
    id: "ref24",
    title: "Aleph Farms raised $140 million—but now it's struggling to survive",
    source: "Ctech",
    year: "2025, February 24",
    url: "https://www.calcalistech.com/ctechnews/article/ryv2iqk5yl",
  },
  {
    id: "ref25",
    title:
      "Impossible Foods secures reinstatement of EU patent for heme protein",
    source: "Ingredients Network",
    year: "n.d.",
    url: "https://www.ingredientsnetwork.com/impossible-foods-secures-reinstatement-of-eu-news126343.html",
  },
  {
    id: "ref26",
    title: "McDonald's, Yum Brands sign global partnerships with Beyond Meat",
    source: "Restaurant Dive",
    year: "n.d.",
    url: "https://www.restaurantdive.com/news/mcdonalds-yum-brands-sign-global-partnerships-with-beyond-meat/595768/",
  },
  {
    id: "ref27",
    title: '"Israel is a hub for lab-grown meat."',
    source: "Jüdisches Museum Schweiz",
    year: "n.d.",
    url: "https://www.juedisches-museum.ch/en/israel-is-a-hub-for-lab-grown-meat/",
  },
  {
    id: "ref28",
    title: "Our Clean Protein Ingredients Made From Plants | Beyond",
    source: "Coming soon",
  },
  {
    id: "ref29",
    title: "Beyond The Plant Protein Company",
    source: "Coming soon",
  },
  {
    id: "ref30",
    title: "Beyond Meat Cutting to the Bone",
    source: "Coming soon",
  },
  {
    id: "ref31",
    title:
      "Beyond Meat Partners with Hard Rock Cafe and BrewDog to Bring Beyond Burger to More Diners",
    source: "Coming soon",
  },
];
