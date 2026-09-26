import Image from "next/image";
import { Banner } from "@/components/wiki/Banner";
import { WikiPage } from "@/components/wiki/WikiPage";
import { WikiSection } from "@/components/wiki/WikiSection";

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
  },
  { id: "dga1", title: "DGA1", category: "CDS", source: { label: "SGD" } },
  { id: "bgl2", title: "BGL2", category: "CDS", source: { label: "SGD" } },
  {
    id: "rnat-1",
    title: "RNAt_1",
    category: "5' UTR",
    source: { label: "New" },
  },
  {
    id: "rnat-2",
    title: "RNAt_2",
    category: "5' UTR",
    source: { label: "New" },
  },
  {
    id: "rnat-3",
    title: "RNAt_3",
    category: "5' UTR",
    source: { label: "New" },
  },
  {
    id: "mscarlet3-fwd",
    title: "mScarlet3_fwd",
    category: "Primer",
    source: { label: "New" },
  },
  {
    id: "mscarlet3-rvs",
    title: "mScarlet3_rvs",
    category: "Primer",
    source: { label: "New" },
  },
] as const;

export const protocols = [
  {
    id: "media preparation",
    title: "Media Preparation",
    description: "These protocols ____",
    pdfUrl: "coming soon",
  },

  {
    id: "media preparation",
    title: "Media Preparation",
    description: "These protocols ____",
    pdfUrl: "coming soon",
  },

  {
    id: "media preparation",
    title: "Media Preparation",
    description: "These protocols ____",
    pdfUrl: "coming soon",
  },

  {
    id: "media preparation",
    title: "Media Preparation",
    description: "These protocols ____",
    pdfUrl: "coming soon",
  },

  {
    id: "media preparation",
    title: "Media Preparation",
    description: "These protocols ____",
    pdfUrl: "coming soon",
  },

  {
    id: "media preparation",
    title: "Media Preparation",
    description: "These protocols ____",
    pdfUrl: "coming soon",
  },

  {
    id: "media preparation",
    title: "Media Preparation",
    description: "These protocols ____",
    pdfUrl: "coming soon",
  },

  {
    id: "media preparation",
    title: "Media Preparation",
    description: "These protocols ____",
    pdfUrl: "coming soon",
  },

  {
    id: "media preparation",
    title: "Media Preparation",
    description: "These protocols ____",
    pdfUrl: "coming soon",
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
  title: string;
  description: string;
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
              All sequences obtained are native to S. cerevisiae with the
              exceptions of the RNAt which was a novel concept but was optimized
              for the yeast. The genes were domesticated using a codon usage
              table to optimize amino acid sequences that were the most used by
              S. cerevisiae and remove internal restriction enzyme sites. This
              way, the final protein coded by the yeast wasn’t changed but
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
          <p>
            Plasmid construction and selection are essential to consider in the
            design process of optimizing the lipid synthesis pathway of
            Saccharomyces cerevisiae. When selecting a suitable plasmid, several
            considerations were kept in mind, such as S. cerevisiae and E. coli
            compatibility, copy number, and plasmid types.
          </p>
          <p>
            To ensure our optimized pathway is compatible in both S. cerevisiae
            and E. coli, we selected pRS shuttle vectors, which were
            well-validated. The purpose of utilizing a shuttle vector was to
            allow for replication between multiple host organisms. Additionally,
            the origin of replication needed to be compatible with E. coli.
            However, a more complex replication system within S. cerevisiae
            needed to be considered, such as Autonomously Replicating Systems
            (ARS) causing independent replication, and centromere (CEN)
            sequences allowing for low-copy chromosome division. These factors
            of yeast replication are species-dependent, and were taken into
            consideration when selecting the plasmid.
          </p>
          <p>
            Moreover, selectable marker sequences are needed to be compatible in
            both host organisms, especially when working with both bacteria and
            eukaryotes. For E. Coli, the ampicillin resistance gene was
            incorporated into the plasmid. For auxotrophic selection within S.
            cerevisiae, a URA3 marker was integrated into the plasmid construct.
          </p>
          <p>
            To integrate our plasmid construct into the host organisms,
            homologous recombination was initially considered. However, nuclear
            genome integration was opted for instead to avoid potential
            competition between multiple plasmids for the same gene inserts.
            Ultimately, the centromeric pAN316a was selected due to its
            stability in regards to transformation, as well as its relatively
            inexpensive price. Although the pRS shuttle vectors were initially
            what was in mind, the pAN316a was chosen as it was sourced locally
            from a professor, contained similar characteristics to the pRS
            series, and shared the same restriction enzyme orientation. Sharing
            the same orientation, in this regard, was especially important as it
            ensures the predicted direction of expression and further
            verification steps for cloning.
          </p>
          <p>
            Parts from the open yeast collection (OYC) are constructed into a
            Level 1 transcription unit to be inserted into the plasmid vector.
            This transcription unit features the genes specific to optimizing
            the lipid synthesis pathway. However, all promoters sourced from the
            OYC contained 5’ untranslated regions (UTRs), posing an issue when
            later assembled alongside the RNAt, which contains an innate 5’ UTR
            of its own. Having two 5’ UTRs would cause interference between
            ribosomal binding sites, and risks improper translation efficiency.
            To combat this problem, promoters were ordered lacking their
            respective 5’ UTRs, such that the one of the RNAt remains the only
            functioning ribosomal binding site (RBS).
          </p>
          <p>
            Furthermore, the removal of the native 5’ UTRs of the OYC promoters
            required the selection of a core promoter to maintain the necessary
            host transcriptional machinery. This core promoter sequence,
            condensed to 69 base pairs, optimized transcriptional activity while
            avoiding downstream translational interferences by lacking a native
            5’ UTR.
          </p>
          <h2 className="mb-4 text-xl font-medium text-foreground">Level 0</h2>
          <p>
            The Level 0 parts consist of compatible sequences flanked by BsmBI
            and digested to form a Level 1 transcription unit. These sequences
            consist of the promoter, 5’ UTR, CDS, and 3’UTR/terminator.
          </p>
          <h2 className="mb-4 text-xl font-medium text-foreground">Level 1</h2>
          <p>
            The Level 1 parts are joined together by flanking each end with BsaI
            overhangs, then digesting to form a Level 2 transcription unit. The
            Level 1 parts differ by their own unique promoter-terminator pair
            and coding sequences (CDS). As suggested to us by Dr. Cinzia Klemm,
            incorporating unique promoter-terminator pairs within each part
            allows for the prevention of accidental homologous recombination.
            Homologous recombination can occur between repetitive sequences in
            the yeast, and risks unwanted deletions in the final construct. The
            CDS of each part features ACC1, DGA1, OLE1, TPS1, and the RNAt
            within the 5’ UTR of the BGL2. The RNAt is embedded within the 5’
            UTR of the BGL2 to ensure its lysis-facilitating properties
            selectively occur at RNAt-specific temperatures.
          </p>
          <Image
            src="/documentation/rnat bgl2 plasmid.png"
            alt="pAN316a plasmid"
            width={400}
            height={400}
            className="border border-border"
          />
          <h2 className="mb-4 text-xl font-medium text-foreground">Level 2</h2>
          <p>
            The Level 2 transcription unit is flanked by BsmBI sites and
            integrated into the plasmid vector, pAN316a, through digestion and
            ligation with EcoRI and SpeI enzymes. COMING SOON
          </p>
          <Image
            src="/documentation/pAN316a plasmid.png"
            alt="pAN316a plasmid"
            width={400}
            height={400}
            className="border border-border"
          />
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

        <WikiSection id="opportunity" title="Market Opportunity">
          <p>
            The alternative protein market and where animal-free fat fits within
            it. Content coming soon.
          </p>
        </WikiSection>

        <WikiSection id="model" title="Business Model">
          <p>
            How MEYcell reaches producers and scales from pilot to production.
            Content coming soon.
          </p>
        </WikiSection>

        <WikiSection id="roadmap" title="Roadmap">
          <p>
            Milestones from proof of concept to commercial partnership. Content
            coming soon.
          </p>
        </WikiSection>
      </WikiPage>
    </>
  );
}
