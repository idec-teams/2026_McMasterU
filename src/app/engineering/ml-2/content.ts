import type { ModelPageContent } from "@/types/wiki";

export const content: ModelPageContent = {
  summaryPoints: [
    {
      title: "Experimental Design",
      body: "Combined pretrained RNA language model embeddings with ViennaRNA thermodynamic features in a small feed-forward network trained to predict 5' UTR activity, using a published growth-coupled HIS3 reporter dataset of random 50-nucleotide 5' UTRs in S. cerevisiae.",
    },
    {
      title: "Key Findings",
      body: "UTR-LM was the best-performing of five pretrained encoders tested, roughly doubling the predictive power of thermodynamic features alone, though predictions compressed toward the centre of the activity distribution.",
    },
    {
      title: "Implications",
      body: "The model establishes a baseline for predicting 5' UTR activity from sequence alone, but since every training label came from a single temperature (30°C), it cannot yet predict how activity changes with temperature — the defining property of an RNA thermometer.",
    },
  ],

  problemStatement:
    "While toolkits like ViennaRNA can predict structure in RNA thermometers, there is a lack of tools that can predict an RNAt's biological activity (and as reported in ThermoRank, structural predictions can vary widely by 20°C-30°C). Experimental sequence-activity datasets exist for translational regulation, but they have not yet been applied to RNAt design and selection, and there are no existing tools that can predict biological activity from a sequence alone. ThermoCast is a proof-of-concept hybrid model built to address this gap, pairing existing RNA language models with thermodynamic data. By training on hundreds of thousands of 5' untranslated regions (UTRs), ThermoCast is meant to establish a baseline for sequence-activity prediction.",

  background:
    "The 5' UTR regulates how efficiently a transcript is translated, through a mix of sequence and thermodynamic mechanisms. Secondary structure near the cap can block loading of the 43S initiation complex, and structure near the start codon (AUG) can block recognition by the complex, but other non-structural features (i.e. Kozak context, other upstream start codons) can also play a part [ref1]. Cuperus et al. (2017) [ref2] demonstrated the scale of this complexity by assaying over 500,000 random 50-nucleotide 5' UTRs in S. cerevisiae (the same chassis used for MEYcell) using a growth-coupled HIS3 reporter, producing a sequence-activity dataset large enough to train models with.\n\nRNA language models can be used to navigate these large sequence spaces. Pretrained on large, unlabelled RNA datasets, these models produce sequence embeddings that encode structural and functional context learned without task-specific supervision. Several are available open-source: UTR-LM is pretrained on untranslated regions with translation-specific objectives, while UTR-LM-MRL, RNA-FM, SpliceBERT, and RNABERT are trained on broader RNA objectives [ref3][ref4][ref5][ref6][ref7]. Each of these models was systematically compared to better understand which could best support RNAt activity prediction.\n\nHowever, these models lack information on a critical RNAt property: folding energy at a specific temperature. Thermodynamic calculations from ViennaRNA [ref8], used in ThermoRank, supply this information. For this model, we combined both sources, supplying the model with learned sequence representations and thermodynamic features at 30°C, allowing a small network to learn their interaction. This design builds off of the surrogate-model approach used for ThermoRank by taking advantage of experimental data.",

  modelConstruction: [
    {
      blocks: [
        {
          type: "figure",
          caption:
            "Figure 1: Overview of the hybrid model pairing pretrained RNA language model embeddings with ViennaRNA thermodynamic features to predict 5' UTR biological activity.",
        },
        {
          type: "paragraph",
          text: "Experimental activity labels were taken from a random 5' UTR library assayed in S. cerevisiae (sample GSM2793752 under accession GSE104252) [ref2], where construct abundance before and after HIS3 selection yields a per-sequence growth rate. Sequence embeddings were generated using pretrained encoders accessed through the MultiMolecule library, which retrieves pretrained weights from HuggingFace [ref9]. Thermodynamic features were computed using ViennaRNA, similar to ThermoRank, providing base-pair probabilities and ensemble free energies via partition function. All sequences in the dataset are fixed at 50 nucleotides, and all folding calculations were performed at 30°C to match the growth conditions of the original assay.",
        },
        {
          type: "paragraph",
          text: "Constructs with fewer than 20 reads were filtered out, since growth rates estimated by few cells are often vulnerable to sampling noise, leaving approximately 398,000 sequences. Each sequence was passed through a frozen language model (once per model), and the final layer was mean-pooled across positions to yield one fixed-length vector per UTR. Since encoder weights are never updated, embeddings are computed once and cached, making encoder comparison quick and inexpensive.",
        },
        {
          type: "paragraph",
          text: "In parallel, each UTR was folded together with its downstream coding context to produce 5 thermodynamic features. The features were defined as follows:",
        },
        {
          type: "table",
          caption: "Table 1: Thermodynamic features computed for each 5' UTR",
          headers: ["Feature", "Definition"],
          rows: [
            ["Feature 1", "Definition pending"],
            ["Feature 2", "Definition pending"],
            ["Feature 3", "Definition pending"],
            ["Feature 4", "Definition pending"],
            ["Feature 5", "Definition pending"],
          ],
        },
        {
          type: "paragraph",
          text: "The two representations were concatenated and passed to a feed-forward network trained to predict z-scored growth rates under mean squared error loss. The concatenated input passes through 2 hidden layers of 256 and 64 units with ReLU activations and dropout of 0.1, ending in a single linear output. The network is intentionally small, as it was meant to model the interaction between the pre-trained encoder representations and explicit thermodynamic properties. After all 5 encoders were trained under identical conditions, they were ranked by Spearman correlation on a 15% training split.",
        },
      ],
    },
  ],

  results: [
    {
      type: "paragraph",
      text: "All 5 encoders were trained under identical conditions and evaluated on a held-out validation split of approximately 20,000 sequences. The results for each encoder are as follows:",
    },
    {
      type: "table",
      caption: "Table 2: Encoder performance on the held-out validation split",
      headers: ["Encoder", "Spearman ρ"],
      rows: [
        ["UTR-LM", "—"],
        ["UTR-LM-MRL", "—"],
        ["RNA-FM", "—"],
        ["SpliceBERT", "—"],
        ["RNABERT", "—"],
      ],
    },
    {
      type: "paragraph",
      text: "UTR-LM performed best, and the two smallest-dimensional encoders occupied opposite ends of the ranking, indicating that pretraining data and objectives are more important to performance than embedding capacity. RNABERT, at ρ = 0.296, performed no better than dG_whole alone in a linear model, with ρ = 0.29, indicating its embedding contributed almost nothing beyond the thermodynamic features it was paired with. UTR-LM doubled the thermodynamic baseline.",
    },
    {
      type: "paragraph",
      text: "Predicted-versus-measured plots show better-calibrated predictions through the centre of the activity distribution, with compression at both extremes: the model under-predicts the highest-activity sequences and over-predicts the lowest. Notably, training curves and generalization-gap comparison indicated that stronger encoders also trained longer before early stopping.",
    },
    {
      type: "figure",
      caption:
        "Figure 2: Predicted vs. measured z-scored growth rate for the best-performing encoder.",
    },
    {
      type: "figure",
      caption:
        "Figure 3: Training and validation loss curves showing the early-stopping point for each encoder.",
    },
    {
      type: "table",
      caption:
        "Table 3: Sample 5' UTR sequences with measured and predicted growth rates",
      headers: [
        "5' UTR Sequence",
        "Measured Growth Rate (z-score)",
        "Predicted Growth Rate (z-score)",
      ],
      rows: [
        ["Sequence 1", "—", "—"],
        ["Sequence 2", "—", "—"],
        ["Sequence 3", "—", "—"],
      ],
    },
  ],

  discussion: "",

  validation: "",

  limitationsNextSteps:
    "The largest limitation is that the model predicts activity at one temperature, 30°C, since every training label was at this temperature. It cannot predict how activity changes with temperature, which is the defining property of an RNAt. The model represents a starting point for RNAt prediction, but is not a complete predictor itself. As a next step, collecting data across a broader temperature range would enable a model that can predict a full temperature-response curve.\n\nAdditionally, the training distribution is quite narrow. All sequences are random 50-nucleotide 5' UTRs assayed in a single yeast construct, sharing a fixed downstream coding context. Practically, RNAt sequences differ in length, their structure is not random, and they are frequently longer than 50 nucleotides. Reported performance reflects accuracy on a narrow, well-measured range of sequences and is likely optimistic compared to the full library; training on a more diverse dataset would allow for more broadly applicable results.\n\nFinally, several methodological directions could be explored to enhance results. For example, each encoder was frozen throughout training, and fine-tuning was not attempted (only fine-tuning of the head) to preserve computational power. This could present a significant gain given the span observed across encoders. Mean-pooling discards positional information that may matter for structure near the cap and start codon; alternate methods such as attention pooling may preserve relevant positional information.",

  references: [
    {
      id: "ref1",
      title:
        "5' UTR translational control: Kozak context and upstream open reading frames",
      source: "Citation pending",
    },
    {
      id: "ref2",
      authors: "Cuperus, J. T., et al.",
      year: 2017,
      title: "Growth-coupled HIS3 5' UTR dataset in S. cerevisiae",
      source: "Citation pending",
    },
    {
      id: "ref3",
      title: "UTR-LM pretrained language model",
      source: "Citation pending",
    },
    {
      id: "ref4",
      title: "UTR-LM-MRL pretrained language model",
      source: "Citation pending",
    },
    {
      id: "ref5",
      title: "RNA-FM pretrained language model",
      source: "Citation pending",
    },
    {
      id: "ref6",
      title: "SpliceBERT pretrained language model",
      source: "Citation pending",
    },
    {
      id: "ref7",
      title: "RNABERT pretrained language model",
      source: "Citation pending",
    },
    {
      id: "ref8",
      authors: "Lorenz, R., Bernhart, S. H., Höner zu Siederdissen, C., et al.",
      year: 2011,
      title: "ViennaRNA Package 2.0",
      source: "Algorithms for Molecular Biology, 6, 26",
      url: "https://doi.org/10.1186/1748-7188-6-26",
    },
    {
      id: "ref9",
      title: "MultiMolecule library for pretrained RNA model weights",
      source: "Citation pending",
    },
  ],
};
