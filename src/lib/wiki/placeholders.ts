// Placeholder copy for pages awaiting real content. Swap the text where it's
// used once the corresponding write-up exists — nothing else about the page
// needs to change.
import type { ModelPageContent } from "@/types/wiki";

export const LOREM_PARAGRAPH =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

export const LOREM_SENTENCE =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

// Default content for a ModelPage that doesn't have a real write-up yet.
export const PLACEHOLDER_MODEL_CONTENT: ModelPageContent = {
  summaryPoints: [
    { title: "Experimental Design", body: LOREM_SENTENCE },
    { title: "Key Findings", body: LOREM_SENTENCE },
    { title: "Implications", body: LOREM_SENTENCE },
  ],
  problemStatement: LOREM_PARAGRAPH,
  background: LOREM_PARAGRAPH,
  modelConstruction: [
    { blocks: [{ type: "paragraph", text: LOREM_PARAGRAPH }] },
    {
      title: "Model Assumptions",
      blocks: [{ type: "paragraph", text: LOREM_PARAGRAPH }],
    },
  ],
  results: LOREM_PARAGRAPH,
  resultsFigures: [{ caption: "Results figure" }],
  discussion: LOREM_PARAGRAPH,
  validation: LOREM_PARAGRAPH,
  limitationsNextSteps: LOREM_PARAGRAPH,
  references: [],
};
