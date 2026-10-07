import Image from "next/image";
import type { ReactNode } from "react";
import { Banner } from "@/components/wiki/Banner";
import { WikiPage } from "@/components/wiki/WikiPage";
import { WikiSection } from "@/components/wiki/WikiSection";
import { asset } from "@/lib/wiki/asset";

export const metadata = {
  title: "Documentation — MEYcell",
};

export const parts = [
  {
    id: "cp-tef1",
    title: "cp_TEF1",
    category: "Promoter",
    source: {
      label: "(Decoene et. al, 2019)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6830820/#pone.0224476.s010",
    },
    sequence:
      " 5'-GGTCTCAGGAGAGATTTAAACTCGCGTGTTTTTTCTTGTTCTATTACAACTTTTTTTACTTCTTGCTCATTAGAAAGAAATACTTGAGACC-3' ",
  },
  {
    id: "dga1",
    title: "DGA1",
    category: "CDS",
    source: { label: "SGD" },
    sequence: "",
  },
  {
    id: "bgl2",
    title: "BGL2",
    category: "CDS",
    source: { label: "SGD" },
    sequence: "",
  },
  {
    id: "rnat-1",
    title: "RNAt_1",
    category: "5' UTR",
    source: { label: "New" },
    sequence:
      "5'-GGTCTCATACTCATTTCTTTTTTTTTATCAGTCTGCAGAAAGAAAAAAAAATGAGAGACC-3'",
  },
  {
    id: "rnat-2",
    title: "RNAt_2",
    category: "5' UTR",
    source: { label: "New" },
    sequence:
      "5'-GGTCTCATACTCATATTTTTTCATCAGTAAAAAAAAAAAAAAAAAAAGGATAAAAAATGAGAGACC-3' ",
  },
  {
    id: "rnat-3",
    title: "RNAt_3",
    category: "5' UTR",
    source: { label: "New" },
    sequence:
      "5'-GGTCTCATACTCATTTATTTTCACATGTAAAAAAAAAAAAAAAAAAAGGATAAAAAATGAGAGACC-3'",
  },
  {
    id: "mscarlet3-fwd",
    title: "mScarlet3_fwd",
    category: "Primer",
    source: { label: "New" },
    sequence: "5'-GAACGGTCATGAGTTCGAAATCGAG-3'",
  },
  {
    id: "mscarlet3-rvs",
    title: "mScarlet3_rvs",
    category: "Primer",
    source: { label: "New" },
    sequence: "5'-CTCGATTTCGAACTCATGACCGTTC-3'",
  },

  {
    id: "pCCW12",
    title: "pCCW12",
    category: "Promoter",
    source: { label: "YTK, iGEM distribution kit" },
    sequence:
      "CACCCATGAACCACACGGTTAGTCCAAAAGGGGCAGTTCAGATTCCAGATGCGGGAATTAGCTTGCTGCCACCCTCACCTCACTAACGCTGCGGTGTGCGGATACTTCATGCTATTTATAGACGCGCGTGTCGGAATCAGCACGCGCAAGAACCAAATGGGAAAATCGGAATGGGTCCAGAACTGCTTTGAGTGCTGGCTATTGGCGTCTGATTTCCGTTTTGGGAATCCTTTGCCGCGCGCCCCTCTCAAAACTCCGCACAAGTCCCAGAAAGCGGGAAAGAAATAAAACGCCACCAAATAAAATAAAATAAAAGCCAATCCTCGAAGCGTGGGTGGTAGGCCCTGGATTATCCCGTACAAGTATTTCTCAGGAGTAAAAAAACCGTTTGTTTTGGAATTTCCCATTTCGCGGCCACCTACGCCGCTATCTTTGCAACAACTATCTGCGATAACTCAGCAAATTTTGCATATTCGTGTTGCAGTATTGCGATAATGGGAGTCTTACTTCCAACATAACGGCAGAAAGAAATGTGAGAAAATTTTGCATCCTTTGCCTCCGTTCAAGTATATAAAGTCGGCATGCTTGATAATCTTTCTTTCCATCCTACATTGTTCTAATTATTCTTATTCTCCTTTATTCTTTCCTAACATACCAAGAAATTAATCTTCTGTCATTCGCTTAAACACTATATCAATAA",
  },

  {
    id: "tENO1",
    title: "tENO1",
    category: "Terminator",
    source: { label: "YTK, iGEM distribution kit" },
    sequence:
      "AGCTTTTGATTAAGCCTTCTAGTCCAAAAAACACGTTTTTTTGTCATTTATTTCATTTTCTTAGAATAGTTTAGTTTATTCATTTTATAGTCACGAATGTTTTATGATTCTATATAGGGTTGCAAACAAGCATTTTTCATTTTATGTTAAAACAATTTCAGGTTTACCTTTTATTCTGCTTGTGGTGACGCGTGTATCCGCCCGCTCTTTTGGTCACCCATGTAT",
  },

  {
    id: "pTDH3",
    title: "pTDH3",
    category: "Promoter",
    source: { label: "YTK, iGEM distribution kit" },
    sequence:
      "TCATTATCAATACTCGCCATTTCAAAGAATACGTAAATAATTAATAGTAGTGATTTTCCTAACTTTATTTAGTCAAAAAATTAGCCTTTTAATTCTGCTGTAACCCGTACATGCCCAAAATAGGGGGCGGGTTACACAGAATATATAACATCGTAGGTGTCTGGGTGAACAGTTTATTCCTGGCATCCACTAAATATAATGGAGCCCGCTTTTTAAGCTGGCATCCAGAAAAAAAAAGAATCCCAGCACCAAAATATTGTTTTCTTCACCAACCATCAGTTCATAGGTCCATTCTCTTAGCGCAACTACAGAGAACAGGGGCACAAACAGGCAAAAAACGGGCACAACCTCAATGGAGTGATGCAACCTGCCTGGAGTAAATGATGACACAAGGCAATTGACCCACGCATGTATCTATCTCATTTTCTTACACCTTCTATTACCTTCTGCTCTCTCTGATTTGGAAAAAGCTGAAAAAAAAGGTTGAAACCAGTTCCCTGAAATTATTCCCCTACTTGACTAATAAGTATATAAAGACGGTAGGTATTGATTGTAATTCTGTAAATCTATTTCTTAAACTTCTTAAATTCTACTTTTATAGTTAGTCTTTTTTTTAGTTTTAAAACACCAGAACTTAGTTTCGA",
  },

  {
    id: "tDH1",
    title: "tDH1",
    category: "Terminator",
    source: { label: "YTK, iGEM distribution kit" },
    sequence:
      "ATAAAGCAATCTTGATGAGGATAATGATTTTTTTTTGAATATACATAAATACTACCGTTTTTCTGCTAGATTTTGTGATGACGTAAATAAGTACATATTACTTTTTAAGCCAAGACAAGATTAAGCATTAACTTTACCCTTTTCTTTCTAAGTTTCAATATTAGTTATCACTGTTTAAAAGTTATGGCGAGAACGTCGGCGGTTAAAATATATTACCCTGAACGA",
  },

  {
    id: "pRPL18B",
    title: "pRPL18B",
    category: "Promoter",
    source: { label: "YTK, iGEM distribution kit" },
    sequence:
      "AAGAGGATGTCCAATATTTTTTTTAAGGAATAAGGATACTTCAAGACTAGATTCCCCCCTGCATTCCCATCAGAACCGTAAACCTTGGCGCTTTCCTTGGGAAGTATTCAAGAAGTGCCTTGTCCGGTTTCTGTGGCTCACAAACCAGCGCGCCCGATATGGCTTTCTTTTCACTTATGAATGTACCAGTACGGGACAATTAGAACGCTCCTGTAACAATCTCTTTGCAAATGTGGGGTTACATTCTAACCATGTCACACTGCTGACGAAATTCAAAGTAAAAAAAAATGGGACCACGTCTTGAGAACGATAGATTTTCTTTATTTTACATTGAACAGTCGTTGTCTCAGCGCGCTTTATGTTTTCATTCATACTTCATATTATAAAATAACAAAAGAAGAATTTCATATTCACGCCCAAGAAATCAGGCTGCTTTCCAAATGCAATTGACACTTCATTAGCCATCACACAAAACTCTTTCTTGCTGGAGCTTCTTTTAAAAAAGACCTCAGTACACCAAACACGTTACCCGACCTCGTTATTTTACGACAACTATGATAAAATTCTGAAGAAAAAATAAAAAAATTTTCATACTTCTTGCTTTTATTTAAACCATTGAATGATTTCTTTTGAACAAAACTACCTGTTTCACCAAAGGAAATAGAAAGAAAAAATCAATTAGAAGAAAACAAAAAACAAA",
  },

  {
    id: "tENO2",
    title: "tENO2",
    category: "Terminator",
    source: { label: "YTK, iGEM distribution kit" },
    sequence:
      "AGTGCTTTTAACTAAGAATTATTAGTCTTTTCTGCTTATTTTTTCATCATAGTTTAGAACACTTTATATTAACGAATAGTTTATGAATCTATTTAGGTTTAAAAATTGATACAGTTTTATAAGTTACTTTTTCAAAGACTCGTGCTGTCTATTGCATAATGCACTGGAAGGGGAAAAAAAAGGTGCACACGCGTGGCTTTTTCTTGAATTTGCAGTTTGAAAAAT",
  },

  {
    id: "pSAC6",
    title: "pSAC6",
    category: "Promoter",
    source: { label: "YTK, iGEM distribution kit" },
    sequence:
      "TTTGAGAATGACCTTCCACGAGCTAAATTGAAAGGGAAGAATTTATTAGTTGAACTCAAGAAAGAAGAGGATGACGTGGGAAATGGCATAGAATCCCTTACTAAATCGAACACTAAACTGAACTCCATGCTGGCGAACGAAGGTAAGATACACAAAGCTAGTTTCCAGAAAAGTGTAAAATTTAAACTACCTGATAATATAGTGACTGAAGAAACCGTGGAACTTAAAGAAATAAAGGACTTGCTACTACAAATGTTGAGATGACAGCGAGAGATTGAATCAAGATTATCCAATATCGAACTTCAACTCACGGAAATACCGAAACATAAGTAATCATATCCCTTCTCACATTTTTTACACAGGAAGTAAGCAAGTTATGTTATATTTCCGACACTATAATTAATTCTTAGCAGTTAAAGGTGCTTTGTCTATATTACATTTACATACAGCTTGAGTGATCCTGACCGGATATAGGGTCCTATTTTCTTACGTGAACGGCTTTTCTTCTTGTTCCCGATGGCCTTCATGTGAAAAAGCACTCCTCGGGAGGCGGAAAAATATCAAAAGTACGGGGCGAAGTTTATAATGAAGATTTATCGATATAAATTTTGGTTATTTCAGGAGAACAAGAAAGCTCTTTACACTAAAATTATCAGAGAAGAAGCTGATATATTAGCCCTAAGGAGTACACCAAAACACA",
  },

  {
    id: "tSSA1",
    title: "tSSA1",
    category: "Terminator",
    source: { label: "YTK, iGEM distribution kit" },
    sequence:
      "GCCAATTGGTGCGGCAATTGATAATAACGAAAATGTCTTTTAATGATCTGGGTATAATGAGGAATTTTCCGAACGTTTTTACTTTATATATATATATACATGTAACATATATTCTATACGCTATAGAGAAAGGAAATTTTTCAATTAAAAAAAAATAGAGAAAGAGTTTCACTTCTTGATTATCGCTAACACTAATGGTTGAAGTACTGCTACTTTAATTTTAT",
  },
] as const;

