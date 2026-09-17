import { Banner } from "@/components/wiki/Banner";
import { InitiativesCarousel } from "@/components/wiki/InitiativesCarousel";
import { ReferencesSection } from "@/components/wiki/ReferencesSection";
import { WikiPage } from "@/components/wiki/WikiPage";
import { WikiSection } from "@/components/wiki/WikiSection";
import { createCitations } from "@/lib/wiki/citations";

export const metadata = {
  title: "Community — MEYcell",
};

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
    <div id={id} className="space-y-3 border border-border bg-card/80 p-4">
      <div className="relative min-h-[200px] bg-surface/30">
        <span className="absolute bottom-4 left-4 text-sm text-body">
          [image]
        </span>
      </div>
      <p className="text-sm font-medium uppercase tracking-[0.16em] text-body">
        {label}
      </p>
      <div className="space-y-2 text-sm leading-relaxed text-body">
        <p>
          <span className="font-medium text-foreground">Inquire:</span>{" "}
          {description}
        </p>
        <p>
          <span className="font-medium text-foreground">Reach Out:</span>{" "}
          {outcome}
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
      <Banner title="Community" src="/banners/community.png">
        <p>
          How MEYcell engages with communities, stakeholders, and the public.
        </p>
      </Banner>

      <WikiPage>
        <WikiSection id="overview" title="Overview">
          <p>
            Cultivated meat is a subject that has taken the world by storm in
            recent years. With the influx of food insecurity, the rising issue
            of antibiotic resistance, and the rise of animal welfare rights,
            cultivated food has entered the picture. Synbio’s project this year
            focused on enhancing the flavour and taste of these products. While
            many products exist, many of them lack the appeal to compete with
            traditional meat. There are many aspects of this project that we
            explored, including the history, socioeconomic considerations,
            environmental concerns, community needs, and more.
          </p>
          <p>
            Beginning with the history of cultivated meat, given that it is a
            new topic, it is important to note that the agricultural industry
            has been contributing negatively. It should also be noted that there
            is a crossover with the medical industry, as both cultivated meat
            and tissue engineering are similar in technicality. In the 1990s, a
            Dutch researcher, Willem Van Eelen, used cell cultures to produce
            meat, and in 202, Van Eelen used cell cultures to produce meat.
          </p>

          <p>
            When it comes to socioeconomic considerations, there are many
            factors to consider. Firstly, there is the rise of the animal rights
            movement, with key groups like PETA (People for the Ethical
            Treatment of Animals) advocating for better treatment of animals in
            the agricultural and cosmetics industries, and overall lobbying for
            the total and whole discarding of meat consumption. Additionally, as
            we head into a recession, meat has become a more expensive item and
            is no longer traditionally an affordable item. Coinciding with this,
            in Western media recently, there has been a health lifestyle push,
            notably putting an emphasis on protein intake, much of which comes
            from supplements or meat. Currently, cultivated meat or alternative
            meats may not provide comparable metrics in protein alongside taste.
          </p>
          <p>
            Environmentally, when looking at the agricultural industry, there
            are a lot of climate crises that are connected to the agricultural
            industry. The amount of land and water that is used to raise animals
            is significant. 16.5% of greenhouse emissions are from traditional
            meat. The land that is currently used for traditional meat could be
            reused for the deployment of renewable energy farms to combat our
            ongoing climate crisis. Additionally, surplus land is important to
            mediate other issues, including deforestation. This opens up the
            opportunity for urban agriculture as well. Water and energy use are
            something to note also. Lab-made meat could be a decrease of 82–96%
            in water consumption, notably dependent on the sort of meat produced
            (Oxford, 2019). Cultivated meat can have amazing carbon footprints,
            being up to 92% less than beef, 44% less than pork, and around the
            same as chicken (Sinke, 2021. In conclusion the project aims to look
            at cultivated meat as a solution to the current crisis and building
            on some of the gaps within cultivated meat.
          </p>
        </WikiSection>

        <WikiSection id="stakeholders" title="Stakeholders">
          <div className="space-y-5">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-body">
              [overview]
            </p>
            <figure>
              <div className="min-h-[180px] border border-border bg-card/80"></div>
              <figcaption className="mt-2 text-sm text-body">
                Stakeholder analysis image
              </figcaption>
            </figure>
          </div>
        </WikiSection>

        <div id="academia" className="space-y-4">
          <h2 className="text-lg font-medium text-foreground">Academia</h2>
          <div className="space-y-4">
            <DetailBlock
              id="dr_milburn"
              label="Dr. Josh Milburn"
              description="[coming soon]"
              outcome="[coming soon]"
            />
            <DetailBlock
              id="dr_ruder"
              label="Dr. Sarah Louise-Ruder"
              description="[coming soon]"
              outcome="[coming soon]"
            />
          </div>
        </div>

        <div id="industry" className="mt-10 space-y-4">
          <h2 className="text-lg font-medium text-foreground">Industry</h2>
          <div className="space-y-4">
            <DetailBlock
              id="person_a"
              label="Person A"
              description="[coming soon]"
              outcome="[coming soon]"
            />
            <DetailBlock
              id="person_b"
              label="Person B"
              description="[coming soon]"
              outcome="[coming soon]"
            />
            <DetailBlock
              id="person_c"
              label="Person C"
              description="[coming soon]"
              outcome="[coming soon]"
            />
          </div>
        </div>

        <WikiSection id="initiatives" title="Initiatives">
          <InitiativesCarousel
            initiatives={[
              {
                id: "initiative-a",
                title: "[coming soon]",
                description: "[coming soon]",
                outcome: "[coming soon]",
              },
              {
                id: "initiative-b",
                title: "[coming soon]",
                description: "[coming soon]",
                outcome: "[coming soon]",
              },
              {
                id: "initiative-c",
                title: "[coming soon]",
                description: "[coming soon]",
                outcome: "[coming soon]",
              },
            ]}
          />
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
