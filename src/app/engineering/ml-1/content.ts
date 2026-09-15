import type { ModelPageContent } from "@/types/wiki";

export const content: ModelPageContent = {
  summaryPoints: [
    {
      title: "Experimental Design",
      body: "Generated a mutant library from parent RNA thermometer sequences and evaluated them using a hybrid Deep Learning and Gaussian Process model to predict thermal activation properties.",
    },
    {
      title: "Key Findings",
      body: "The model accurately tracked large free-energy directional shifts and filtered out structural errors, producing a ranked list of top mutant candidates to melt at 37°C.",
    },
    {
      title: "Implications",
      body: "This model bypasses slow kinetic simulations and drastically narrows down the sequence search space, accelerating the design of precise thermal gene switches.",
    },
  ],

  problemStatement:
    "Despite the use of RNA thermometers in synthetic biology, existing literature lacks characterized RNAt sequences with a precise melting temperature of 37°C. Furthermore, standard computational biology toolsets rely on single-sequence kinetic simulations that scale poorly across large candidate libraries. There is a lack of predictive tools capable of screening landscapes that consist of single and double mutant libraries to isolate optimal sequence variants. To bridge this gap, we developed [Model Name], a hybrid Deep Learning and Gaussian Process model. By mapping nucleotide sequences directly to thermodynamic properties, [Model Name] rapidly screens thousands of candidates in silico, efficiently identifying novel RNAt variants optimized for 37°C activation.",

  background:
    'Currently, the design of RNAts with specific thermodynamic properties is challenging. The relationship between sequence, secondary structure, and function is complex; even small sequence changes can have larger functional effects. Sen et al. [ref1] demonstrated this by building a library of RNAts by changing sequences one base-pair at a time, finding a wide range of responses in the 29°C-37°C temperature range and fold changes varying over 3-fold from the starting RNAt. They found that systems-level computational predictions matched experimental trends, but could not correlate computational predictions with individual sequence-activity measurements; this highlights a gap in a computational-only approach to RNAt design.\n\nMachine learning presents an opportunity to close this gap; by training a surrogate model on a fitness landscape of sequence variants, it can be possible to quickly rank candidate sequences based on their thermoswitching efficiency, without needing slower, experimental characterization. A surrogate model design strategy has been previously applied to protein engineering, where a Gaussian Process (GP) was used to predict a relationship between protein sequence and thermostability [ref2]. Their GP-guided search produced enzymes that were more stable towards their use case than any other directed evolution strategies. We have adapted this approach to propose a proof-of-concept tool for RNAt design.\n\nTo generate the training fitness landscape, we used ViennaRNA, a widely used library that calculates RNA structure [ref3], to compute thermodynamic properties: minimum free energy (MFE) at 28°C and 37°C, partition function, and melting temperature. These calculations were applied to all single and double-mutant variants of already-characterized RNAt sequences from the literature. This fitness landscape was used as training data for a GP surrogate model, which was selected for its strong performance in low-data environments, its ability to provide uncertainty predictions for its estimates, and its relatively simpler interpretability compared to "black box" neural network approaches.',

  modelConstruction: [
    {
      blocks: [
        {
          type: "figure",
          caption:
            "Figure 1: Overview of the machine learning model for RNA thermometer optimization. The model evaluates a library of single and double mutants derived from a parent sequence against a trained thermodynamic dataset, outputting a ranked list of candidate variants to identify the most reliable sequence engineered to melt at 37°C.",
        },
        {
          type: "paragraph",
          text: "The computational framework integrates sequence-level machine learning with thermodynamic modeling tools. In silico thermodynamic labels were generated using the ViennaRNA Package, which calculated Minimum Free Energy (MFE) and melting temperature (Tm) values across all sequence variants. Note that it was assumed that all variants (including parent sequences) would be less than 100nts in length to ensure matrix dimensions were compatible throughout training. Deep learning architectures were constructed using the PyTorch and GPyTorch libraries, pairing a convolutional neural network encoder (SequenceEncoder) with a Multi-Task Gaussian Process (MultitaskGP) surrogate model to learn joint representations across multiple thermodynamic targets. Data preprocessing, feature normalization via standard scaling, and performance metrics were calculated using Scikit-Learn and NumPy. Finally, diagnostic scatter plots with Gaussian Process error bounds were created using Matplotlib to evaluate prediction quality and model calibration.\n\nThe model began with generating a library of RNA thermometer sequences that consists of single and double point mutants derived from parent RNA thermometer sequences, followed by computing their thermodynamic properties (MFE28, MFE37, Tm) in ViennaRNA. Next, raw RNA sequences were passed through the neural network encoder to compress high-dimensional sequence strings into low-dimensional embeddings. The Multi-Task Gaussian Process surrogate model was then trained using an 80/20 train/validation split and evaluated using Mean Absolute Error (MAE), Root Mean Squared Error (RMSE), and true-versus-predicted diagnostic plots. To assess out-of-distribution generalization, the trained model was externally validated against published experimental wet-lab datasets. Finally, all mutant candidates were ranked using a multi-objective composite fitness score to surface the most promising RNA thermometer variants for physical testing.",
        },
      ],
    },
  ],

  results:
    "The plots below display the accuracy of the model's predictions for MFE at 29.0°C and 37.0°C, as well as the melting temperatures for each augmented sequence. In these plots, the dashed red line represents the true parameter calculated using ViennaRNA, while blue points represent the model's predictions. From these plots, it is evident that the model can predict MFEs of novel RNAt sequences relatively well at both 29.0°C and 37.0°C, with root mean squared error (RMSE) of 1.03 and 0.93 respectively. The model is less fit for predicting melting temperatures, with a RMSE of 10.20 for its predictions, a high RMSE relative to the error associated with delta G predictions.\n\nBased on the initial RNAt sequence input, the variant sequence with the highest fitness score, and thus closest-to-optimal melting temperature, is AUGCAGGCCUGC with a fitness score of 0.00996, followed by AUGCAUGCCUGG, AUGCGUGCCUGC, AUGCAAGCCUGC, and AUGCAUGCCUAU, with fitness scores of 0.00989, 0.00943, 0.00938, and 0.00937 respectively.",
  resultsFigures: [
    "Figure 2: Predicted vs. true MFE at 29.0°C",
    "Figure 3: Predicted vs. true MFE at 37.0°C",
    "Figure 4: Predicted vs. true melting temperature (Tm)",
  ],

  discussion:
    "The model demonstrated its capability to evaluate a library of single- and double-point mutants derived from a parent scaffold. This eliminates the need for exhaustive wet-lab screening of unpromising sequence variants. The results confirm that the model effectively distinguishes between stable thermoswitching candidates and flawed variants. By accurately tracking the free energy difference (ΔΔG= MFE37-MFE28), the model quantifies the structural opening potential of each mutant, ensuring selected candidates exhibit a sharp activation response upon heating to 37°C. By isolating top-ranked variants that balance 28°C stability, 37°C switching potential, and target Tm proximity, the framework provides the project with feasible RNAt candidates for physical validation.",

  validation:
    "In addition to the 80/20 validation split during training, model performance was validated against published RNAt sequences with experimentally measured thermodynamic properties.\n\nThe first sequence came from a study by Tong et al. [ref4], describing the blyA gene in B. subtilis. The wild-type sequence and its stabilizing double mutant (UU4142CC) were scored using ViennaRNA calculations and our predictive model. Tong et al. reported an experimental ΔTm of +6.5°C between WT (69.4°C) and double mutant (75.9°C) sequences, indicating increased structural stability in the mutant. ViennaRNA correctly predicted the direction of the Tm shift (+1.0°C), but underestimated the magnitude, consistent with the library's known limitations on melting temperature. The GP surrogate model correctly predicted the direction of ΔΔG, identifying the mutant as more directionally stable, but failed to predict the correct direction of ΔTm (prediction a value of -21.6°C). This failure is consistent with the model's known limitations of its training data: most of the model's Tm distribution falls between 78°C-120°C, which is out of bounds of the WT's true Tm. The model's predicted Tm values, 177°C and 151°C for WT and mutant respectively, indicate that both sequences are beyond the model's current capacity.\n\nThe second sequence came from a study by Meyer et al. [ref5], analyzing the agsA hairpin in S. enterica. The WT sequence, as well as 2 stabilizing point mutations (G21C and A29C) were evaluated against experimentally measured fluorescence activity. Meyer et al. reported that WT produced the highest fluorescence, followed by G21C, and A29C (in other words, WT > G21C > A29C). ViennaRNA ΔΔG ranked the sequences as G21C > A29C > WT, failing to correctly identify WT as the best RNAt. The GP model ranked the sequences as G21C > WT > A29C, correctly identifying A29C as the poorest RNAt but still failing to rank WT above G21C. The small magnitude of ΔΔG differences between the WT and G21C variant (4.96 - 5.39 kcal/mol) may imply that the model's resolution is limited. Notably, A29C, which had an internal hairpin loop completely removed, was correctly identified as the least favourable variant by the predictive model, implying that the model may be able to identify large structural differences more reliably than smaller ones.\n\nAcross both cases, the model showed predictive validity for larger changes, but limited resolution for sequences outside its training distribution or subtle mutations. These results highlight the importance of expanding training data to include a more diverse range of sequences and incorporate experimentally measured values as training labels.",

  limitationsNextSteps:
    "The current model is limited by a small training dataset and relying on ViennaRNA as its ground truth. All training variants were single and double variants derived from four parent sequences, which likely led the model to learn patterns specific to those sequences, instead of developing a generalizable sequence-function relationship. All training sequences were less than 100nts in length; overall, this means that longer sequences, as well as sequences with unique structural features, would be difficult to predict.\n\nAdditionally, the model was only trained on computationally generated data from ViennaRNA. This means that the model has learned to predict ViennaRNA's outputs, instead of true in vivo thermosensor activity. We found there was a systematic discrepancy between ViennaRNA's Tm calculations and the experimental Tms reported in the literature (often incorrect by 20°C-30°C), limiting the model's ability to predict melting temperature accurately. ViennaRNA also predicts structure under simplified conditions, and does not account for in vivo protein interactions or ionic activity (i.e. Mg2+). As a result, the model predicts and ranks structural switching potential instead of true functional activity.\n\nTo mitigate these issues, next steps include using experimental labels instead of generated computational labels, similar to Romero et al. (2012); whether by generating experimental training data, or validating computational predictions with wet lab results. Amplifying the training dataset with more RNAt sequences and including a wider variety of structural features would help make the model more robust. Finally, with more time, incorporating other tools and features such as NUPACK (i.e. RBS accessibility) could help uncover more relationships between RNAt sequences and their in vivo activity.",

  // Placeholder entries so the [ref1]-[ref5] markers above have somewhere to
  // link. Swap in the real citation details when they're provided.
  references: [
    { id: "ref1", title: "Reference 1 - coming soon" },
    { id: "ref2", title: "Reference 2 - coming soon" },
    { id: "ref3", title: "Reference 3 - coming soon" },
    { id: "ref4", title: "Reference 4 - coming soon" },
    { id: "ref5", title: "Reference 5 - coming soon" },
  ],
};