export const protocols = [
  {
    id: "bacterial media preparation",
    title: "Solid LB Media",
    description: (
      <>
        Lysogeny broth, Luria-Bertani, medium is a common medium for growing
        bacteria, such as <i>E. coli</i> in liquid or on solid agar plates. This
        protocol is for 500 mL of LB media. Liquid LB broth is prepared by
        omitting the addition of agar.
      </>
    ),
    pdfUrl: asset("/protocols/Solid LB Media Preparation.pdf"),
  },
  {
    id: "liquid ypd media preparation",
    title: "Liquid YPD Media",
    description:
      "Liquid medium allows for rapid growth and easy measurement via OD, and YPD provides the nutrients necessary for auxotrophic strains to grow. This protocol makes 1L of liquid yeast peptone dextrose medium (YPD) at 1% yeast extract, 2% peptone, and 2% dextrose concentration.",
    pdfUrl: asset("/protocols/Liquid YPD Media Preparation.pdf"),
  },
  {
    id: "liquid sd media preparation",
    title: "Liquid SD Media",
    description: (
      <>
        Liquid medium will be used for the majority of the project, since it
        allows for rapid growth and easy measurement via OD. This media lacks
        uracil supplementation needed for untransformed auxotrophic BY4741{" "}
        <i>S. cerevisiae</i> to survive. Makes 1L of liquid synthetic defined /
        synthetic dextrose (SD) media.
      </>
    ),
    pdfUrl: asset("/protocols/Liquid SD Media Preparation.pdf"),
  },
  {
    id: "solid sd media preparation",
    title: "Solid SD Media",
    description:
      "Solid medium allows for the selection of individual colonies. This protocol makes about 20 plates from 500mL of liquid synthetic defined / synthetic dextrose (SD) media deficient in uracil.",
    pdfUrl: asset("/protocols/Solid SD Media Preparation.pdf"),
  },
  {
    id: "e coli culture",
    title: (
      <>
        <i>E. coli</i> Culture
      </>
    ),
    description: (
      <>
        This protocol describes the steps required for cultivation of{" "}
        <i>Escherichia coli</i> from frozen stock through growth on solid and
        liquid media. Protocols include isolation of single colonies, expansion
        in liquid culture, and using optical density as a growth metric. Proper
        aseptic technique and handling conditions are emphasized to maintain
        culture viability and prevent contamination. The resulting cultures can
        then be used for other experimental applications. Refer to Solid LB
        Media preparation to make plates and LB broth. Instructions for making
        glycerol stocks are also included.
      </>
    ),
    pdfUrl: asset("/protocols/E. coli Culture.pdf"),
  },
  {
    id: "yeast culture",
    title: (
      <>
        <i>S. cerevisiae</i> Culture
      </>
    ),
    description: (
      <>
        This protocol outlines the general steps for preparing an{" "}
        <i>S. cerevisiae</i> culture for transformation or otherwise, measuring
        OD600 to create a growth curve, determining transformation conditions,
        in addition to creating glycerol stocks from the resulting cultures.
        This protocol also includes details for the culture of experimental
        media, though the instructions for the growth curve remain general.
      </>
    ),
    pdfUrl: asset("/protocols/S. cerevisiae Culture.pdf"),
  },
  {
    id: "e coli heat shock transformation",
    title: (
      <>
        <i>E. coli</i> Heat Shock Transformation
      </>
    ),
    description: (
      <>
        Heat shock transformation is a common method used to introduce plasmid
        DNA into chemically competent <i>E. coli</i> cells. Competent cells are
        prepared to have permeable membranes that can take up DNA under specific
        conditions. During transformation, the plasmid DNA is mixed with
        competent cells and briefly exposed to a sudden increase in temperature
        (typically 42 °C). This heat shock creates a thermal imbalance across
        the cell membrane, driving the uptake of DNA into the cytoplasm. The
        cells are then allowed to recover in nutrient-rich media to express the
        antibiotic resistance gene carried by the plasmid before being plated on
        selective agar.
      </>
    ),
    pdfUrl: asset("/protocols/E. coli Heat Shock Transformation.pdf"),
  },
  {
    id: "lithium acetate transformation",
    title: (
      <>
        Lithium Acetate Transformation of <i>Saccharomyces cerevisiae</i>
      </>
    ),
    description: (
      <>
        This protocol describes the rapid transformation of{" "}
        <i>Saccharomyces cerevisiae</i> using the lithium
        acetate/single-stranded carrier DNA/polyethylene glycol
        (LiAc/SS-DNA/PEG) method. The goal is to introduce plasmid DNA into
        yeast cells and recover transformants on selective medium. In this
        method, yeast cells grown on a YPAD agar plate are mixed with lithium
        acetate, PEG 3350, boiled salmon sperm carrier DNA, and plasmid DNA,
        then incubated at 42ºC before plating. This rapid protocol is suitable
        when only a small number of transformants are required.
      </>
    ),
    pdfUrl: asset("/protocols/Lithium Acetate Transformation Protocol.pdf"),
  },
  {
    id: "optical density monitoring",
    title: "Optical Density Monitoring",
    description: (
      <>
        This protocol describes the steps to preparing and monitoring a liquid
        culture of <i>E. coli</i>. In genetic engineering, bacterial chassis are
        critical players due to their well-explored methods of genetic
        manipulation (i.e. DNA transformation). By preparing and maintaining
        healthy <i>E. coli</i> cultures, this method supports the groundwork.
      </>
    ),
    pdfUrl: asset("/protocols/Optical Density Monitoring.pdf"),
  },
  {
    id: "nile red staining",
    title: "Quantification of Neutral Lipids Using Nile Red Staining",
    description:
      "Nile Red, a lipophilic fluorescent dye, selectively stains neutral lipids, allowing lipid content to be assessed through fluorescence intensity. Using a 96 well assay, yeast cells are stained with Nile Red and fluorescence will be measured at excitation 485 nm and emission 535 nm. Yeast cells can also be imaged using fluorescence microscopy.",
    pdfUrl: asset("/protocols/Nile Red.pdf"),
  },
  {
    id: "rt-pcr",
    title: "One Step Reverse Transcription Polymerase Chain Reaction (RT-PCR)",
    description:
      "This procedure converts RNA into cDNA, which is then amplified using PCR to produce millions of copies of the target sequence.",
    pdfUrl: asset("/protocols/RT PCR.pdf"),
  },
  {
    id: "e coli miniprep",
    title: (
      <>
        <i>E. coli</i> Plasmid Miniprep Protocol using Centrifugation
      </>
    ),
    description:
      "This protocol utilizes the Monarch Plasmid DNA Kit (NEB #T1110) kit, which allows for a reliable and quick method to purify up to 20 μg of high quality plasmid DNA and allows for 50 preps. This kit uses standard steps such as cell resuspension, alkaline lysis, and neutralization, and also includes color indicators at certain stages to help easily monitor when each step is complete.",
    pdfUrl: asset("/protocols/E. coli Miniprep.pdf"),
  },
  {
    id: "zymolyase digestion",
    title: "Yeast Miniprep: Zymolyase Digestion",
    description: (
      <>
        Model organism <i>Saccharomyces cerevisiae</i> has a thick chitin cell
        wall, preventing simple extraction of the plasmid. This miniprep breaks
        down the Chitin walls, and extracts 2 µ-based plasmids (type of plasmid
        high in copy numbers), yielding approximately 0.01-0.3ng of plasmid per
        1.5mL of overnight culture. The plasmid DNA is recovered in a TE buffer,
        and is able to be used in <i>E. coli</i> transformations, western
        blotting, PCR, etc.
      </>
    ),
    pdfUrl: asset("/protocols/Yeast Miniprep_ Zymolase Digestion Protocol.pdf"),
  },
  {
    id: "autoclaving",
    title: "Autoclaving",
    description:
      "Autoclaving uses saturated steam under pressure (typically 121 °C, 15 psi) to sterilize media, buffers, glassware, and biohazardous waste. This protocol covers routine sterilization of laboratory items in a gravity-displacement steam autoclave, including pre-cycle preparation, cycle selection, and safe unloading.",
    pdfUrl: asset("/protocols/Autoclaving Protocol.pdf"),
  },
  {
    id: "gel electrophoresis",
    title: "Gel Electrophoresis",
    description:
      "This protocol outlines the proper setup and use of agarose gel electrophoresis to separate DNA fragments based on molecular weight under an electrical current. By running a DNA ladder alongside samples, the size of DNA fragments can be estimated and compared. A 1% agarose gel is used as a standard condition for effective separation. Gel electrophoresis is commonly applied to verify PCR products, confirm plasmid inserts, assess DNA digestion, and roughly estimate DNA concentration based on band intensity.",
    pdfUrl: asset("/protocols/Gel Electrophoresis.pdf"),
  },
  {
    id: "pcr",
    title: "PCR",
    description:
      "This protocol outlines the use of polymerase chain reaction (PCR) with Q5 high-fidelity polymerase and a thermocycler to amplify DNA. PCR is a fundamental technique in molecular cloning, enabling the exponential amplification of specific DNA sequences for downstream applications such as cloning and analysis. The use of Q5 polymerase ensures high accuracy and low error rates during DNA replication.",
    pdfUrl: asset("/protocols/PCR.pdf"),
  },
  {
    id: "golden gate",
    title: "YTK Golden Gate Assembly",
    description: (
      <>
        The YTK toolkit is a characterized collection of standardized genetic
        parts designed for modular, multi-part and hierarchical assembly of
        constructs for expression in <i>S. cerevisiae</i>. Promoter, coding
        sequence and terminator parts are assembled into transcription units
        through a L1 assembly reaction. Backbone used for this reaction may
        either be pYTK096, pWS064 and pWS065 (pre-assembled integration vectors
        targeting URA3, LEU2 and HO loci respectively) or within intermediary
        vectors. These intermediary vectors can be used for multi-cassette
        assembly via L2 assembly reaction.
      </>
    ),
    pdfUrl: asset("/protocols/YTK Golden Gate Assembly.pdf"),
  },
  {
    id: "re digest and ligation",
    title: "Restriction Enzyme Digest and Ligation",
    description:
      "This protocol outlines the digestion and ligation of a DNA insert into a plasmid. It begins by cutting both the source DNA and the plasmid with the same restriction enzymes, generating complementary ends that allow the fragments to align. The insert is then joined to the plasmid through a ligation reaction, which is facilitated using T4 DNA Ligase.",
    pdfUrl: asset("/protocols/Restriction Enzyme Digest and Ligation.pdf"),
  },
  {
    id: "ep-pcr",
    title: "Error Prone PCR (EP-PCR)",
    description:
      "Introduces random mutations to genes (or gene segment) of interest, creating a library of mutated DNA. Screening of this mutated DNA library can help determine whether random mutations at certain areas changed function (introduction of new function, deletion of function, or alteration of function) of the gene. This can also be used as an vitro technique to mimic natural mutation but with more control, and at a faster pace.",
    pdfUrl: asset("/protocols/Error Prone PCR (EP-PCR).pdf"),
  },
] as const;

