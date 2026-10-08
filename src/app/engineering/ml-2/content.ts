import type { ModelPageContent } from "@/types/wiki";

export const content: ModelPageContent = {
  summaryPoints: [
    {
      title: "Experimental Design",
      body: "A dataset of 5' UTRs was assayed in S. cerevisiae, outputting per-sequence translational activity scores. Five pretrained RNA language models were evaluated as frozen encoders, combined with ViennaRNA thermodynamic features and a feed-forward prediction head trained under identical conditions.",
    },
    {
      title: "Key Findings",
      body: "UTR-LM achieved the highest Spearman correlation (ρ = 0.588), doubling the thermodynamic-only baseline (ρ = 0.29). Pretraining domain outweighed model size as a predictor of performance. Notably, the largest encoder did worse than a model one-fifth its dimension.",
    },
    {
      title: "Implications",
      body: "Approximately half the predictive signal in translational activity comes from sequence features inaccessible to thermodynamic folding models alone. For RNAt design, this suggests that encoder selection is a more critical design choice than prediction head architecture.",
    },
  ],

  problemStatement:
    "While toolkits like ViennaRNA can predict structure in RNA thermometers, there is a lack of tools that can predict an RNAt's biological activity (and as reported in ThermoRank, structural predictions can vary widely by 20°C-30°C). Experimental sequence-activity datasets exist for translational regulation, but they have not yet been applied to RNAt design and selection, and there are no existing tools that can predict biological activity from a sequence alone. ThermoCast is a proof-of-concept hybrid model built to address this gap, pairing existing RNA language models with thermodynamic data. By training on hundreds of thousands of 5' untranslated regions (UTRs), ThermoCast is meant to establish a baseline for sequence-activity prediction.",

  background:
    "The 5' UTR regulates how efficiently a transcript is translated, through a mix of sequence and thermodynamic mechanisms. Secondary structure near the cap can block loading of the 43S initiation complex, and structure near the start codon (AUG) can block recognition by the complex, but other non-structural features (i.e. Kozak context, other upstream start codons) can also play a part [ref1]. Cuperus et al. (2017) [ref2] demonstrated the scale of this complexity by assaying over 500,000 random 50-nucleotide 5' UTRs in S. cerevisiae (the same chassis used for MEYcell) using a growth-coupled HIS3 reporter, producing a sequence-activity dataset large enough to train models with.\n\nRNA language models can be used to navigate these large sequence spaces. Pretrained on large, unlabelled RNA datasets, these models produce sequence embeddings that encode structural and functional context learned without task-specific supervision. Several are available open-source: UTR-LM is pretrained on untranslated regions with translation-specific objectives, while UTR-LM-MRL, RNA-FM, SpliceBERT, and RNABERT are trained on broader RNA objectives [ref3]. Each model was systematically compared to better understand which could best support RNAt activity prediction.\n\nHowever, these models lack information on a critical RNAt property: folding energy at a specific temperature. Thermodynamic calculations from ViennaRNA [ref4], used in ThermoRank, supply this information. For this model, we combined both sources, supplying the model with learned sequence representations and thermodynamic features at 30°C, allowing a small network to learn their interaction. This design builds off of the surrogate-model approach used for ThermoRank by taking advantage of experimental data.",

  modelConstruction: [
    {
      blocks: [
        {
          type: "figure",
          caption:
            "Figure 1: Overview of the hybrid model pairing pretrained RNA language model embeddings with ViennaRNA thermodynamic features to predict 5' UTR biological activity. The model evaluates an individual RNAt's sequence through a prediction head built on a pre-trained RNA encoder and additional thermodynamic features, outputting an activity prediction score.",
          src: "/engineering/ml2_abstract.png",
          width: 2000,
          height: 1414,
        },
        {
          type: "paragraph",
          text: "Experimental activity labels were taken from a random 5' UTR library assayed in S. cerevisiae (sample GSM2793752 under accession GSE104252) [ref2], where construct abundance before and after HIS3 selection yields a per-sequence growth rate. Sequence embeddings were generated using pretrained encoders accessed through the MultiMolecule library, which retrieves pretrained weights from HuggingFace [ref5]. Thermodynamic features were computed using ViennaRNA, similar to ThermoRank, providing base-pair probabilities and ensemble free energies via partition function. All sequences in the dataset were fixed at 50 nucleotides, and all folding calculations were performed at 30°C to match the growth conditions of the original assay.",
        },
        {
          type: "paragraph",
          text: "Constructs with fewer than 20 reads were filtered out, since growth rates estimated by only a few cells are often vulnerable to sampling noise, leaving approximately 398,000 sequences. Each sequence was passed through a frozen language model (once per model), and the final layer was mean-pooled across positions to yield one fixed-length vector per UTR. Since encoder weights were never updated, each embedding was computed once and cached, making encoder comparison quick and inexpensive.",
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
            [
              "p_unpaired_kozak",
              "Average chance that each base in the Kozak window is unpaired. The window runs from position −6 to +4 relative to the A of the AUG start codon. Computed from the base-pair probabilities of the UTR + coding context fold.",
            ],
            [
              "p_unpaired_cap",
              "Average chance that each base is unpaired over the first 15 nt at the 5' end, where the 43S ribosomal complex loads. Computed from the UTR + coding context fold.",
            ],
            [
              "p_unpaired_utr",
              "Average chance that each base is unpaired across the whole 5' UTR. Computed from the UTR + coding context fold.",
            ],
            [
              "dG_utr",
              "Ensemble free energy (kcal/mol) of the 5' UTR folded on its own, without coding context.",
            ],
            [
              "dG_whole",
              "Ensemble free energy (kcal/mol) of the 5' UTR together with its downstream coding context.",
            ],
          ],
        },
        {
          type: "paragraph",
          text: "The two representations were concatenated and passed to a feed-forward network trained to predict z-scored growth rates under mean squared error loss. The concatenated input passed through 2 hidden layers of 256 and 64 units with ReLU activations and dropout of 0.1, ending in a single linear output. The network was intentionally small, as it was meant to model the interaction between the pre-trained encoder representations and explicit thermodynamic properties. After all 5 encoders were trained under identical conditions, they were ranked by Spearman correlation on a 15% training split.",
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
      caption:
        "Table 2: Encoder comparison summary (columns sorted by test Spearman rho)",
      headers: [
        "Metric",
        "UTR-LM",
        "RNA-FM",
        "UTR-LM-MRL",
        "SpliceBERT",
        "RNABERT",
      ],
      rows: [
        ["Embedding Dim", "128", "640", "128", "512", "120"],
        ["Hidden Dims", "256x64", "256x64", "256x64", "256x64", "256x64"],
        ["Dropout", "0.1", "0.1", "0.1", "0.1", "0.1"],
        ["Best Epoch", "49", "22", "35", "32", "11"],
        ["Val MSE", "0.6882", "0.7773", "0.7842", "0.7919", "0.8981"],
        ["Val rho", "0.5564", "0.4681", "0.4590", "0.4529", "0.3150"],
        ["Test MSE", "0.5194", "0.5996", "0.6122", "0.6227", "0.7293"],
        ["Test rho", "0.5882", "0.4913", "0.4675", "0.4609", "0.2960"],
        ["Test Pearson r", "0.6008", "0.5031", "0.4843", "0.4738", "0.3065"],
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
      type: "figure-grid",
      caption:
        "Figure 2: Predicted vs. measured z-scored growth rate on the test split, for each of the 5 encoders.",
      panels: [
        {
          label: "a",
          caption: "UTR-LM (rho = +0.588, MSE = 0.519)",
          src: "/engineering/ml2_pred_vs_measured_utrlm.png",
          width: 780,
          height: 750,
        },
        {
          label: "b",
          caption: "RNA-FM (rho = +0.491, MSE = 0.600)",
          src: "/engineering/ml2_pred_vs_measured_rnafm.png",
          width: 780,
          height: 750,
        },
        {
          label: "c",
          caption: "UTR-LM-MRL (rho = +0.468, MSE = 0.612)",
          src: "/engineering/ml2_pred_vs_measured_utrlm_mrl.png",
          width: 780,
          height: 750,
        },
        {
          label: "d",
          caption: "SpliceBERT (rho = +0.461, MSE = 0.623)",
          src: "/engineering/ml2_pred_vs_measured_splicebert.png",
          width: 780,
          height: 750,
        },
        {
          label: "e",
          caption: "RNABERT (rho = +0.296, MSE = 0.729)",
          src: "/engineering/ml2_pred_vs_measured_rnabert.png",
          width: 780,
          height: 750,
        },
      ],
    },
    {
      type: "figure",
      caption:
        "Figure 3: Sample thermodynamic profile output of ThermoCast tool.",
      src: "/engineering/ml2_thermodynamic_profile.png",
      width: 2475,
      height: 705,
    },
  ],

  discussion:
    "This work shows that translational activity of a 5' UTR can be predicted from a sequence to a Spearman correlation of 0.588 using experimental labels, without further fine-tuning of encoder weights. The margin over the thermodynamic baseline (0.29) is important to note, meaning that roughly half the achieved predicted signal comes from sequence features that folding calculations cannot singlehandedly capture. This establishes a quantifiable ceiling of a model trained exclusively on thermodynamic predictions, and indicates that a substantial fraction of regulatory information is inaccessible to computational models regardless of surrogate model quality.\n\nThe encoder comparison yields a practical finding: pretraining domain, not model size, determined performance. UTR-specific pretraining outperformed general RNA pretraining by a considerable margin, and the largest encoder ranked second to a model one-fifth its dimension. For RNAt applications, this suggests that encoder selection warrants more attention than refinement of the prediction head.\n\nUltimately, this model represents a hybrid of two unique functionalities. A thermodynamically-trained model can only screen mutant libraries rapidly and rank structural switching potential, while an activity-based model can only work at one specific temperature. This model lays the groundwork for a model trained on experimental labels that can work across various temperatures.",

  validation: "",

  limitationsNextSteps:
    "The largest limitation is that the model predicts activity at one temperature, 30°C, since every training label was at this temperature. It cannot predict how activity changes with temperature, which is the defining property of an RNAt. The model represents a starting point for RNAt prediction, but is not a complete predictor itself. As a next step, collecting data across a broader temperature range would enable a model that can predict a full temperature-response curve.\n\nAdditionally, the training distribution is quite narrow. All sequences are random 50-nucleotide 5' UTRs assayed in a single yeast construct, sharing a fixed downstream coding context. Practically, RNAt sequences differ in length, their structure is not random, and they are frequently longer than 50 nucleotides. Reported performance reflects accuracy on a narrow, well-measured range of sequences and is likely optimistic compared to the full library; training on a more diverse dataset would allow for more broadly applicable results.\n\nFinally, several methodological directions could be explored to enhance results. For example, each encoder was frozen throughout training, and fine-tuning was not attempted (only fine-tuning of the head) to preserve computational power. This could present a significant gain given the span observed across encoders. Mean-pooling discards positional information that may matter for structure near the cap and start codon; alternate methods such as attention pooling may preserve relevant positional information.",

  references: [
    {
      id: "ref1",
      authors: "Hinnebusch, A. G.",
      year: 2011,
      title:
        "Molecular mechanism of scanning and start codon selection in eukaryotes",
      source: "Microbiology and Molecular Biology Reviews, 75(3), 434–467",
      url: "https://doi.org/10.1128/mmbr.00008-11",
    },
    {
      id: "ref2",
      authors:
        "Cuperus, J. T., Groves, B., Kuchina, A., Rosenberg, A. B., Jojic, N., Fields, S., & Seelig, G.",
      year: 2017,
      title:
        "Deep learning of the regulatory grammar of yeast 5' untranslated regions from 500,000 random sequences",
      source: "Genome Research, 27(12), 2015–2024",
      url: "https://doi.org/10.1101/gr.224964.117",
    },
    {
      id: "ref3",
      authors: "Chen, Z., & Zhu, S. Y.",
      year: 2024,
      title:
        "UTR-LM, UTR-LM-MRL, RNA-FM, SpliceBERT, and RNABERT (via MultiMolecule)",
      source: "Zenodo",
      url: "https://doi.org/10.5281/zenodo.12638419",
    },
    {
      id: "ref4",
      authors: "Lorenz, R., Bernhart, S. H., Höner zu Siederdissen, C., et al.",
      year: 2011,
      title: "ViennaRNA Package 2.0",
      source: "Algorithms for Molecular Biology, 6, 26",
      url: "https://doi.org/10.1186/1748-7188-6-26",
    },
    {
      id: "ref5",
      authors: "Chen, Z.",
      year: 2026,
      title:
        "MultiMolecule: A modular ecosystem for biomolecular sequence-model workflows",
      source: "arxiv.org",
      url: "https://arxiv.org/html/2606.16540v1",
    },
  ],
};
