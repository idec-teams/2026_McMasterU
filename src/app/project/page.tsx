import { Banner } from "@/components/wiki/Banner";
import { ReferencesSection } from "@/components/wiki/ReferencesSection";
import { WikiPage } from "@/components/wiki/WikiPage";
import { WikiSection } from "@/components/wiki/WikiSection";
import { createCitations } from "@/lib/wiki/citations";

export const metadata = {
  title: "Project — MEYcell",
};

// Example references — replace with real sources as the content is written.
const { Cite, references } = createCitations([
  {
    id: "koch2019",
    authors: "Koch, B. et al.",
    title:
      "Metabolic engineering of Saccharomyces cerevisiae for lipid overproduction",
    source: "Metabolic Engineering",
    year: 2019,
    url: "https://example.org/koch-2019",
  },
  {
    id: "post2020",
    authors: "Post, M. J. et al.",
    title:
      "Scientific, sustainability and regulatory challenges of cultured meat",
    source: "Nature Food",
    year: 2020,
    url: "https://example.org/post-2020",
  },
  {
    id: "gaikwad2021",
    authors: "Gaikwad, S. et al.",
    title: 
    "Reprogramming of translation in yeast cells impaired for ribosome recycling favors short, efficiently translated mRNAs",
    source: "eLife",
    year: 2021,
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7993997/",
  },
  {
    id: "tang2015",
    authors: "Tang, X. et al.",
    title: "Engineering the fatty acid metabolic pathway in Saccharomyces cerevisiae for advanced biofuel production",
    source: "Metabolic Engineering Communications",
    year: 2015,
    url: "https://doi.org/10.1016/j.meteno.2015.06.005",
  },
  {id: "ferreira2018",
    authors: "Ferreira, R. et al.",
    title: "Metabolic engineering of Saccharomyces cerevisiae for overproduction of triacylglycerols",
    source: "Metabolic Engineering Communications",
    year: 2018,
    url: "https://doi.org/10.1016/j.meteno.2018.01.002",
  },
  {id: "shi2014",
    authors: "Shi, S. et al.",
    title: "Improving Production of Malonyl Coenzyme A-Derived Metabolites by Abolishing Snf1-Dependent Regulation of Acc1",
    source: "mBio",
    year: 2014,
    url: "https://doi.org/10.1128/mBio.01130-14",
  },

  {id: "campanella2025",
    authors: "Campanella, J.E. et al.",
    title: "Fungal Δ9-fatty acid desaturase: A unique enzyme at the core of lipid metabolism in aspergillus fumigatus and a promising target for the search for antifungal strategies",
    source: "mBio",
    year: 2025,
    url: "https://journals.asm.org/doi/10.1128/mbio.00803-24"
  },

  {id: "jiang2021",
    authors: "Jiang, W. et al.",
    title: "Metabolic engineering strategies for improved lipid production and cellular physiological responses in yeast cells impaired for ribosome recycling favors short, efficiently translated mRNAs",
    source: "Journal of Fungi",
    year: 2021,
    url: "https://www.mdpi.com/2309-608X/8/5/427"
  },

  {
    id: "jolley2022",
    authors: "Jolley, E. et al.",
    title: "Upstream flanking sequence assists folding of an RNA thermometer",
    source: "PubMed Central",
    year: 2022,
    url: "https://www.sciencedirect.com/science/article/pii/S0022283622003941?via%3Dihub"
  },

  {
    id: "lass2011",
    authors: "Lass, A. et al.",
    title: "Lipolysis – a highly regulated multi-enzyme complex mediates the catabolism of cellular fat stores",
    source: "Progress in Lipid Research",
    year: 2011,
    url: "https://www.sciencedirect.com/science/article/pii/S0163782710000524?via%3Dihub"
  },

  {
    id: "oelkers2002",
    authors: "Oelkers, P. et al.",
    title: "The DGA1 gene determines a second triglyceride synthetic pathway in yeast",
    source: "Journal of Biological Chemistry",
    year: 2002,
    url: "https://www.sciencedirect.com/science/article/pii/S0021925819362465?via%3Dihub"
  },

  {
    id: "petitjean2015",
    authors: "Petitjean, M. et al.",
    title: "Yeast tolerance to various stresses relies on the Trehalose-6P synthase (Tps1) protein, not on trehalose",
    source: "Journal of Biological Chemistry",
    year: 2015,
    url: "https://www.sciencedirect.com/science/article/pii/S0021925820584469?via%3Dihub",
  },

  {
    id: "robmanith2016",
    authors: "Robmanith, J. et al.",
    title: "Exploring the modular nature of riboswitches and RNA thermometers.",
    source: "Nucleic Acids Research",
    year: 2016,
    url: "https://academic.oup.com/nar/article/44/11/5410/2468302"
  },

  {
    id: "waldminghaus2008",
    authors: "Waldminghaus, T. et al.",
    title: "Generation of synthetic RNA-based thermosensors.",
    source: "Bchm",
    year: 2008,
    url: "https://www.degruyterbrill.com/document/doi/10.1515/BC.2008.150/html"
  },

  {
    id: "wang2017",
    authors: "Wang, H. et al.",
    title: "How lipid droplets “TAG” along: Glycerolipid synthetic enzymes and lipid storage",
    source: "Biochimica et Biophysica Acta. Molecular and Cell Biology of Lipids",
    year: 2017,
    url: "https://www.sciencedirect.com/science/article/pii/S1388198117301142?via%3Dihub"
  },

  {
    id: "wang2024",
    authors: "Wang, Z. et al.",
    title: "Key enzymes involved in the utilization of fatty acids by saccharomyces cerevisiae: A review.",
    source: "Frontiers in Microbiology",
    year: 2024,
    url: "https://www.frontiersin.org/journals/microbiology/articles/10.3389/fmicb.2023.1294182/full"
  },

  {
    id: "shimizu1994",
    authors: "Shimizu, J. et al.",
    title: "The hypo-osmolarity-sensitive phenotype of the Saccharomyces cerevisiae hpo2 mutant is due to a mutation in PKC1, which regulates expression of β-glucanase.",
    source: "Molecular and General Genetics",
    year: 1994,
    url: "https://doi.org/10.1007/BF00283417"
  },

  {
    id: "siri-tarino2010",
    authors: "Siri-Tarino, P.W. et al.",
    title: "Saturated Fatty Acids and Risk of Coronary Heart Disease: Modulation by Replacement Nutrients.",
    source: "Current Atherosclerosis Reports",
    year: 2010,
    url: "https://doi.org/10.1007/s11883-010-0131-6"
  },

  {
    id: "zhao2025",
    authors: "Zhao, P. et al.",
    title: "Optimizing fatty acids composition in meat-like tissue derived from myogenic conversion of pig fibroblasts. ",
    source: "Communications Biology",
    year: 2025,
    url: "https://doi.org/10.1038/s42003-025-08574-y"
  },

  {
    id: "soto1999",
    authors: "Soto, T. et al.",
    title: "Accumulation of Trehalose by Overexpression of tps1, Coding for Trehalose-6-Phosphate Synthase, Causes Increased Resistance to Multiple Stresses in the Fission  Yeast Schizosaccharomyces pombe.",
    source: "Applied and Environmental Microbiology",
    year: 1999,
    url: "https://doi.org/10.1128/aem.65.5.2020-2024.1999"
  },

  {
    id: "tiannd",
    authors: "Tian, C. et al.",
    title: "Benchmarking Intrinsic Promoters and Terminators for Plant Synthetic Biology Research.",
    source: "Biodesign Research",
    year: 0,
    url: "https://doi.org/10.34133/2022/9834989"
  },

  {
    id: "decoene2019",
    authors: "Decoene, T. et al.",
    title: "Modulating transcription through development of semi-synthetic yeast core promoters.",
    source: "PLOS ONE",
    year: 2019,
    url: "https://doi.org/10.1371/journal.pone.0224476"
  },

  {
    id: "murshid2018",
    authors: "Murshid, A. et al.",
    title: "Role of Heat Shock Factors in Stress-Induced Transcription.",
    source: "Methods in Molecular Biology",
    year: 2018,
    url: "https://doi.org/10.1007/978-1-4939-7477-1_2"
  },

  {
    id: "stukey2025",
    authors: "Stukey, G. et al.",
    title: "Active site determinants of yeast Pah1 phosphatidate phosphatase activity and cellular functions. ",
    source: "Journal of Biological Chemistry",
    year: 2025,
    url: "https://doi.org/10.1016/j.jbc.2025.110492"
  },

  {
    id: "shin2012",
    authors: "Shin, G.H. et al.",
    title: "Overexpression of genes of the fatty acid biosynthetic pathway leads to accumulation of sterols in Saccharomyces cerevisiae.",
    source: "Yeast",
    year: 2012,
    url: " https://doi.org/10.1002/yea.2916"
  },

  {
    id: "rostron_lawrence_2017",
    authors: "Rostron, K. and Lawrence, C.",
    title: "Nile Red Staining of Neutral Lipids in Yeast",
    source: "Methods in Molecular Biology",
    year: 2017,
    url: "https://link.springer.com/protocol/10.1007/978-1-4939-6788-9_16"
  },

  {
    id: "sitepu2012",
    authors: "Sitepu, I.R. et al.",
    title: "An improved high-throughput Nile red fluorescence assay for estimating intracellular lipids in a variety of yeast species",
    source: "Journal of Microbiological Methods",
    year: 2012,
    url: "https://www.sciencedirect.com/science/article/pii/S0167701212002795"
  },

  {
    id: "castrillon2021",
    authors: "Ramirez-Castrillon et al.",
    title: "Nile Red Incubation Time Before Reading Fluorescence Greatly Influences the Yeast Neutral Lipids Quantification",
    source: "Frontiers Microbiotechnology",
    year: 2021,
    url: "https://www.frontiersin.org/journals/microbiology/articles/10.3389/fmicb.2021.619313/full"
  },

  {
    id: "kamisaka2007",
    authors: "Kamisaka et al.",
    title: "DGA1 (diacylglycerol acyltransferase gene) overexpression and leucine biosynthesis significantly increase lipid accumulation in the Δsnf2 disruptant of Saccharomyces cerevisiae",
    source: "Biochemical Journal",
    year: 2007,
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2049070/"
  },

  {
    id: "genicot2005",
    authors: "Genicot et al.",
    title: "The use of a fluorescent dye, Nile red, to evaluate the lipid content of single mammalian oocytes",
    source: "Theriogenology",
    year: 2005,
    url: "https://www.sciencedirect.com/science/article/pii/S0093691X0400189X?via%3Dihub"
  },

  {
    id: "igem",
    authors: "iGEM",
    title: "Registry of Standard Biological Parts",
    source: "iGEM",
    year: 2026,
    url: "https://registry.igem.org/distribution"
  },

  {
    id: "froger2007",
    authors: "Froger and Hall",
    title: "Transformation of Plasmid DNA into E. coli Using the Heat Shock Method",
    source: "Journal of Visualized Experiments",
    year: 2007,
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2557105/"
  },

  {
    id: "rahimzadeh2016",
    authors: "Rahimzadeh et al.",
    title: " Impact of heat shock step on bacterial transformation efficiency",
    source: "Molecular Biology Research Communications",
    year: 2016,
    url: "https://pubmed.ncbi.nlm.nih.gov/28261629/"
  },

  {
    id: "li2017",
    authors: "Li et al.",
    title: "Nucleotides upstream of the Kozak sequence strong influence gene expression in the yeast S. cerevisiae",
    source: "Journal of Biological Engineering",
    year: 2017,
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5563945/"
  },

  {
    id: "zhang2001",
    authors: "Zhang, W and Chen, S",
    title: "RNA hairpin-folding kinetics",
    source: "PNAS",
    year: "2001",
    url: "https://www.pnas.org/doi/10.1073/pnas.032443099"
  }
]);