function PartsTable({
  rows,
}: {
  rows: readonly {
    id: string;
    title: string;
    category: string;
    source: { label: string; url?: string };
    sequence: string;
  }[];
}) {
  return (
    <div className="overflow-x-auto rounded-md border border-border">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-border bg-card/80">
            <th className="p-3 font-medium text-foreground">Part Title</th>
            <th className="p-3 font-medium text-foreground">Category</th>
            <th className="p-3 font-medium text-foreground">Source</th>
            <th className="p-3 font-medium text-foreground">Sequence</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="border-b border-border last:border-b-0">
              <td className="p-3 text-body">{row.title}</td>
              <td className="p-3 text-body">{row.category}</td>
              <td className="p-3 text-body">
                {row.source.url ? (
                  <a
                    href={row.source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline transition-colors hover:text-primary/80"
                  >
                    {row.source.label}
                  </a>
                ) : (
                  row.source.label
                )}
              </td>
              <td className="p-3 text-body">{row.sequence}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ProtocolCard({
  title,
  description,
  pdfUrl,
}: {
  title: ReactNode;
  description: ReactNode;
  pdfUrl: string;
}) {
  return (
    <div className="flex flex-col justify-between space-y-4 border border-border bg-card/80 p-6">
      <div className="space-y-3">
        <h3 className="text-lg font-medium text-foreground">{title}</h3>
        <p className="text-sm leading-relaxed text-body">{description}</p>
      </div>
      <a
        href={pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
      >
        View PDF <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  );
}

export default function DocumentationPage() {
  return (
    <>
      <Banner title="Documentation">
        <p>Our parts, constructs and lab notebook compiled together.</p>
      </Banner>

      <WikiPage>
        <WikiSection id="parts" title="Parts">
          <div className="space-y-4">
            <p className="text-sm text-body">
              All sequences obtained are native to <i>S. cerevisiae</i> with the
              exceptions of the RNAt which was a novel concept but was optimized
              for the yeast. The genes were domesticated using a codon usage
              table to optimize amino acid sequences that were the most used by{" "}
              <i>S. cerevisiae</i> and remove internal restriction enzyme sites.
              This way, the final protein coded by the yeast wasn’t changed but
              allowed to perform Golden Gate assemblies and other
              enzyme-dependent reactions. The CDS genes were ordered from Twist
              Biosciences as dsDNA with the enzyme recognition sites and
              overhangs already added, while the RNAt, core promoter sequence,
              and primers were all ordered through Genscript. The acceptor
              plasmid for Level 1 as well as the other promoters, terminators,
              and connectors were from the iGEM 2025 distribution kit.
            </p>
            <PartsTable rows={parts} />
          </div>
        </WikiSection>

        <WikiSection id="constructs" title="Plasmid Constructs">
          <h2 className="mb-4 text-xl font-medium text-foreground">Level 0</h2>
          <h2 className="mb-4 text-xl font-medium text-foreground">Level 1</h2>
          <figure className="flex flex-col items-center gap-2">
            <Image
              src={asset("/documentation/rnat bgl2 plasmid.png")}
              alt="rnat plasmid map"
              width={500}
              height={400}
              className="border border-border"
            />
            <figcaption className=" text-center text-sm text-body">
              Figure 1: Level 1 transcription unit of BGL2 with the RNAt in the
              5’ UTR.
            </figcaption>
          </figure>
          <h2 className="mb-4 text-xl font-medium text-foreground">Level 2</h2>
          <figure className="flex flex-col items-center gap-2">
            <Image
              src={asset("/documentation/pAN316a plasmid.png")}
              alt="pAN316a plasmid map"
              width={500}
              height={400}
              className="border border-border"
            />
            <figcaption className="text-center text-sm text-body">
              Figure 2: Level 2 acceptor - final plasmid backbone.
            </figcaption>
          </figure>

          <figure className="flex flex-col items-center gap-2">
            <Image
              src={asset("/documentation/final construct.png")}
              alt="Final Construct"
              width={700}
              height={400}
              className="border border-border"
            />
            <figcaption className="text-center text-sm text-body">
              Figure 3: Final construct of lipid genes, RNAt, and their
              promoters and terminators.
            </figcaption>
          </figure>
        </WikiSection>

        <WikiSection id="protocols" title="Lab Protocols">
          <div className="grid gap-4 sm:grid-cols-2">
            {protocols.map((protocol) => (
              <ProtocolCard
                key={protocol.id}
                title={protocol.title}
                description={protocol.description}
                pdfUrl={protocol.pdfUrl}
              />
            ))}
          </div>
        </WikiSection>

        <WikiSection id="notebook" title="Lab Notebook">
          <div className="space-y-4">
            <iframe
              src={asset("/documentation/Lab Notebook_compressed.pdf")}
              title="Notebook"
              className="h-[800px] w-full border border-border bg-card/80"
            />
            <a
              href={asset("/documentation/Lab Notebook_compressed.pdf")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              Open in new tab <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </WikiSection>

        <WikiSection id="report" title="iDEC Report">
          <div className="space-y-4">
            <iframe
              src={asset("/documentation/iDEC-Report-Main-Text.pdf")}
              title="Report"
              className="h-[800px] w-full border border-border bg-card/80"
            />
            <a
              href={asset("/documentation/iDEC-Report-Main-Text.pdf")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              Open in new tab <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </WikiSection>
      </WikiPage>
    </>
  );
}
