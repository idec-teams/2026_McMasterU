import type { WikiReference } from "@/types/wiki";

export type ProblemSubsection = {
  title: string;
  /** Paragraphs, each rendered as its own <p>. */
  text: string;
};

// Full write-up for the "The Problem" (market-need) section, reached via the
// details page's "Read More" link from the landing page's short teaser.
export const PROBLEM_SUBSECTIONS: ProblemSubsection[] = [
  {
    title: "Sustainability and the Need for Alternative Protein Systems",
    text: "The alternative protein industry aims to reduce reliance on conventional meat production by developing more environmentally sustainable methods of protein manufacturing. Compared to traditional animal agriculture, these production systems offer opportunities for year-round manufacturing, localized urban production, reduced resource consumption, and more resilient supply chains. These advantages position alternative proteins as an important component of future food systems.\n\nDespite rapid technological progress, significant scientific and commercial barriers continue to limit widespread adoption.",
  },
  {
    title:
      "Sensory Performance Remains the Largest Barrier to Consumer Acceptance",
    text: "Among the greatest challenges facing alternative proteins is the inability to fully replicate the sensory experience of conventional meat. Consumer acceptance is strongly influenced by taste, flavour, aroma, juiciness, and texture, making sensory performance one of the primary barriers to market adoption [ref1].\n\nA major contributor to these sensory characteristics is animal fat. During cooking, marbled saturated lipids gradually melt, lubricating muscle fibres while simultaneously acting as carriers for fat-soluble flavour molecules. This process produces the characteristic juiciness, aroma, and mouthfeel associated with conventional meat [ref2].\n\nCurrent cultivated and plant-based meat products continue to struggle to recreate these lipid-driven sensory mechanisms. This limitation is fundamentally a problem of lipid functionality rather than protein structure. Most commercial meat analogues rely on coconut oil or other liquid plant oils as their primary lipid ingredients. Although these fats contribute richness and moisture, they differ substantially from bovine adipose tissue in their melting behaviour, crystallization patterns, and oxidative pathways [ref3].\n\nUnlike animal fats, coconut and palm oils are dominated by medium-chain saturated fatty acids, producing a waxy mouthfeel while lacking the long-chain unsaturated fatty acids—including oleic and linoleic acid—that generate many desirable flavour compounds during cooking [ref3]. Consequently, these lipid systems fail to establish the structural organization and thermal behaviour necessary to accurately reproduce the texture and flavour release of conventional meat.\n\nCurrent market-leading products therefore continue to rely heavily on lipid systems that inadequately mimic real adipose tissue, particularly during cooking when coconut oil rapidly liquefies [ref4]. This results in reduced fat retention, inferior texture, and diminished sensory realism.\n\nAlthough emerging approaches such as adipogenic differentiation and engineered three-dimensional adipose tissues show promise, these technologies remain technically complex and require substantial additional research before commercial-scale implementation becomes feasible. Developing alternative lipid systems capable of reproducing the composition, structure, and thermal behaviour of animal fat therefore remains one of the most important scientific challenges facing the alternative protein industry.",
  },
  {
    title: "Scaling-up Remains a Critical Bottleneck",
    text: "Beyond technical performance, commercialization is constrained by insufficient manufacturing infrastructure.\n\nAlthough governments worldwide have increased support for alternative protein innovation through grants and policy initiatives, investment remains disproportionately concentrated in research and development rather than production infrastructure. Commercial manufacturing facilities require substantial capital expenditures ranging from approximately $15–250 million, creating a significant financial barrier for emerging companies [ref5].\n\nGlobally, only 16 infrastructure grants have been awarded compared with 336 research and development grants, highlighting a major imbalance between scientific innovation and commercial deployment [ref5].\n\nThis infrastructure gap contributes directly to elevated production costs and delays price parity with conventional meat products.\n\nCanada has been identified as one of the strongest candidates for future alternative protein infrastructure investment due to its established market, supportive business environment, and previous investment activity [ref5].\n\nClosing this commercialization gap will require continued investment in scalable manufacturing capacity alongside continued advances in lipid engineering and product development.",
  },
];

export const PROBLEM_REFERENCES: WikiReference[] = [
  {
    id: "ref1",
    authors: "Appiani, M., Cattaneo, C., & Laureati, M.",
    year: 2023,
    title:
      "Sensory properties and consumer acceptance of plant-based meat, dairy, fish and eggs analogs: A systematic review",
    source: "Frontiers in Sustainable Food Systems, 7",
    url: "https://doi.org/10.3389/fsufs.2023.1268068",
  },
  {
    id: "ref2",
    authors: "Tonder, E. van.",
    year: "2025, July 19",
    title:
      "Why marbling happens and how stress changes fat distribution in beef",
    source: "Earthworm Express",
    url: "https://earthwormexpress.com/the-meat-factory/meat-science-research/why-marbling-happens-and-how-stress-changes-fat-distribution-in-beef/",
  },
  {
    id: "ref3",
    authors: "Jung, H. Y., Kim, M., & Jo, C.",
    year: "2026a",
    title:
      "Next-generation strategies for designing cultured fat with enhanced flavor and functionality",
    source: "Trends in Food Science & Technology, 168",
    url: "https://doi.org/10.1016/j.tifs.2025.105525",
  },
  {
    id: "ref4",
    authors: "Czapalay, E. S., Dobson, S., & Marangoni, A. G.",
    year: 2025,
    title:
      "Legume starch and flour-based emulsion gels as adipose tissue mimetics in plant-based meat products",
    source: "Future Foods, 11, 100578",
    url: "https://doi.org/10.1016/j.fufo.2025.100578",
  },
  {
    id: "ref5",
    authors: "Craig, S., & Cox, V.",
    year: 2025,
    title: "Securing Scale-up Funding for Alternative Proteins",
    source: "Ambitious Impact",
    url: "https://doi.org/10.5281/ZENODO.16564593",
  },
];