export default function ProjectPage() {
  return (
    <>
      <Banner title="Project" src="/banners/project.png">
        <p>
          Background, design rationale, and results for MEYcell — an engineered
          yeast that delivers animal-identical fat to the next generation of
          alternative protein.
        </p>
      </Banner>

      <WikiPage>
        <WikiSection id="overview" title="Overview">
          <p>
            MEYcell is an engineered strain of <em>Saccharomyces cerevisiae</em>{" "}
            that accumulates intracellular triglycerides identical to animal fat
            <Cite id="koch2019" />, then releases them at cooking temperature to
            restore the marbling that alternative proteins lack.
          </p>
        </WikiSection>

        <WikiSection id="background" title="Background">
          <p>
            Cultivated and plant-based meats still taste lean because they carry
            almost no intramuscular fat, the main driver of flavor and juiciness
            <Cite id="post2020" />. MEYcell targets that gap directly. Full
            content coming soon.
          </p>

           <h4 className="mt-4 text-lg text-foreground font-medium">Key Pathways</h4>
          <p className="text-sm text-muted-foreground">
            Describe the metabolic pathways targeted for triglyceride
            accumulation (e.g., acetyl-CoA flux, fatty acid synthase regulation,
            TAG assembly enzymes). Include pathway diagrams or references as
            needed.
          </p>

          <p>
            S. cerevisiae produces and stores triacylglycerols (TAGs) through the native de novo fatty acid biosynthesis pathway <Cite id="tang2015" />. 
            This pathway begins with the conversion of acetyl-CoA into malonyl-CoA by acetyl-CoA carboxylase <Cite id="ferreira2018" />. 
            This is the rate-limiting step for fatty acid synthesis, as ACC1 is tightly regulated by Snf1 phosphorylation, 
            which maintains low intracellular concentrations of malonyl-CoA. Acetyl-CoA and malonyl-CoA then feed into the 
            fatty acid synthase (FAS) complex, encoded by FAS1 and FAS2, where malonyl-CoA is used as a substrate for the elongation of 
            acyl chains to produce fatty acyl-CoA <Cite id="ferreira2018" />. 

          </p>

          <p>
            Fatty acyl-CoAs are then directed toward TAG formation, which consists of a glycerol backbone esterified to three fatty acid chains <Cite id="ferreira2018" />. This begins with the acylation of glycerol-3-phosphate (Gro-3-P) with two acyl chains by GPAT and LPAT, producing phosphatidic acid (PA). PA is then dephosphorylated by phosphatidic acid phosphohydrolase (Pah1) to diacylglycerol (DAG), and a final acylation by diacylglycerol acyltransferase (DGA1) converts this into TAG. TAGs are then stored as lipid droplets (LDs) alongside sterol esters. 

          </p>

          <h5 className="mt-4 font-medium text-foreground">Competing Pathways</h5>

          <p>
            There are several native pathways that compete with TAG accumulation, either diverting carbon away from TAG synthesis or promoting the breakdown of stored lipids. To maximize lipid accumulation, we needed to downregulate or delete each of these pathways.
          </p>

          <p>
            Firstly, glycerol can be lost as Gro-3-P is oxidized back into dihydroxyacetone phosphate (DHAP) for glycolysis rather than being used for TAG synthesis <Cite id="ferreira2018" />. This reaction is catalyzed by Gut2, encoded by GUT2, so we deleted GUT2 to prevent the diversion of this precursor. 
          </p>

          <p>
            The peroxisomal β-oxidation pathway degrades acyl-CoA back into acetyl-CoA, allowing fatty acid stores to be used for energy <Cite id="ferreira2018" />. The first step of this pathway is encoded by POX1, while PXA1 encodes a subunit of the peroxisomal fatty acyl-CoA transporter. FAA2 also encodes a peroxisomal acyl-CoA synthetase required to activate free fatty acids for β-oxidation. Through the deletion of these genes, we aimed to increase the pool of acyl-CoA-derived compounds available for TAG synthesis, increasing overall TAG levels. 
          </p>

          <p>
            Finally, TGL3, TGL4, and TGL5 encode lipases that cleave acyl chains from TAGs to release stored fat as free fatty acids during growth phases <Cite id="ferreira2018" />. To prevent this, we deleted these genes so that TAGs remained locked within lipid droplets rather than being mobilized and depleting over time. 
          </p>


          <h4 className="mt-4 text-lg text-foreground font-medium">Key Mechanisms</h4>
          <h5 className="mt-4 font-medium text-foreground">Fatty Acid De Novo Biosynthesis</h5>
          <p>
            Saccharomyces cerevisiae synthesizes fatty acids through the de novo fatty acid biosynthesis
pathway, which converts acetyl-CoA into fatty acids that can then be incorporated into cellular
and storage lipids <Cite id="jiang2021"/>. The pathway starts with the conversion of acetyl-CoA to malonyl-CoA by
acetyl-CoA carboxylase (ACC1) <Cite id="tang2015"/>. Malonyl-CoA is the primary building block for fatty acid
synthesis, making ACC1 an important regulatory point for controlling metabolic flux through the
pathway. In S. cerevisiae, ACC1 is normally regulated by the Snf1 protein kinase, which limits
ACC1 activity and maintains relatively low malonyl-CoA levels under standard conditions.
            </p>

          <p>
            Following fatty acid synthesis, fatty acids can be incorporated into membrane lipids or
converted into neutral storage lipids. Triacylglycerols (TAGs) are composed of three fatty acid
chains esterified to a glycerol backbone and are stored within lipid droplets. Diacylglycerol
acyltransferase, encoded by DGA1, catalyzes the final step of acyl-CoA-dependent TAG synthesis
by transferring a fatty acyl group to diacylglycerol (DAG) <Cite id="oelkers2002" />. This allows newly synthesized fatty
acids to be converted into TAGs and stored within lipid droplets.
            </p>
          
          <p>
            The fatty acid composition of TAGs can also be modified through desaturation <Cite id="campanella2025" />. OLE1 encodes a
Δ9 fatty acid desaturase located in the endoplasmic reticulum membrane. It introduces a
double bond into saturated fatty acyl-CoA molecules, producing monounsaturated fatty acids
such as oleate. S. cerevisiae naturally produces predominantly monounsaturated fatty acids,
with oleic acid (C18:1) and palmitoleic acid (C16:1) being its major fatty acids.
            </p>

          <h5 className="mt-4 font-medium text-foreground">Redirecting Lipid Flux</h5>
          <p>
            Lipid accumulation depends not only on increasing fatty acid and TAG synthesis, but also on
limiting pathways that divert or degrade these molecules <Cite id="wang2017" />. Glycerol metabolism can have competing routes for cellular carbon, while ARE1 contributes to the creation of sterol esters,
another class of neutral lipid stored in lipid droplets. Reducing these competing pathways can
increase the proportion of available lipid precursors directed toward TAG production.
          </p>

          <p>
            Fatty acids stored within the cell can also be broken down through β-oxidation, a pathway that
degrades fatty acids to generate acetyl-CoA and energy <Cite id="wang2024" />. In S. cerevisiae, fatty acid transport and
oxidation involve proteins including Pxa1 and Pox1, while additional enzymes participate in fatty
acid mobilization. Preventing this pathway reduces the consumption of newly synthesized fatty
acids and allows more of them to remain available for storage as TAGs <Cite id="tang2015" />.
          </p>

          <p>
            TAGs stored in lipid droplets are also continuously regulated through lipolysis <Cite id="lass2011" />. Lipases such as
Tgl3, Tgl4, and Tgl5 hydrolyze TAGs, releasing fatty acids that can be reused or metabolized by
the cell. Therefore, lipid accumulation reflects a balance between fatty acid synthesis, TAG
formation, and TAG degradation. Limiting TAG mobilization can promote the retention of lipids
within lipid droplets during growth.
          </p>

          <h5 className="mt-4 font-medium text-foreground">Cellular Stress Protection</h5>
          <p>
            Cellular stress tolerance is important for maintaining yeast viability during downstream
processing <Cite id="petitjean2015" />. Trehalose is a storage carbohydrate that accumulates under stressful conditions and
helps protect cells from environmental stresses such as heat, freezing, dehydration, and
oxidative stress. TPS1 encodes trehalose-6-phosphate synthase, an enzyme involved in
trehalose synthesis. Increasing trehalose production can therefore improve cellular resilience
during processing conditions.
          </p>

          <p>
            Together, these pathways determine how carbon is distributed between fatty acid synthesis,
lipid storage, competing metabolic processes, and cellular maintenance. Understanding this
balance provides the basis for engineering S. cerevisiae toward increased TAG accumulation and
controlled lipid storage.
          </p>

          <h4 className="mt-4 text-lg text-foreground font-medium">RNA Thermometer</h4>

          <p>
            RNA thermometers (RNAt) are temperature-responsive RNA structures that regulate gene
expression through changes in RNA secondary structure <Cite id="robmanith2016" />. They are commonly located within the
5′ untranslated region (5′ UTR) of mRNA, where they can control access to sequences required
for translation initiation.
          </p>

          <p>
            At lower temperatures, RNAt can form a stable hairpin structure that prevents efficient
translation <Cite id="jolley2022" />. As temperature increases, the RNA structure becomes less stable and begins to
unfold, exposing the translation initiation region and allowing protein production to increase.
The temperature at which this structural transition occurs depends on properties such as the
stem, loop, and base-pairing interactions within the RNA structure.
          </p>

          <p>
            The ability of synthetic RNAt to regulate translation has been experimentally demonstrated in
Escherichia coli. Researchers designed small synthetic RNA thermometers within the
5′ UTR of a reporter gene and demonstrated temperature-dependent gene expression <Cite id="waldminghaus2008" />. Their
thermometers functioned through the melting of a stem-loop structure that initially masked the
ribosome-binding site, with increased temperature allowing translation to occur. This
demonstrated that a relatively small RNA structure can act as a temperature-responsive genetic
switch without requiring an additional regulatory protein.
          </p>

          <p>
            Since S. cerevisiae is a eukaryote, translation initiation differs from bacterial systems. Yeast
ribosomes bind to the mRNA's 5′ cap and scan along the 5′ UTR until they reach the start codon,
where the surrounding Kozak sequence influences translation efficiency <Cite id="gaikwad2021"/>. Although the bacterial
RNAt systems described above rely on masking the Shine-Dalgarno ribosome-binding site, the
underlying principle of using temperature-dependent RNA folding to regulate accessibility of the
translation initiation region can potentially be adapted to yeast.
          </p>

          <p>
            To our knowledge, synthetic RNAt systems of this type have not previously been demonstrated
for temperature-controlled translation in S. cerevisiae. However, the temperature-dependent
folding mechanism does not inherently require a bacterial-specific regulatory protein; it relies
on the physical properties of RNA structure. This provides a rationale for testing whether an
appropriately designed 5′ UTR can similarly regulate translation in yeast. Our wet-lab
experiments will therefore be important for validating whether the predicted temperature
response translates into functional protein expression in the S. cerevisiae system.
          </p>

          <p>
           In this project, the RNAt is placed in the 5′ UTR of BGL2, which encodes a cell-wall degrading
enzyme. At standard growth temperatures, the RNAt is expected to remain relatively closed and
limit BGL2 translation. By inserting an RNAT into the 5′ UTR of BGL2, its translation becomes
heat-dependent, creating a straightforward switch for thermal cell lysis and lipid extraction 
          </p>

          <h5 className="mt-4 font-medium text-foreground">Kozak Sequences</h5>

          <p> 
            To evaluate ribosome binding to mRNA and the formation of a translational initiation complex in  S. cerevisiae, trends in Kozak sequences were analyzed for the level of expression of a gene. Protein synthesis in eukaryotes begin when the mRNA 5’ cap is recognized by the ribosome, scanning the strand along the 5’ untranslated region (UTR) in the 5’ to 3’ direction until it detects the AUG start codon. In bacteria, the RBS region is a Shine Dalgarno sequence upstream from the start codon, whereas eukaryotes have the 5’ cap and 5’UTR region for mature mRNA recognition <Cite id = "li2017" />. Kozak sequences, sequences in eukaryotic mRNA, span from position -6 to +6 flanking the start codon. They vary with different organisms containing different nucleotides and lengths for the sequences. These sequences allow for better ribosomal recognition to allow for recognition of the start codon. The +1 position of the Kozak sequence begins at the start codon.

          </p>

          <p>
           An optimal Kozak sequence was determined for S. cerevisiae and is further validated through similar position occupancies at highly expressed genes (Hamilton et al., 1987). The sequence is (A/T)A(A/C)A(A/C)A𝐀𝐓𝐆TC(T/C). Studies analyzing modifications of this sequence for optimization have been carried out, with relevant point mutations at position -5 for a guanine substituted from the adenine. Expression was increased up to 15% when guanine was substituted for adenine at positions -11, -12, and -13 <Cite id = "li2017" />. Particular modified Kozak sequences with higher reported expressions were later used in the design of our gene cassettes. Using a template of AAAAAAAAAAAAAAA with higher expression than the initial optimal Kozak sequence for S. cerevisiae, a guanine substituted for an adenine at position -13 resulted in an expression increase of 15%.  
          </p>

          <h5 className = "mt-4 font-medium text-foreground">Hairpin Stability</h5>

          <p>
            Hairpin stability and melting temperature (Tm) are dependent on entropic and enthalpic components of the loop and stem <Cite id = "zhang2001" />. The loop is a flexible region that bends back to allow base pairing, its length strongly affects RNA binding behavior. Longer loops have more possible conformations, which increases entropy and reduces strain making the folded hairpin more energetically favorable. In contrast, very short loops (around 3-8 base pairs (bp)) are more constrained but introduce specific stabilizing interactions like π–π stacking, hydrogen bonding, or even Hoogsteen-type interactions <Cite id = "zhang2001" />. For larger loops, these interactions become less significant and are often ignored because the loop behaves more like a general link between the base pairing <Cite id = "zhang2001" />.
          
          </p>

          <p>
              The stem is the main contributor to binding strength and thermal stability because of base pairing and stacking. Each base pair adds an enthalpic cost to unfolding the RNAt (roughly −1 to −3 kcal/mol per bp), so longer stems increase Tm and introduce more intermediate unfolding states; increasing the stability of the RNAt structure (Zhang, 2001). Stem length ranges matter. A moderately weak range is 4-6 bps, a moderate is 6-10 bps, and &gt;10 bps are considered stable. Base stacking (π–π interactions) and hydrogen bonding between nucleotides in the stem are important to take into consideration with orientation. As 5’-GC-3’ stacking is more stable than 5’-CG-3’ due to better overlap <Cite id = "zhang2001" />. Disruptions like out-of-plane bonding can weaken stacking and destabilize the hairpin. During unfolding, the process follows an energy landscape with several pathways, beginning at weaker ends (A-T rich regions). Together, loop flexibility and stem stability determine how tightly the hairpin holds, depicting how it can stabilize RNA and influence it’s binding.

          </p>


        </WikiSection>

        <WikiSection id="gene selection" title="Gene Selection">
          <p>
            To optimize the production and storage of TAGs in S. cerevisiae, we needed to increase flux through this pathway. After looking at potential targets, we chose several key genes to upregulate. 
          </p>

          <p>
            ACCase catalyzes the rate-limiting step of fatty acid synthesis, so this was chosen as a target to increase flux through the pathway. Rather than overexpressing ACC1, we used the double mutant ACC1**, which carries two site mutations (Ser659 and Ser1157 to Ala), as it’s been reported to relieve Snf1 repression <Cite id="shi2014" />. This allows malonyl-CoA to accumulate to higher levels, feeding more substrate into the pathway. To ensure the final step of TAG formation wasn’t a bottleneck, we also upregulated DGA1 so there was greater TAG accumulation within lipid droplets <Cite id="ferreira2018" />. 
          </p>

          <p>
            Following the production and storage of lipids, we also needed a way to release TAGs from the cell. For this, we overexpressed BGL2, which encodes an endo-beta-1,3-glucanase (BGL2 | SGD, n.d.). This enzyme causes defects in the cell wall and renders it unable to withstand internal hydrostatic pressure, resulting in cell lysis and the release of accumulated lipids <Cite id="shimizu1994" />. However, this required a way to control when lysis occurred so that release only happened during cooking. To achieve this, we engineered a synthetic RNA thermometer (RNAt) into the 5’UTR of BGL2. At low temperatures, this structure blocks translation, but it undergoes a conformational change at cooking temperatures (50°C), triggering the expression of BGL2 and subsequent cell lysis.
          </p>

          <p>
            Saturated fats are linked to increased levels of low-density lipoprotein (LDL) cholesterol and are associated with an increased risk of cardiovascular disease <Cite id="siri-tarino2010" />. To improve the nutritional profile of the resulting fat, we reduced saturated fatty acid content and increased the proportion of beneficial unsaturated fatty acids by overexpressing OLE1 <Cite id="zhao2025" />. OLE1 encodes Δ9 fatty acid desaturase, which introduces a carbon-carbon double bond at the Δ9 position, converting saturated fatty acyl-CoA into monounsaturated fatty acids (Saccharomyces Cerevisiae Oleate Biosynthesis, n.d.). 
          </p>

          <p>
            Throughout food processing and storage, yeast cells will be subject to repeated freezing and dehydration cycles. To address this, we overexpressed trehalose-6-phosphate synthase (TPS1), which drives the synthesis of trehalose <Cite id="soto1999" />. Trehalose accumulation improves stress resistance in adverse environments, giving our cells greater tolerance to heat shock, freezing, dehydration, and oxidative stress. 
          </p>

        </WikiSection>

        <WikiSection id="mutagenesis" title="Mutagenesis Strategy">
          <p>
            Describe the mutagenesis strategy: type of mutagenesis
            (site-directed, error-prone PCR, saturation), screening, and
            verification (sequencing strategy, criteria for selecting clones).
          </p>

          <h5 className="mt-4 text-lg text-foreground font-medium">Culture and Preparation of Host Organisms</h5>

          <p>
            Escherichia coli DH5α cells and Saccharomyces cerevisiae BY4741
cells were used as the bacterial cloning host and yeast chassis, respectively.
Both cultures were kept under their appropriate growth conditions for use throughout the plasmid
construction, transformation, and characterization workflow.
          </p>

          <p>
            E. coli DH5α was primarily used for plasmid propagation and recovery. DH5α was
selected due to its high transformation efficiency among E. coli K-12 strains and its commercial
availability. S. cerevisiae BY4741 and the corresponding knockout strains
were used to evaluate RNAt-regulated transgene expression and the effects of metabolic
engineering on lipid production.
          </p>

          <p>
            The required backbone plasmids were transformed into competent E. coli DH5α cells
using heat-shock transformation. Following transformation, plasmid-containing colonies were
selected and cultured. The resulting cultures were used to generate glycerol stocks for
preservation of the required backbone plasmids, while plasmid DNA was isolated by miniprep
for use in subsequent cloning and assembly procedures.
          </p>

          <h5 className="mt-4 text-lg text-foreground font-medium">Promoter Strengths</h5>

          <p>
            Our plasmid design includes 5 transcriptional units (TUs) for the expression of ACC1**, DGA1, BGL2, OLE1, and TPS1. When deciding on promoters and terminators for each coding sequence, we consulted Dr. Cinzia Klemm. She emphasized the importance of using different promoter-terminator pairs for coding sequences in multigene constructs. Since S. cerevisiae is very good at homologous recombination, reusing the same promoter or terminator sequence across multiple TUs risks one of these genes, typically the most burdensome, being recombined out over time <Cite id="tiannd" />. To avoid this, we used distinct promoter-terminator pairs for each of our five TUs. 
          </p>

          <p>
            Dr. Klemm also recommended mixing promoters of different strengths. High expression of five genes simultaneously would place a significant metabolic burden on the cell, so by pairing strong and moderate promoters, we aimed to reduce overall stress on the cell.
          </p>

          <p>
            We chose to use constitutive promoters from the Open Yeast Collection (OYC) for all coding sequences except BGL2, varying their strength based on the level of expression needed for each gene. 
          </p>

          <p>
            DGA1 needed to be expressed at high levels, since any free fatty acids have to be channeled into TAGs quickly to avoid toxic accumulation. For this reason, we chose [fill in] as a promoter for DGA1, as it is a strong constitutive promoter. 
          </p>

          <p>
            On the other hand, ACC1** only needed moderate expression. Strong expression would burden yeast metabolism by pushing the entire acetyl-CoA supply toward lipid synthesis at the expense of other cellular processes. We therefore selected ___, a medium strength promoter, for ACC1**. 
          </p>

          <p>
            OLE1 and TPS1 were lower priority relative to the TAG production pathway and could be expressed at lower levels. We selected __ for OLE1 and __ for TPS1, both weaker to medium-strength promoters.
          </p>

          <p>
            BGL2 also required high levels of expression once the RNAt denatured to ensure there was enough of the lytic enzyme to reliably lyse the cell and release the stored lipids. We initially considered using an OYC promoter, as with the other coding sequences. However, these promoters include a built-in 5’UTR, which would interfere with our design since the RNAt was intended to serve as the 5’UTR. Given this constraint, we went with cpTEF_6, a core promoter derived from the strong constitutive TEF1 promoter <Cite id="decoene2019" />. This sequence is 69bp long and omits the 5’UTR, allowing the RNAt to function in its place.
          </p>

          <h5 className="mt-4 text-lg text-foreground font-medium">Targets Considered</h5>

          <p>
            In earlier stages, we considered using a heat shock protein (HSP) promoter instead of an RNAt, as HSP promoters activate gene expression in response to elevated temperatures <Cite id="murshid2018" />. However, studies have reported that HSP mRNAs are not detected until one hour after the initial heat shock. Given our requirement for rapid activation, we opted for translational control via RNAt, which can initiate translation immediately upon unfolding.
          </p>

          <p>
            We also considered overexpressing FAS1 and FAS2 in addition to ACC1** as a means of increasing TAG levels. However, it was reported that FAS1/FAS2 overexpression did not significantly impact fatty acid levels, so we decided not to pursue it (Shin et al., 2012). 
          </p>

          <p>
            PAH1 encodes phosphatidic phosphatase (Pah1), which acts upstream of Dga1 to form TAGs from acyl chains <Cite id="ferreira2018" />. However, Pah1 is sequestered and stabilized in the cytosol through phosphorylation by protein kinases, and activity is initiated upon dephosphorylation by the Nem1-Spo7 protein phosphatase complex <Cite id="stukey2025" />. Because PAH1 activity is gated by dephosphorylation rather than by expression level, DGA1 alone was a more feasible target. 
          </p>

          <h5 className="mt-4 text-lg text-foreground font-medium">Generation of RNA Thermometer (RNAt) Variants</h5>

          <p>
            An artificial thermal release mechanism will be incorporated into the yeast chassis
through the introduction of BGL2, which encodes a cell-wall-degrading enzyme. A synthetic
RNAt will be engineered into the 5′ UTR of the BGL2 coding sequence to regulate its
temperature-dependent expression. At standard growth temperatures, the RNAt is designed to
restrict translation, while a conformational change at the intended cooking temperature (60°C) is
expected to permit BGL2 expression, promoting cell-wall degradation and facilitating the release
of accumulated lipids.
          </p>
          
          <p>
            Custom DNA sequences required for construction of the RNAt system will be ordered in
cloning vectors, and primers containing the appropriate overhangs for the selected backbone
vectors will be designed for PCR amplification of the required genetic parts. Error-prone PCR
will then be performed on the RNAt sequence to introduce random mutations and generate a
diverse population of RNAt variants. These variants will be incorporated into a reporter system
and screened for their ability to regulate downstream gene expression in response to temperature.
          </p>

          <h5 className="mt-4 text-lg text-foreground font-medium">Plasmid Assembly and Screening of the RNAt-GFP Reporter System</h5>

          <p>
            Yeast transformation will be used at two stages: first for RNA thermometer validation
and then for functional lipid-production testing. The generated RNAt variants were first
assembled with a GFP reporter using the MoClo Yeast Toolkit (YTK) Golden Gate assembly
system. The resulting RNAt-GFP plasmids were designed to place the RNAt within the 5′
untranslated region upstream of the GFP coding sequence. This allowed the effect of
temperature-dependent RNAt structural changes on downstream translation to be evaluated using
fluorescence as a measurable reporter.
          </p>

          <p>
            The YTK-assembled RNAt-GFP reporter plasmids were transformed into S. cerevisiae BY4741
via lithium acetate transformation and plating on solid YPD. Transformants will be selected by
auxotrophic resistance and cultured at 30°C for optimal growth and recovery.
          </p>

          <p>
            GTP Fluorescence will be used to confirm, quantify and select RNAt sequences exhibiting the
desired temperature-dependent expression profile. Therefore, the transformants will then be
cultured to the experimental temperature for GFP-based RNAt screening at 40°C until sufficient
GFP expression is obtained. RNAt variants showing the desired temperature-dependent
expression were selected for further characterization and incorporation into the final
lipid-production system.
          </p>

          <h5 className="mt-4 text-lg text-foreground font-medium">Recovery and Sequence Verification of Selected RNAt Variants</h5>

          <p>
            The successful RNAt-GFP transformants were selected for plasmid recovery and
sequence verification. Yeast plasmids were isolated from the selected transformants using a
Zymolyase-based yeast miniprep procedure. The recovered plasmids were subsequently
transformed into E. coli using heat-shock transformation due to its well-characterized nature as
well as its reliability, as demonstrated by workflows that commonly utilize E. coli transformants
in their design <Cite id = "rahimzadeh2016"/>.
          </p>

          <p>
            Plasmids were isolated from the resulting E. coli cultures by miniprep and subjected to
restriction enzyme digestion to linearize the plasmids and facilitate isolation of the
RNAt-containing region. The RNAt insert was then amplified by PCR and analyzed using
agarose gel electrophoresis. DNA fragments corresponding to the expected RNAt insert were
identified and excised from the gel, followed by gel purification.
          </p>

          <p>
            A portion of the resulting inserts was subjected to Sanger sequencing to verify the
nucleotide sequence of the selected RNAt variants. Sequencing was used to confirm the
mutations introduced through error-prone PCR and to ensure that the RNAt sequences selected
based on GFP expression corresponded to the intended constructs. RNAt variants with confirmed
sequences and desirable temperature-responsive expression profiles were selected for
incorporation into the final lipid-production construct.
          </p>

          <h5 className = "mt-4 text-lg text-foreground font-medium">Construction of the RNAt-Regulated Lipid Production Plasmid</h5>

          <p>
            The RNAt-regulated lipid production plasmid was constructed using a hierarchical Golden Gate assembly strategy. Level 0 DNA parts, including promoters, 5′ UTRs, CDSs, and 3′ UTRs/terminators, were assembled into Level 1 transcription units using BsmBI digestion and ligation. The Level 1 transcription units were then ligated through BsaI-generated overhangs, which flank each end, to form a Level 2 transcription unit.
          </p>

          <p>
            The coding sequences included ACC1, DGA1, OLE1, and TPS1, along with the RNAt sequence within the 5′ UTR of BGL2. Promoter sequences were designed without their native 5′ UTRs, which required the selection of a core promoter to maintain the necessary host transcriptional machinery.
          </p>

          <p>
            The assembled Level 2 construct was designed for integration into the pAN316a plasmid vector through BsmBI digestion and ligation using EcoRI and SpeI enzymes. The genes were optimized using a codon usage table for S. cerevisiae and domesticated to remove internal restriction sites required for Golden Gate assembly. The final protein coded by the yeast was not changed, while allowing Golden Gate assembly and other enzyme-dependent reactions.
          </p>

          <h5 className="mt-4 text-lg text-foreground font-medium"> Preparation of Yeast Knockout Strains</h5>

          <p>
            To ensure these lipid accumulation rather than oxidation by the cell, several competing
pathways must be downregulated or deleted. To investigate whether reducing the β-oxidation
pathway could enhance lipid accumulation through preventing the yeast from breaking down its
own fatty acid stores for energy, cultures of S. cerevisiae BY4741 POX1 knockout, BY4741
PXA1 knockout, and BY4741 POX1 and PXA1 double-knockout cells were established using
strains obtained from [insert].
          </p>

          <p>
            The BY4741 strain was maintained as a reference background for comparison with the
individual and double-knockout strains. Comparison of the BY4741 strain with the POX1,
PXA1, and POX1/PXA1 knockout backgrounds allows the contribution of these pathways to the
final lipid phenotype to be assessed.
          </p>

          <p>
            The pRS416 shuttle vector will then be used for yeast transformation because it supports
propagation in both E. coli and S. cerevisiae (Sikorski & Hieter, 1989). The vector’s CEN/ARS
elements allow low-copy plasmid maintenance in yeast, while the URA3 marker enables
auxotrophic selection on uracil-dropout synthetic medium (Sikorski & Hieter, 1989). This avoids
antibiotic selection during the yeast expression stage, which is preferable for a food-related
synthetic project because antibiotic-resistance marker genes raise regulatory concerns in food
biotechnology (U.S. FDA, 1992). Although yeast homologous recombination may support future
genomic integration, the current workflow uses plasmid-based expression as a proof-of-concept
test.
          </p>

          <h5 className ="mt-4 text-lg text-foreground font-medium">Transformation of the RNAt-Lipid Constructs into Yeast</h5>

          <p>
            The assembled RNAt-Lipid plasmid was transformed into S. cerevisiae BY4741, BY4741 POX1 knockout, BY4741 PXA1 knockout, and BY4741 POX1 and PXA1 knockout cells using lithium acetate transformation. Following transformation, cells were recovered and cultured under selective conditions to identify transformants containing the assembled plasmid.
          </p>

          <p>
            Transformants were selected using the appropriate auxotrophic markers and cultured in various liquid synthetic defined (SD) media. The SD media conditions included fatty acid supplementation to assess how different carbon sources and fatty acid compositions affected growth and lipid accumulation. Three experimental conditions were evaluated: SD media supplemented with long-chain fatty acids (0.1% oleic acid and 0.05% Tween 40), SD media supplemented with short-chain fatty acids (0.1% total SCFAs in a 3:1:1 ratio of acetic, propionic, and butyric acid, with 0.05% Tween 40), and SD media containing a combination of long-chain and short-chain fatty acids (0.05% oleic acid and 0.05% total SCFAs in a 3:1:1 ratio, with 0.05% Tween 40).  
          </p>

          <p>
            The BY4741 strain was used as a baseline, while the POX1, PXA1, and POX1/PXA1 knockout strains were used to assess the effects of reduced fatty acid degradation and transport on lipid accumulation. The resulting transformants were maintained for downstream analysis of lipid production, transgene expression, and growth.
          </p>

          <h5 className="mt-4 text-lg text-foreground font-medium">Next Steps: Evaluation of Lipid Production, Gene Expression, and Growth</h5>

          <p>
            The engineered yeast strains will be characterized to determine whether the combined
metabolic modifications result in increased intracellular lipid and fatty acid accumulation. Lipid
production will be assessed using Nile Red staining, with lipid accumulation quantified using a
96-well plate assay or visualized using fluorescence microscopy. Fluorescence measurements
will be collected at an excitation wavelength of 485 nm and an emission wavelength of 535 nm,
using a top 50% mirror, appropriate gain settings, and orbital shaking for 10 seconds prior to
measurement [citation].
          </p>

          <p>
            Gene expression will be evaluated using reverse transcription PCR (RT-PCR) to assess
expression of the introduced transgenes and determine whether the engineered genetic circuits
are expressed as intended. These measurements will be analyzed alongside the lipid phenotype to
evaluate the relationship between transgene expression and lipid accumulation.
          </p>

          <p>
            Growth curves will be generated for the engineered strains under the different liquid SD
media conditions. Growth measurements will be used to assess whether the genetic
modifications or alternative media conditions affect cellular growth and overall strain
performance. Together, these measurements will help determine whether increased lipid
accumulation can be achieved without substantially compromising the growth characteristics of
the engineered yeast.
          </p>

        </WikiSection>

        <WikiSection id="rnat-choice" title="RNAt Selection">
          <p>
            Explain the approach to selecting the RNAt, rationale, and how the
            design was optimized for our project. (e.g. theromodynamic
            modelling, codon optimization, part selection)
          </p>

        </WikiSection>

        <WikiSection id="results" title="Results">
       
          <p>
            The final construct was not able to be successfully assembled due to logistical errors. While the pAN316a plasmid was successfully transformed into S. cerevisiae BY4741 and validated the URA3 selection system, there was no successful growth following assembly with the RNAt components, and the subsequent error-prone PCR was not attempted. There were also issues with the OYC-dropout-suGFP sequence that interfered with transformation, preventing the assembly of the final construct. Additional troubleshooting will be required to validate the proposed construct in the lab, though in-silico results are promising. 
          </p>

          <p>
            S. cerevisiae BY4741 and S. cerevisiae PXA1 cells were prepared according to the Nile Red staining protocol adapted from Rostron and Lawrence <Cite id = "rostron_lawrence_2017" />, with final OD 595nm readings of 1.030 and 0.988 respectively. The resulting absorbance values at 485 nm excitation and 535 nm emission are shown in Table 1. 
          </p>

          // insert table of results here 

          <p>
            From Table 2, it can be concluded that the average RFU of S. cerevisiae PXA1 is 31.2% higher than the average RFU of S. cerevisiae BY4741.
          </p>
        </WikiSection>

        <WikiSection id="discussion" title="Discussion">

          <h5 className="mt-4 text-lg text-foreground font-medium">Assembly of the Final Construct</h5>

          <p>
           The assembly of the final construct required using the OYC-dropout-suGF plasmid to separately assemble the gene cassettes, so a large portion of the cycle was spent troubleshooting the transformation of OYC-dropout-suGF into E. coli DH5α. Considering that there were no issues with the transformation of other parts, such as pAN316a, and the overall acceptance of heat shock as a reliable transformation method for E. coli <Cite id = "froger2007" />, it is unlikely that the transformation protocol was at fault. There has been some evidence suggesting that there are sequence discrepancies within this part <Cite id = "igem" />, but it is difficult to say for sure what exactly prevented its successful transformation 
          </p>

          <p>
            Given the successful in-silico validation of the RNAt structure, and the time and resource constraints, the assembly of the pAN316a-RNAt plasmid would be reattempted with larger DNA concentrations to try to obtain a successful construct. 
          </p>

          <h5 className="mt-4 text-lg text-foreground font-medium">Nile Red Quantification of Neutral Lipids</h5>

          <p>
            Due to the nature of relative fluorescence units and the large variations from different equipment and lab environments, it’s generally advised to construct a standard calibration curve by correlating RFU values to a known concentration of a purified neutral lipid standard, or to compare against a gravimetrically quantified total lipid extraction <Cite id = "sitepu2012" />. This was not possible due to time and equipment constraints so the lipid to dry cell weight of these strains could not be accurately determined, however, it can be clearly seen that S. cerevisiae PXA1 emitted greater fluorescence, thus contained more neutral lipid, than S. cerevisiae BY4741. Since S. cerevisiae BY4741 is a well documented model organism and the relationship between RFU and lipid content is linear <Cite id = "genicot2005" />, the lipid to dry cell weight of S. cerevisiae PXA1 can be estimated to be 31.2% higher than BY4741, which is usually around 70mg per gram cell of dry weight when grown in YPD conditions <Cite id = "kamisaka2007" />. From this reasoning, it can be concluded that S. cerevisiae PXA1 would have around 91.84mg of neutral lipid per gram of cell dry weight.
          </p>

          <p>
            This alone does not suggest S. cerevisiae PXA1 is a particularly oleaginous yeast strain, since oleaginous yeasts and fungi tend to have anywhere from 300 to 500mg of neutral lipid per gram cell of dry weight <Cite id = "kamisaka2007" />. However, literature supports the efficacy of ACC1** <Cite id = "shi2014" /> and upregulating DGA1 <Cite id = "kamisaka2007" /> for enhanced lipid production in S. cerevisiae, so future experiments might seek to compare further engineered S. cerevisiae PXA1 to the baseline discussed in this project.
          </p>

          <p>
           The protocol used for the preparation and reading of the Nile Red stained cells advised to measure the fluorescence immediately after staining the cells <Cite id = "rostron_lawrence2017" />, though other literature suggests waiting as long as half an hour to ensure fluorescence stabilization <Cite id = "castrillon2021" />, or generating a fluorescence curve over a few minutes in order to accurately determine the emission peak of a sample, since the time it takes Nile Red to permeate the cell wall can vary from sample to sample <Cite id = "sitepu2012" />. This was not possible due to time and equipment constraints, but can be considered for future experiments.  
          </p>

          </WikiSection>

        <ReferencesSection
          id="references"
          title="References"
          references={references}
        />
      </WikiPage>
    </>
  );
}
