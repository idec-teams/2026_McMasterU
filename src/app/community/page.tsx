import type React from "react";
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
  image,
}: {
  id: string;
  label: string;
  description: React.ReactNode;
  outcome: React.ReactNode;
  image: string;
}) {
  return (
    <div id={id} className="space-y-3 border border-border bg-card/80 p-4">
      <div className="flex h-[280px] items-center justify-center">
        {image ? (
          <div className="inline-block border border-border bg-surface/30 p-2">
            <img
              src={image}
              alt={label}
              className="block h-[260px] w-auto object-cover object-top"
            />
          </div>
        ) : (
          <span className="absolute bottom-4 left-4 text-sm text-body">
            [image]
          </span>
        )}
      </div>
      <p className="text-sm font-medium uppercase tracking-[0.16em] text-body">
        {label}
      </p>
      <div className="space-y-2 text-sm leading-relaxed text-body">
        <div>
          <span className="font-medium text-foreground">Inquire:</span>{" "}
          {description}
        </div>
        <div>
          <span className="font-medium text-foreground">Reach Out:</span>{" "}
          {outcome}
        </div>
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
              description={
                <div className="space-y-3">
                  <p className="italic">
                    What social perspectives should we use when discussing food
                    pleasure and the importance of a diet?
                  </p>
                  <p>
                    One of the biggest things to note was that there is quite a
                    bit of confusion between what cultivated meat is vs what
                    plant based is? Eating meat does matter, culturally it holds
                    a great amount of significance for many communities around
                    the world. Food is also an inherently social thing, people
                    often gather around food and because it is something
                    necessary to sustain life it is something worth researching.
                    It also begs the question is there something inherently
                    wrong with lab made meat, or does it evoke emotion because
                    it is different, and change is hard.
                  </p>
                </div>
              }
              outcome={
                <div className="space-y-3">
                  <p>
                    We reached out to many philosophers and our team met with
                    Dr. Josh Milburn senior lecturer at Queen’s university
                    Belfast to discuss cultivated meat and the social quorum
                    that is alongside it.
                  </p>
                  <p>
                    Dr. Milburn is a philosopher who has written many articles
                    on the ethics of cultivated meat, and he has a particular
                    interest in virtue ethics. We wanted to understand
                    cultivated meat in a holistic sense, a large angle of the
                    benefit of cultivated meat is the proposed reduction of harm
                    to the animals that would have otherwise been consumed.
                    Dr.Milburn writes an article “The virtues of cultivated
                    meat” which we discussed, mainly from an animal rights
                    perspective. Virtue ethics adds to this discussion, bringing
                    up possibilities of a “temperate” person being okay with
                    plants and nothing more, but Dr.Milburn is not convinced of
                    this view.
                  </p>
                  <p>
                    Alongside the subsequent animal cruelty that often comes
                    with the animal agricultural industry there are
                    environmental side effects , compared to the production of
                    cultivated meat which would only indirectly impact animals.
                    If we can get to a point where cultivated meat matches
                    conventional meat in taste, standard and price would only
                    the social aspect be holding us back.
                  </p>
                  <p>
                    When communicating with people about this subject its
                    important to bring up relevant ideas such as the possibility
                    for less suffering of animals, less water and land waste,
                    less impact towards climate change, more food security,
                    better public health. More densely populated countries would
                    benefit better. There is a lot of misinformation and
                    assumption about vegetarian and vegan diets being healthier,
                    but this is simply nott the truth as there can be both
                    healthy and unhealthy aspects of all diets. If we can get
                    consumers to connect with something that personally moves
                    them it may be easier to convince them to adopt cultivated
                    meat.
                  </p>
                </div>
              }
              image="/hp comms/dr milburn.png"
            />
            <DetailBlock
              id="dr_ruder"
              label="Dr. Sarah Louise-Ruder"
              description={<p></p>}
              outcome="[coming soon]"
              image="/hp comms/dr ruder.webp"
            />
          </div>
        </div>

        <div id="industry" className="mt-10 space-y-4">
          <h2 className="text-lg font-medium text-foreground">Industry</h2>
          <div className="space-y-4">
            <DetailBlock
              id="allison_penner"
              label="Allison Penner"
              description={
                <div className="space-y-3">
                  <p>
                    In what ways can alternative proteins and cultivated meat
                    help address challenges faced by agriculture and food
                    sustainability in Canada? How can the development of
                    cultivated meat complement existing agricultural systems,
                    such as farmers? What approaches to scientific communication
                    can be used to build trust and foster acceptance?
                  </p>
                </div>
              }
              outcome={
                <div className="space-y-3">
                  <p>
                    We spoke with Allison Penner, the Founder and Executive
                    Director of Reimagine Agriculture. Reimagine Agriculture is
                    a Canadian charity-based organization, dedicated towards
                    building sustainable food systems through advocating for
                    food technology, such as cultivated meat, and supporting
                    plant-based systems.
                  </p>
                  <p>
                    Allison highlighted carbon emissions—a large contributing
                    factor to the current challenges of agriculture and food
                    sustainability—having significant potential to be reduced by
                    the introduction of alternative proteins and cultivated
                    meat. Moreover, she expressed that a substantial amount of
                    land in Canada is dedicated towards agriculture. Extreme
                    weather conditions inflicted by climate change, however,
                    lead to a large issue for farmers; risking low crop yield.
                  </p>
                  <p>
                    When it came to discussing agricultural “job transitions”,
                    we inquired about how advancements in food technology could
                    remain mutually beneficial with farmers. Allison noted that
                    although Canada is not yet at the stage where cultivated
                    meat technologies are capable of replacing livestock
                    farming, it is already being employed in projects across the
                    world alongside farms. Additionally, she mentioned how
                    Canadian farms can be stretched thin due to Canada being a
                    large food exporter—in this regard, cultivated meat
                    technologies would be able to relieve the supply-demand gap
                    seen in food systems.
                  </p>
                  <p>
                    Furthermore, one key concern we wanted to address was the
                    role of scientific communication in influencing public
                    perceptions of cultivated meat. Our conversation with
                    Allison sparked different ways to go about communicating the
                    importance of cellular agriculture. Simplicity and jargon
                    usage is essential to ensure the audience understands
                    current limitations of traditional meat, and how our project
                    aims to fill those gaps. Using analogies such as yeast
                    “brewing beer” would serve as a familiar background to
                    introduce our project, and introducing a concept such as
                    fecal bacteria contamination raises awareness to one of the
                    many negative aspects of traditional meat.
                  </p>
                  <p>
                    Lastly, Allison emphasized using a more educational approach
                    for raising awareness. She recognized that although there
                    will always be trends (such as hitting protein goals),
                    resources such as the Canadian food guide and Harvard
                    Healthy Eating Plate are ways to exemplify how high meat
                    diets are not the standard of eating healthy.
                  </p>
                </div>
              }
              image="/hp comms/allison penner.jpg"
            />
            <DetailBlock
              id="james_vanderberg"
              label="James VanderBerg"
              description={
                <div className="space-y-3">
                  <p>
                    A central component of our project is understanding and
                    incorporating the needs of those most affected by
                    food-related challenges in Hamilton. In our region,
                    community members’ livelihoods are affected by the rising
                    costs of groceries, barriers to employment, and housing
                    insecurity, all related to food affordability or access. To
                    better understand these issues, we met with James
                    VanderBerg, the Fund Development Officer & Interim Executive
                    Director of the Welcome Inn Community Centre. In our
                    meeting, we discussed community members’ hesitations on
                    plant-based meat alternatives, ways to support those most
                    affected, and methods for improving the implementation
                    process. (not sure to include this: Through this, we
                    identified why community members may be reluctant to
                    introduce plant-based meat alternatives into their diets and
                    explored ways to reduce these concerns.)
                  </p>
                </div>
              }
              outcome={
                <div className="space-y-3">
                  <p>
                    Meeting with James VanderBerg gave us a clear picture of
                    food-related challenges in our community, especially as 47%
                    of newcomers to Hamilton depend on this food bank. He
                    described these challenges as a community-based problem and,
                    while important, not limited to cultural, faith, or ethnic
                    hesitancies. He added that many newcomers to Hamilton are
                    vegetarian, and their food preferences are often not
                    available at food banks, as many prioritize meat-based
                    proteins. James discussed that this creates obstacles for
                    food banks in managing the cost-effectiveness of supplies
                    while staying attuned to community members' needs.
                  </p>
                  <p>
                    The issues surrounding food affordability and insecurity are
                    extensive and affect many community members. He described
                    the key challenges around food affordability as the cost of
                    groceries and housing issues. He added that the costs of
                    groceries are not comparable to what is earned through
                    income. In addition, he mentioned that recipients of the
                    Ontario Disability Support Program (ODSP) also face barriers
                    and do not have the ability to live comfortably.
                  </p>
                  <p>
                    When asked who he thinks may have a harder time adjusting to
                    plant-based meat alternatives, he said many community
                    members may view them as ‘unnatural’ compared to their diets
                    which consist of beans, nuts, etc. Hesitations may also stem
                    from previous implementations of entry-level plant-based
                    meat that were poorly packaged. They described it as being
                    lower quality, and many were reluctant to adopt it because
                    of their traditional diets. Additionally, poorly packaged
                    meat created additional hesitations because consumers
                    couldn't easily understand how to use a specific product or
                    what the ingredients were.
                  </p>
                </div>
              }
              image="/hp comms/james vanderberg.jpg"
            />
          </div>
        </div>

        <WikiSection id="initiatives" title="Initiatives">
          <InitiativesCarousel
            initiatives={[
              {
                id: "welcomeinn",
                title: "WelcomeInn",
                description: "[coming soon]",
                outcome: "[coming soon]",
                images: [],
              },
            ]}
          />
          <InitiativesCarousel
            initiatives={[
              {
                id: "cooksmart",
                title: "COOKSMART Summer Camp",
                description: "[coming soon]",
                outcome: "[coming soon]",
                images: [
                  "/hp comms/setup cooksmart.png",
                  "/hp comms/cooksmart poster.png",
                  "/hp comms/cooksmart vol.png",
                ],
              },
            ]}
          />
          <InitiativesCarousel
            initiatives={[
              {
                id: "mission_services",
                title: "Mission Services of Hamilton",
                description: "[coming soon]",
                outcome: "[coming soon]",
                images: [
                  "/hp comms/setup MS1.png",
                  "/hp comms/setup MS2.png",
                  "/hp comms/MS vol.png",
                ],
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
