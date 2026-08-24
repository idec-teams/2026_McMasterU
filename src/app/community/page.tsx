import { Banner } from "@/components/wiki/Banner";
import { ReferencesSection } from "@/components/wiki/ReferencesSection";
import { WikiPage } from "@/components/wiki/WikiPage";
import { WikiSection } from "@/components/wiki/WikiSection";
import { createCitations } from "@/lib/wiki/citations";

export const metadata = {
  title: "Community — MEYcell",
};


const stakeholderGroups = [
  {
    id: "industry",
    title: "Industry",
    people: [
      { id: "industry-person-a", label: "Person A" },
      { id: "industry-person-b", label: "Person B" },
      { id: "industry-person-c", label: "Person C" },
    ],
  },
  {
    id: "academia",
    title: "Academia",
    people: [
      { id: "academia-person-a", label: "Person A" },
      { id: "academia-person-b", label: "Person B" },
      { id: "academia-person-c", label: "Person C" },
    ],
  },
  {
    id: "farms",
    title: "Farms",
    people: [
      { id: "farms-person-a", label: "Person A" },
      { id: "farms-person-b", label: "Person B" },
      { id: "farms-person-c", label: "Person C" },
    ],
  },
] as const;


function PersonCard({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="rounded-xl border border-border bg-card/80 p-3 text-center transition-colors hover:border-primary/60"
    >
      <div className="mx-auto mb-2 h-12 w-12 rounded-md border border-border bg-surface/60" />
      <p className="text-sm font-medium text-foreground">{label}</p>
    </a>
  );
}


function DetailBlock({
  id,
  label,
  description,
  outcome,
}: {
  id: string;
  label: string;
  description: string;
  outcome: string;
}) {
  return (
    <div id={id} className="space-y-3 rounded-xl border border-border bg-card/80 p-4">
      <div className="flex min-h-[120px] items-center justify-center rounded-md border border-dashed border-border bg-surface/30 text-sm text-body">
        [image]
      </div>
      <p className="text-sm font-medium uppercase tracking-[0.16em] text-body">
        {label}
      </p>
      <div className="space-y-2 text-sm leading-relaxed text-body">
        <p>
          <span className="font-medium text-foreground">Description:</span> {description}
        </p>
        <p>
          <span className="font-medium text-foreground">Outcome:</span> {outcome}
        </p>
      </div>
    </div>
  );
}

const { references } = createCitations([
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
]);

export default function CommunityPage() {
  return (
    <>
      <Banner eyebrow="Community" title="Human Practices & Outreach">
        <p>
          How MEYcell engages with communities, stakeholders, and the public.
        </p>
      </Banner>

      <WikiPage>
        <WikiSection id="overview" title="Overview">
          <div className="flex min-h-[160px] items-center justify-center rounded-xl border border-border bg-card/80 p-5 text-sm text-body">
            Overview
          </div>
        </WikiSection>

        <WikiSection id="stakeholders" title="Stakeholders">
          <div className="space-y-5">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-body">
              [overview]
            </p>
            <div className="flex min-h-[180px] items-center justify-center rounded-xl border border-border bg-card/80 p-5 text-center text-sm text-body">
              stakeholder analysis image
            </div>

            <div className="space-y-5">
              {stakeholderGroups.map((group) => (
                <div key={group.id} className="space-y-3">
                  <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-body">
                    {group.title}
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {group.people.map((person) => (
                      <PersonCard
                        key={person.id}
                        label={person.label}
                        href={`#${person.id}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </WikiSection>
{/* make into subsections */}
        <WikiSection id="industry" title="Industry">
          <div className="space-y-4">
            <DetailBlock
              id={stakeholderGroups[0].people[0].id}
              label="Person A"
              description="[coming soon]"
              outcome="[coming soon]"
            />
            <DetailBlock
              id={stakeholderGroups[0].people[1].id}
              label="Person B"
              description="[coming soon]"
              outcome="[coming soon]"
            />
            <DetailBlock
              id={stakeholderGroups[0].people[2].id}
              label="Person C"
              description="[coming soon]"
              outcome="[coming soon]"
            />
          </div>
        </WikiSection>

        <WikiSection id="academia" title="Academia">
          <div className="space-y-4">
            <DetailBlock
              id={stakeholderGroups[1].people[0].id}
              label="Person A"
              description="[coming soon]"
              outcome="[coming soon]"
            />
            <DetailBlock
              id={stakeholderGroups[1].people[1].id}
              label="Person B"
              description="[coming soon]"
              outcome="[coming soon]"
            />
            <DetailBlock
              id={stakeholderGroups[1].people[2].id}
              label="Person C"
              description="[coming soon]"
              outcome="[coming soon]"
            />
          </div>
        </WikiSection>

        <WikiSection id="farms" title="Farms">
          <div className="space-y-4">
            <DetailBlock
              id={stakeholderGroups[2].people[0].id}
              label="Person A"
              description="[coming soon]"
              outcome="[coming soon]"
            />
            <DetailBlock
              id={stakeholderGroups[2].people[1].id}
              label="Person B"
              description="[coming soon]"
              outcome="[coming soon]"
            />
            <DetailBlock
              id={stakeholderGroups[2].people[2].id}
              label="Person C"
              description="[coming soon]"
              outcome="[coming soon]"
            />
          </div>
        </WikiSection>

        <WikiSection id="contact" title="Contact">
          <p>COMING SOON</p>
        </WikiSection>

        <WikiSection id="initiatives" title="Initiatives">
          <p>COMING SOON</p>
        </WikiSection>

        <WikiSection id="surveys" title="Surveys">
              <p>COMING SOON</p>
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
