import type { ModelSubsection } from "@/types/wiki";

// Full write-up for the "Commercialization Roadmap" section, reached via the
// details page's "Read More" link from the landing page's short teaser. Uses
// the same title+blocks shape as the engineering model pages
// (ModelSubsection/ModelContentBlock) so the "Current work includes" /
// "Primary objectives include" lists render as real bullet lists via the
// shared ModelBlocks renderer, rather than being limited to plain text. The
// "Year 1/2-3/4+" stages (originally a single "Technical Development
// Roadmap" subsection) are flattened into their own top-level entries, same
// treatment the Market Opportunity write-up gives its own sub-topics.
export const COMMERCIALIZATION_ROADMAP_SECTIONS: ModelSubsection[] = [
  {
    title: "Current Development Status",
    blocks: [
      {
        type: "paragraph",
        text: "MEYcell is currently in the early stages of technology development, with laboratory-scale proof-of-concept experiments underway to validate its engineered lipid production platform. Development has focused on establishing the genetic constructs, optimizing the RNA thermosensor, and demonstrating controlled lipid release during cooking conditions.",
      },
      {
        type: "paragraph",
        text: "At the current Technology Readiness Level (TRL), the core biological system has been designed and is undergoing iterative validation. Early laboratory experiments have demonstrated the feasibility of the engineered yeast platform; however, additional optimization is required before pilot-scale manufacturing can begin.",
      },
      {
        type: "paragraph",
        text: "A key technical challenge has been optimizing our RNA thermosensor to activate at the temperature needed for cooking. Existing research did not provide a sequence optimized for our specific application, meaning we could not simply adopt an established design. Instead, we used existing RNA thermosensor toolkits as a starting point and optimized sequences to melt at our target temperature. We are now going a step further by developing a machine-learning model to predict expression levels, allowing us to fine-tune candidate sequences rather than relying solely on trial-and-error experimentation.",
      },
      {
        type: "paragraph",
        text: "Current work includes:",
      },
      {
        type: "list",
        items: [
          "Engineering and validation of the RNA thermosensor",
          "Construction of lipid-producing yeast strains",
          "Laboratory-scale fermentation",
          "Initial characterization of lipid production",
          "Preliminary functional testing",
        ],
      },
      {
        type: "paragraph",
        text: "Remaining technical work includes:",
      },
      {
        type: "list",
        items: [
          "Optimization of thermosensor performance",
          "Quantitative lipid release studies",
          "Sensory validation within alternative meat formulations",
          "Process optimization for pilot-scale fermentation",
          "Manufacturing process development",
        ],
      },
    ],
  },
  {
    title: "Year 1: Laboratory Validation",
    blocks: [
      {
        type: "paragraph",
        text: "Initial work focuses on validating the engineered yeast platform through synthetic biology, fermentation experiments, and lipid characterization. For product development, our technology will work with 2-3 formulators to optimize sensory performance, affordability, inclusion rates, and RNA content while building an R&D system that enables rapid iteration.",
      },
      {
        type: "paragraph",
        text: "Primary objectives include:",
      },
      {
        type: "list",
        items: [
          "RNA thermosensor optimization",
          "Controlled lipid accumulation",
          "Initial fermentation optimization",
          "Lipid release validation during cooking",
          "Thermal characterization",
          "Sensory evaluation",
        ],
      },
    ],
  },
  {
    title: "Year 2-3: Pilot Fermentation",
    blocks: [
      {
        type: "paragraph",
        text: "Following successful laboratory validation, development will transition toward pilot-scale fermentation and confirmation of product performance within alternative meat systems. Our technology will need regulatory expertise to navigate Health Canada's novel food requirements and CFIA licensing, alongside quality and food-safety systems aligned with standards such as ISO 9001 and GFSI-recognized certification. Rather than investing prematurely in our own facility, we plan to use toll manufacturing while optimizing our bioprocess at small scale.",
      },
      {
        type: "paragraph",
        text: "Primary objectives include:",
      },
      {
        type: "list",
        items: [
          "Process reproducibility",
          "Batch consistency",
          "Yield optimization",
          "Manufacturing process development",
          "Preliminary cost analysis",
          "Sensory evaluation",
        ],
      },
    ],
  },
  {
    title: "Year 4+: Commercial Scale-Up",
    blocks: [
      {
        type: "paragraph",
        text: "Commercial development will focus on increasing production capacity while maintaining product quality and manufacturing efficiency. Most importantly, we need a design partner willing to introduce MEYcell into the market, generating consumer feedback, validating commercial demand, and becoming a reference customer for future expansion.",
      },
      {
        type: "paragraph",
        text: "Primary objectives include:",
      },
      {
        type: "list",
        items: [
          "Stable production",
          "Manufacturing robustness",
          "Process economics",
          "Quality management",
          "Commercial readiness",
        ],
      },
    ],
  },
  {
    title: "Regulatory Strategy",
    blocks: [
      {
        type: "paragraph",
        text: "MEYcell will follow Canada's Novel Foods regulatory pathway while monitoring international regulatory developments to support future market expansion. In Canada, commercialization will require a pre-market safety assessment conducted by Health Canada under the Novel Foods Regulations. Early consultation with Health Canada will be incorporated throughout product development to ensure regulatory expectations are addressed before submission.",
      },
    ],
  },
];
