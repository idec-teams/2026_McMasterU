import type React from "react";
import { Banner } from "@/components/wiki/Banner";
import { InitiativesCarousel } from "@/components/wiki/InitiativesCarousel";
import { ReferencesSection } from "@/components/wiki/ReferencesSection";
import { WikiPage } from "@/components/wiki/WikiPage";
import { WikiSection } from "@/components/wiki/WikiSection";
import { asset } from "@/lib/wiki/asset";
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
  image2,
  video,
}: {
  id: string;
  label: string;
  description: React.ReactNode;
  outcome: React.ReactNode;
  image: string;
  image2?: string;
  video?: string;
}) {
  return (
    <div id={id} className="space-y-3 border border-border bg-card/80 p-4">
      <div className="flex h-[280px] items-center justify-center gap-4">
        {image ? (
          <>
            <div className="inline-block border border-border bg-surface/30 p-2">
              <img
                src={asset(image)}
                alt={label}
                className="block h-[260px] w-auto object-cover object-top"
              />
            </div>
            {image2 ? (
              <div className="inline-block border border-border bg-surface/30 p-2">
                <img
                  src={image2}
                  alt={`${label} meeting`}
                  className="block h-[260px] w-auto object-cover object-top"
                />
              </div>
            ) : null}
          </>
        ) : (
          <span className="absolute bottom-4 left-4 text-sm text-body">
            [image]
          </span>
        )}
      </div>
      <p className="text-sm font-medium uppercase tracking-[0.16em] text-body">
        {label}
      </p>
      <div className="space-y-3 text-sm leading-relaxed text-body">
        {description}
        {outcome}
      </div>
      {video ? (
        <div className="pt-8">
          <div className="aspect-video w-full overflow-hidden border border-border bg-black">
            <video
              controls
              preload="metadata"
              className="h-full w-full object-contain"
            >
              <source src={asset(video)} type="video/mp4" />
              Your browser doesn't support embedded video.
            </video>
          </div>
        </div>
      ) : null}
    </div>
  );
}

const { references } = createCitations([
  {
    id: "aspca2026",
    authors: "The American Society for the Prevention of Cruelty to Animals.",
    title: "Factory farming: A recipe for disaster for Animals & Our Planet.",
    source: "ASPCA",
    year: 2026,
    url: "https://www.aspca.org/protecting-farm-animals/factory-farming-environment",
  },
  {
    id: "milburn2026",
    authors: "Milburn, J.",
    title: "The virtues of cultivated meat.",
    source: "Journal of Agricultural and Environmental Ethics, 39(1)",
    year: 2026,
    url: "https://doi.org/10.1007/s10806-025-09967-z",
  },
  {
    id: "ruder2026",
    authors: "Ruder, S.L., Issac, J., Raja, A., & Newell, R.",
    title:
      "Acceptance and perceptions of cellular agriculture in Canadian food systems.",
    source: "ResearchGate",
    year: 2026,
    url: "https://doi.org/10.13140/RG.2.2.13172.51844",
  },
  {
    id: "sinke2021",
    authors: "Sinke, P., & Odegard, I.",
    title:
      "LCA of cultivated meat future projections for different scenarios ecoinvbron.",
    source: "CE Delft",
    year: 2021,
    url: "https://gfieurope.org/wp-content/uploads/2022/04/CE_Delft_190107_LCA_of_cultivated_meat_Def.pdf",
  },
  {
    id: "tuomisto2011",
    authors: "Tuomisto, H. L., & Teixeira de Mattos, M. J.",
    title: "Environmental impacts of cultured meat production.",
    source: "Environmental Science & Technology, 45(14), 6117–6123",
    year: 2011,
    url: "https://doi.org/10.1021/es200130u",
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
        <WikiSection
          id="overview"
          title="Community Outreach: From Conversation To Cultivation"
        >
          <p>
            Before science, MEYCell was formed with the intention of serving the
            community. To create a project that was both <b>innovative</b> and{" "}
            <b>intentional</b>. Community Outreach ensured MEYCell’s work
            remained ethical and socioeconomically responsible through extensive
            feedback loops that engaged conversation, feedback, and integration.
          </p>
          <p>
            Cultivated meat is a subject that has taken the world by storm in
            recent years. The influx of food insecurity, increased antibiotic
            resistance through traditional livestock farming, and unethical
            animal welfare practices, to name a few, has resulted in a rise of
            alternative meat products entering the market. Global meat
            consumption has risen exponentially following the global population
            rise, and many industries now seek to combat sustainability threats
            associated with farming traditional meat through sourcing
            alternative proteins.
          </p>

          <p>
            Socioeconomically, there are many benefits to alternative protein
            products. Firstly, there is the rise of the animal rights movement,
            with key groups like PETA (People for the Ethical Treatment of
            Animals) advocating for better treatment of animals in the
            agricultural and cosmetics industries, and overall lobbying for the
            total and whole discarding of meat consumption. Additionally, as we
            head into a recession, meat has become a more expensive item and is
            no longer traditionally an affordable item. Coinciding with this
            recession, Western media has continued glamorizing healthy
            lifestyles, notably putting an emphasis on protein intake coming
            from supplements or meat. Currently, cultivated and alternative
            meats do not provide comparable metrics in protein alongside taste.
          </p>
          <p>
            From an environmental perspective, there are a lot of climate crises
            that are connected to the agricultural industry. The amount of land
            and water that is used to raise animals is significant. 14.5% of
            greenhouse emissions are from traditional meat (The American Society
            for the Prevention of Cruelty to Animals, 2026). The land that is
            currently used for traditional meat could be reused for the
            deployment of renewable energy farms to combat our ongoing climate
            crisis. Additionally, surplus land is important to mediate other
            issues, including deforestation. This opens up the opportunity for
            urban agriculture as well. Water and energy use are also something
            to note. Lab-made meat could result in a decrease of 82–96% in water
            consumption, notably dependent on the sort of meat produced
            (Tuomisto & Teixeira de Mattos, 2011). Cultivated meat can have
            amazing carbon footprints, being up to 92% less than beef and 44%
            less than pork (Sinke & Odegard, 2021).
          </p>
          <p>
            With a solid foundation of social considerations, MEYCell’s
            community outreach initiatives aimed to look at cultivated meat as a
            solution to the current crisis and build on some of the gaps within
            cultivated meat.
          </p>

          <h2 className="mb-4 text-xl font-medium text-foreground">
            The IRUS Framework
          </h2>
          <p>
            In 2024, the McMasterU team members developed a framework inspired
            by <b>problem-based learning</b> (PBL). Pioneered at McMaster
            University and now used worldwide, PBL encourages learning through
            an inquiry-based approach and facilitates open discussion between
            peers and experts. Honouring our community in our work, McMasterU
            approaches our projects with the same curiosity and collaboration
            celebrated on our very campus.
          </p>

          <p>
            IRUS allowed our team to navigate every angle of MEYCell in four
            stages –
          </p>
          <p>
            <b>Inquire:</b> Identify aspects, questions, and decisions within
            our project that require external input. Who are we impacting? How
            are we impacting them? What can we do to help them?
          </p>
          <p>
            <b>Reach Out:</b> Engage with relevant experts to gather
            perspectives, exchange ideas, and learn more about how our project
            can address real-world needs.
          </p>
          <p>
            <b>Understand:</b> Explore how our project may fit into existing
            communities, systems, and structures, and consider the perspectives
            and needs of those affected.
          </p>
          <p>
            <b>Synthesize:</b> Make changes to our project design based on
            expert and community feedback, adapting our research and approach to
            reflect diverse input.
          </p>
          <img
            src={asset("/hp comms/ires.png")}
            alt="ires framework"
            width={350}
            height={300}
            className="mx-auto block border border-border"
          />
          <p>
            This framework allowed for continuous learning and improvement of
            MEYCell throughout the project’s cycle, ensuring that community
            integration was not simply an afterthought, but an integral part of
            our purpose in investing in responsible science.
          </p>
        </WikiSection>

        <WikiSection
          id="stakeholders"
          title="INQUIRE: From Lab Bench to Dinner Table – Who Are We Feeding?"
        >
          <div className="space-y-5">
            <p>
              As MEYCell was being characterized, the team brainstormed people
              and groups who could be impacted by any aspect of the project. The
              goal was to connect with as many experts, communities, industries,
              and establishments as possible; this exercise gave us an
              expectations baseline of our possibilities within the city of
              Hamilton and the global sphere. From the very first iteration of
              MEYCell, Community Outreach was integrated into the project’s
              design to ensure every decision made behind the scenes was
              intentional and good for those we aimed to serve.
            </p>
            <figure>
              <img
                src={asset("/hp comms/stakeholder analysis.png")}
                alt="Stakeholder analysis"
                className="mx-auto block w-full border border-border"
              />
              <figcaption className="mt-2 text-sm text-body">
                First draft of MEYCell’s Interest Group Map (March 2026).
              </figcaption>
            </figure>
          </div>
        </WikiSection>

        <WikiSection
          id="experts"
          title="REACH OUT: Our Recipe For Collaboration"
        >
          <div id="academia and industry" className="space-y-4">
            <div className="space-y-4">
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
                      insecurity, all related to food affordability or access.
                      To better understand these issues, we met with{" "}
                      <b>
                        James VanderBerg, the Fund Development Officer & Interim
                        Executive Director of the Welcome Inn Community Centre
                      </b>
                      . In our meeting, we discussed community members’
                      hesitations on plant-based meat alternatives, ways to
                      support those most affected, and methods for improving the
                      implementation process. Through this, we identified why
                      community members may be reluctant to introduce
                      plant-based meat alternatives into their diets and
                      explored ways to reduce these concerns.
                    </p>
                  </div>
                }
                outcome={
                  <div className="space-y-3">
                    <p>
                      Meeting with James gave us a clear picture of food-related
                      challenges in our community. We learned that 47% of
                      newcomers to Hamilton depend on the Welcome Inn foodbank.
                      He described these challenges as a community-based problem
                      and not limited to cultural, faith, or ethnic hesitancies.
                      He added that many newcomers to Hamilton are vegetarian,
                      and their food preferences are often not available at food
                      banks, as many prioritize meat-based proteins. James
                      discussed that this creates obstacles for food banks in
                      managing the cost-effectiveness of supplies while staying
                      attuned to community members' needs.
                    </p>
                    <p>
                      The issues surrounding food affordability and insecurity
                      are extensive and affect many community members. He
                      described the key challenges around food affordability as
                      being the cost of groceries and housing issues. Moreover,
                      the costs of groceries are not comparable to what is
                      earned through income. Recipients of the Ontario
                      Disability Support Program (ODSP) also face barriers and
                      cannot live comfortably.
                    </p>
                    <p>
                      When asked who he thinks may have a harder time adjusting
                      to plant-based meat alternatives, he said many community
                      members may currently view it as ‘unnatural’ compared to
                      common vegetarian diets which consist of beans and nuts.
                      Hesitations may also stem from previous implementations of
                      entry-level plant-based meat that were poorly packaged.
                      They described it as being lower quality, and many were
                      reluctant to adopt it because of their traditional diets.
                      Additionally, poorly packaged meat created additional
                      hesitations because consumers couldn't easily understand
                      how to use a specific product or what the ingredients
                      were.
                    </p>
                    <p>
                      Our meeting with James gave us vast insight into the
                      current food needs of our local communities, while
                      confirming what kinds of hesitations and objections
                      MEYCell may face in our local community. With this
                      knowledge, we aimed to address these challenges with our
                      team and find opportunities to communicate our project in
                      feasible and educational ways around Hamilton, speaking
                      with the community members who access the foodbank more
                      personally.
                    </p>
                  </div>
                }
                image="/hp comms/james vanderberg.jpg"
                video="/hp comms/McMaster SynBio Human Practices Meeting-20260306_133235-Meeting Recording.mp4"
              />
              <DetailBlock
                id="allison_penner"
                label="Allison Penner"
                description={
                  <div className="space-y-3">
                    <p>
                      With significant climate issues associated with the
                      agricultural sector, and current food sustainability
                      issues in Canada, we wanted to learn how alternative
                      proteins and the development of cultivated meat can not
                      only address these challenges, but also complement
                      existing systems such as the farming sector. With the rise
                      of new food technology and fears of it dominating
                      agricultural and farming practices, what approaches to
                      scientific communication can be used to build trust and
                      foster acceptance?
                    </p>
                  </div>
                }
                outcome={
                  <div className="space-y-3">
                    <p>
                      We spoke with{" "}
                      <b>
                        Allison Penner, the Founder and Executive Director of
                        Reimagine Agriculture
                      </b>
                      . Reimagine Agriculture is a Canadian charity-based
                      organization dedicated to building sustainable food
                      systems through advocating for food technology, such as
                      cultivated meat, and supporting plant-based systems.
                    </p>
                    <p>
                      Allison highlighted carbon emissions—a large contributing
                      factor to the current challenges of agriculture and food
                      sustainability—having significant potential to be reduced
                      by the introduction of alternative proteins and cultivated
                      meat. Moreover, she expressed that a substantial amount of
                      land in Canada is dedicated to agriculture. Extreme
                      weather conditions inflicted by climate change, however,
                      lead to a large issue for farmers, risking low crop yield.
                    </p>
                    <p>
                      When it came to discussing agricultural “job transitions”,
                      we inquired about how advancements in food technology
                      could remain mutually beneficial with farmers. Allison
                      noted that although Canada is not yet at the stage where
                      cultivated meat technologies are capable of replacing
                      livestock farming, it is already being employed in
                      projects across the world alongside farms. Additionally,
                      she mentioned how Canadian farms can be stretched thin due
                      to Canada being a large food exporter. In this regard,
                      cultivated meat technologies would be able to relieve the
                      supply-demand gap seen in food systems.
                    </p>
                    <p>
                      In addressing our concerns on influencing public
                      perceptions of cultivated meat through appropriate
                      scientific communication, our conversation with Allison
                      sparked different ways to go about communicating the
                      importance of cellular agriculture. Simplicity and jargon
                      usage is essential to ensure the audience understands
                      current limitations of traditional meat, and how our
                      project aims to fill those gaps. Using analogies such as
                      yeast “brewing beer” would serve as a familiar background
                      to introduce our project, and introducing a concept such
                      as fecal bacteria contamination raises awareness of one of
                      the many negative aspects of traditional meat.
                    </p>
                    <p>
                      Lastly, Allison emphasized using a more educational
                      approach for raising awareness on alternative proteins.
                      She recognized that, although there will always be trends
                      (such as hitting protein goals), resources such as the
                      Canadian Food Guide and the Harvard Healthy Eating Plate
                      exemplify that high-meat diets are not the standard for
                      healthy eating.
                    </p>
                  </div>
                }
                image="/hp comms/allison penner.jpg"
                video="/hp comms/Synbio x Reimagine Agriculture.mp4"
              />

              <DetailBlock
                id="dr_milburn"
                label="Josh Milburn"
                description={
                  <div className="space-y-3">
                    <p>
                      What social perspectives should we use when discussing
                      food pleasure, the importance of diet, and where our
                      protein is sourced from? One of the biggest things we
                      realized in our outreach is the discourse surrounding
                      cultivated meat stretches far beyond the scientific space.
                      Culturally, eating meat holds a great amount of
                      significance for many communities around the world. Eating
                      food is also an inherently social practice; people often
                      gather, celebrate, make offerings, and perform rituals
                      surrounding food. This begged the question: what are the
                      ethics behind the imitation of traditional meat? Are there
                      cultural, religious, or even social perspectives the team
                      should keep in mind as our science evolves?
                    </p>
                    <p>
                      Our team had the pleasure of meeting with{" "}
                      <b>Dr. Josh Milburn</b> (PhD), a{" "}
                      <b>senior lecturer in political philosophy</b> at{" "}
                      <b>Loughborough Universit</b> in England. His affiliation
                      and interest in human-animal relations, food/animal
                      politics and ethics, and the cellular agriculture industry
                      allowed us to gain insight into the moral and ethical
                      implications behind our project, from the eyes of
                      philosophers, ethicists, and consumers.
                    </p>
                  </div>
                }
                outcome={
                  <div className="space-y-3">
                    <p>
                      In conversation, Dr. Milburn agreed that pleasure in
                      eating is a valuable perspective to consider that many
                      tend to underemphasize when considering alternative or
                      plant-based proteins; flavours are much more important to
                      people than it may seem, and substituting meat for
                      alternatives that are more sustainable and socially or
                      culturally acceptable can help ‘fill the gap’ to
                      transition away from traditional meat and meat farming.
                    </p>
                    <p>
                      Virtue ethics was a large topic of our conversation, and
                      answering the question:{" "}
                      <b>what kind of person should we want to be?</b> When
                      discussing cultivated meat, some philosophers (ex., Carlo
                      Alvaro, author and philosophy professor at New York City
                      College of Technology of the City University of New York)
                      argue that its consumption is intemperate, and that a
                      temperate person is not to desire foods simply based on
                      pleasure, but rather recognize that food is meant to keep
                      us alive and healthy (Milburn, 2026). Dr. Milburn let us
                      know he is not fully convinced of this view that
                      cultivated meat research and consumption are solely to
                      satisfy self-indulgent cravings, or that its creation is
                      entirely unnecessary, as many postulate.
                    </p>
                    <p>
                      Looking at cultivated meat from a holistic perspective, we
                      believe that our science reduces harm to animals that can
                      be caused in some traditional meat farming practices. When
                      asking Dr. Milburn about the ethical tradeoffs of
                      supplementing yeast growth with sugar and crop feedstocks
                      used in this project, compared to traditional animal
                      feedstock practices, he introduced an interesting
                      perspective about how precision fermentation technologies
                      impact people’s views on animals. The overarching
                      conclusion was that the gap in differing perspectives
                      between evolving precision fermentation technologies and
                      plant-based meats is minimal, and both still prove to be
                      leagues better than traditional practices used now. We
                      learned that many plant-based proteins, such as the
                      Impossible Burger, are still not favourable in the eyes of
                      vegetarian and vegan consumers due to the heme used being
                      tested on animals. Therefore, it is important we are
                      transparent in our project design and education on the
                      methods we use.
                    </p>
                    <p>
                      Finally, we learned from Dr. Milburn a crucial point to
                      keep in mind when communicating our science: people cannot
                      help but feel sensitive and judged when you suggest they
                      put something new into their bodies; our job is not to
                      condemn or suggest that their current lifestyles are
                      wrong. Approaching awareness, education, and acceptance
                      from a different angle, we need to determine what angle we
                      approach others from. He stressed the importance of
                      ‘having the right conversations’ – carefully choosing what
                      benefits we discuss depending on our audience. Acceptance
                      is typically tied to values, personalities, and politics;
                      many people may know how their food choices affect them,
                      but discourse gets hijacked by what he calls ‘shoddy
                      science,’ often stemming from misinformation.
                    </p>
                  </div>
                }
                image="/hp comms/dr milburn.png"
                video="/hp comms/Dr.Milburn X McMaster Synbio.mp4"
              />
              <DetailBlock
                id="dr_ruder"
                label="Sarah-Louise Ruder"
                description={
                  <div className="space-y-3">
                    <p>
                      Following up on the conversation of perceptions and
                      acceptance of cultivated meat, we spoke with{" "}
                      <b>Dr. Sarah-Louise Ruder</b> (PhD),{" "}
                      <b>
                        a researcher in the Food and Agriculture Institute at
                        the University of the Fraser Valley
                      </b>{" "}
                      specializing in the sustainability, security, and politics
                      of novel agri-food technologies. We discussed her report
                      on a large survey that asked Canadians about their
                      perspective on cellular agriculture and food technologies,
                      which found varying results of acceptance depending on
                      demographics (Ruder et al., 2026).
                    </p>
                    <p>
                      Dr. Ruder shared how individuals who were familiar with
                      food technology, special diet groups (ex., kosher, halal,
                      paleo, vegan, etc.), younger respondents, and those with
                      higher household incomes and post-secondary education were
                      among the groups that held more favourable positions
                      toward cellular agriculture and willingness to try. In our
                      outreach to individuals who work in the food space, she
                      believed that we would face positive perceptions as their
                      approval comes from practicality; if it benefits the
                      current agricultural and food systems, then it therefore
                      should be implemented.
                    </p>
                  </div>
                }
                outcome={
                  <div className="space-y-3">
                    <p>
                      Interestingly, neutral perspectives often come from a lack
                      of knowledge or personal impact in one’s own lifestyle.
                      Alternative proteins may not be appealing to those who do
                      not have any meat in their diet, or on the contrary, for
                      some who enjoy traditional meats regularly. However, she
                      considered that MEYCell’s goal of improving mouthfeel may
                      meaningfully improve acceptance, as pushback from the
                      general public on cultivated or plant-based proteins stems
                      from a significant dissimilarity to real meat.
                    </p>
                    <p>
                      Lastly, we discussed major active and impacted groups that
                      can be overlooked in the cellular agriculture
                      conversation, landing on the importance of considering the
                      Indigenous populations in Canada. Food is not just
                      nutrition to these communities, but a deep connection to
                      their culture, identity, land, and sovereignty. Keeping in
                      mind their autonomy over their food systems, the cultural
                      significance traditional meats have to their practices and
                      land relations, and evaluating accessibility and economic
                      barriers food technologies can cause were all new angles
                      to our project we had yet to explore. With this, our
                      outreach does not end at conversation. How can we
                      intentionally engage and incorporate the groups we are
                      impacting into our process, making sure their voices do
                      not get lost in the process? From this conversation, we
                      understood the importance of community involvement, from
                      beginning to end, when it comes to introducing novel ideas
                      into existing practices and systems.
                    </p>
                  </div>
                }
                image="/hp comms/dr ruder.webp"
                video="/hp comms/Dr_Ruder_SynBio.mp4"
              />
            </div>
            <div className="space-y-4"></div>
          </div>
        </WikiSection>

        <WikiSection
          id="initiatives"
          title="UNDERSTAND: The Stories That Shape Our Food"
        >
          <InitiativesCarousel
            initiatives={[
              {
                id: "welcome inn",
                title: "WELCOME INN",
                description: (
                  <>
                    <p>
                      One of our first initiatives was going to the{" "}
                      <b>Welcome Inn Community Centre</b>. We prepared a survey
                      for the clients centered around alternative meat, with
                      questions that touched upon familiarity with cultivated
                      meat, likelihood of incorporating it into one’s diet, and
                      whether environmental significance makes an impact on food
                      decisions. Additionally, we created a ranking-based
                      question where surveyees would assess the most influential
                      factors behind their decision-making process on choosing
                      protein products in general. For demographic
                      considerations, our questions also inquired about
                      religion, gender, age, ethnicity, and dietary
                      restrictions.
                    </p>
                    <p>
                      However, we faced a very polar response at the Welcome
                      Inn. Most of the clients were unresponsive, uninterested,
                      or largely against the idea of our project, making it
                      difficult to gather responses to our survey. Furthermore,
                      out of the few who had filled out the survey, there were
                      difficulties in their interpretation of the questions we
                      had noted down, with many questions requiring
                      clarification. By the end of this surveying period, we
                      found that there was a strong negative response to the
                      idea of alternative proteins and cultivated meat, despite
                      most surveyees being unfamiliar with the negative
                      environmental concerns associated with traditional meat.
                      Additionally, it may be worth noting that the main
                      demographic of the surveyees and residents of the
                      WelcomeInn were above the age of 60.
                    </p>
                    <p>
                      From this experience, we learned the importance of
                      scientific communication and ensuring it is accessible to
                      crowds of different demographics. Due to the low number of
                      respondents, we made an effort to improve aspects of
                      scientific communication that may influence public
                      perception of alternative meat. After speaking with the
                      experts, we gained feedback that was education-based,
                      jargon-specific, and survey-specific, all of which we
                      hoped to incorporate into an improved version of our
                      survey.
                    </p>
                  </>
                ),
                images: ["/hp comms/welcome inn.png", "/hp comms/poster.png"],
              },
            ]}
          />
          <InitiativesCarousel
            initiatives={[
              {
                id: "cooksmart",
                title: "COOKSMART: Youth Summer Camps",
                description: (
                  <>
                    <p>
                      Young children are our next generation of leaders,
                      scientists, and even simply consumers. Our team partnered
                      with <b>COOKSMART</b> to expose children ages 5-12 to
                      topics such as sustainability, biology, and new food
                      technologies, and gather their perspectives through
                      engaging discussions and games.
                    </p>
                    <p>
                      Each session was conducted in the Greater Toronto Area,
                      mainly in Mississauga and Oakville. The games and
                      activities focused on introducing the importance of
                      healthy and sustainable eating, asking for their input on
                      new food technologies, and allowing them to express
                      themselves creatively as food scientists by mimicking food
                      modifications through Play-Doh sculptures and a strawberry
                      DNA extraction lab.
                    </p>
                    <p>
                      We received very positive feedback from the children
                      regarding their perception of cultivated meat and
                      alternative proteins. Many were intrigued about the
                      process and believed it could replace traditional
                      practices if the taste were identical to meat.
                      Fascinatingly, a majority of the children had already
                      known about plant-based meat, with some sharing anecdotes
                      of eating Beyond Meat at restaurants, or having vegetarian
                      family members who regularly incorporate alternative
                      proteins in their diet.
                    </p>
                    <p>
                      As these technologies become more common, familiarity and
                      prior education can often shape future perception and
                      acceptance. We were fortunate to work with open-minded
                      children and educators/counsellors at the campsite who
                      were interested in learning about MEYCell. Beyond our
                      project, we are also students who strive to make science
                      more accessible to communities of all demographics, and
                      hopefully inspire others to continue our mission and
                      vision far beyond our own imagination.
                    </p>
                  </>
                ),
                images: [
                  "/hp comms/cooksmart 1.png",
                  "/hp comms/cooksmart 2.png",
                  "/hp comms/cooksmart 3.png",
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
                title: "MISSION SERVICES: GOOD FOOD CENTRE",
                description: (
                  <>
                    <p>
                      Our team had the chance to tour and volunteer at one of
                      Hamilton’s largest social service non-profit
                      organizations, the <b>Mission Services of Hamilton</b>. We
                      specifically visited the Good Food Centre (GFC) and
                      received an in-person guided tour from <b>Jim O’Keeffe</b>
                      , the assistant director. From our tour and extensive
                      conversation with Jim, we learned about GFC and the
                      community it serves extensively, giving us a perspective
                      of the local Hamiltonians we had hoped to benefit with our
                      project and what food security challenges they typically
                      face.
                    </p>
                    <p>
                      GFC services approximately 150 families every day,
                      totalling up to ~600 people who rely on the food centre to
                      put meals on the table daily. This is 15,000 lbs of food
                      every day, with a total of 2.1 million lbs served in 2025;
                      from 2025-2026, the output of food was valued at $186,000.
                      Demographically, Mission Services is located in Ward 3,
                      known as one of the poorest regions in Hamilton.
                      Individuals in this region struggle with frequent
                      hospitalizations and 911 calls due to mental health and
                      drug use, while 70% of the GFC clients here are on social
                      assistance. Moreover, the community faces the highest
                      average grocery bills in the area, with individuals
                      commonly working multiple jobs to afford living expenses.
                    </p>
                    <p>
                      In these conditions, accessibility is the most important
                      factor to consider for these populations. Thinking about
                      nutrition, sustainability, and taste are secondary to
                      whether they are able to afford these proteins in the
                      first place. Jim informed us that 90% of the Mission
                      Services visitors pick up protein products; oftentimes,
                      their selection includes alternative meat. However, none
                      of the clients have ever specifically asked for
                      alternative meat products, and when it is picked up from
                      the shelves, it is usually due to a lack of knowledge on
                      the recipients' part as to what the product really is. We
                      found out that within their clientele, only 3% identify as
                      vegan and 5% as vegetarian, while up to 40% of people they
                      serve follow a halal diet, and 60% do not consume pork.
                    </p>
                    <p>
                      From this experience, we saw first-hand how rising costs
                      and demand for food have impacted real individuals,
                      families, and communities living side-by-side with us. Jim
                      emphasized that education on food innovations can only
                      happen when people are willing to learn – but first, they
                      have to be able to. Improvements in mouthfeel must be
                      balanced with consumer affordability and accessibility to
                      see any benefits happen for the people living in these
                      circumstances.
                    </p>
                    <p>
                      Sustainability-wise, GFC is doing incredible things –
                      since June 2025, they have reported 130 lbs of greenhouse
                      gases diverted and 360 million litres of water saved, with
                      just 10 million litres saved in 3 months alone (May-July
                      2026). The opportunity to speak with individuals who care
                      as deeply about uplifting the community and protecting the
                      environment as our team does was inspiring, and the
                      ability to make a small difference through our volunteer
                      work reminded us of the integrity and intention behind
                      MEYCell.
                    </p>
                  </>
                ),
                images: [
                  "/hp comms/setup MS1.png",
                  "/hp comms/setup MS2.png",
                  "/hp comms/MS vol.png",
                ],
              },
            ]}
          />
        </WikiSection>

        <WikiSection
          id="surveys"
          title="SYNTHESIZE: Harvesting Every Insight To Grow Solutions."
        >
          <p>
            After having the fortunate opportunity of speaking with experts in
            academia, founders of sustainability non-profits, foodbank
            directors, and especially our community members, our team created an
            updated and focused interest-group analysis map. This visual
            highlights some of the key groups, communities, and industries that
            could either influence or impact MEYCell. The analysis ensures that
            we address real-world needs by evaluating whose perspectives are
            important to consider, the relative power certain groups have in the
            alternative meat industry, and what “meaningful engagement” with
            each impacted group means based on their relative positioning.
          </p>
          <img
            src={asset("/hp comms/surveys.png")}
            alt="surveys"
            width={600}
            height={300}
            className="mx-auto block border border-border"
          />
          <p>
            From our conversations to our initiatives, the following next steps
            were considered, implemented, and noted for the future direction of
            MEYCell:
          </p>
          <p>
            Following our meeting with James Vanderberg from Welcome Inn, we
            understood that challenges with receptiveness come from
            understanding the issue from multiple perspectives. Building trust
            with community members means incorporating learning through
            different forums, including social media, pop culture, public
            education campaigns, etc. Through our meeting, James provided
            pointers on overcoming hesitancy and suggested ways to incorporate
            newcomer opinions, such as through local public health branches,
            schools, displaying posters at Food Banks, developing
            programs/guidelines to educate Hamiltonians, and universities. He
            also mentioned that researchers focusing on this topic should
            consider dietary restrictions among faith communities, ethnic
            groups, etc., to ensure they meet the needs of as many people as
            possible. This meeting helped us consider the broader community
            needs affected by our project design, especially the importance of
            clarity across all our initiatives. We also learned strategies to
            center the needs and opinions of those most affected, which we
            gathered directly from community members through surveys at the
            Welcome Inn Community Center. Lastly, our team was able to share
            informational posters with the food bank, which were able to be
            displayed with points on nutrition and food affordability.
          </p>
          <br></br>
          <p>
            Our meeting with Allison Penner provided a deeper insight into the
            ways our project can exist alongside current agricultural systems
            for support rather than competition. We were able to gain a better
            understanding of the ways in which Canadian farming practices could
            benefit from increased accessibility to alternative proteins, which
            broadens the impact of our project.
          </p>
          <p>
            Additionally, we learned more about scientific communication
            strategies we could use to better introduce the concept of our
            project to the public, outside of using simple jargon. Allison
            suggested reintroducing the food groups from national recommended
            food guides, as we expect to face the limiting factor of food
            trends. When we introduced our project to children at a cooking
            summer camp, we were able to incorporate these food groups into our
            presentation to teach them more about healthy eating. Trends such as
            protein hyperfixations and high-fiber meals are able to shift
            consumer demand; therefore, communicating our project alongside
            recommended food guides may be a step in the right direction towards
            building consumer acceptance.
          </p>
          <p>
            Another limitation discussed with Allison was the lack of public
            knowledge about the negative environmental costs associated with
            meat farming practices. With fewer people to understand the problem,
            it may become more difficult to communicate the needs our project
            addresses. Moving forward, advocating for environmental awareness
            regarding traditional meat methods is a method that can be used to
            convey all aspects of our project.
          </p>
          <br></br>
          <p>
            Exploring a more ethical approach with Dr. Milburn led to the
            conclusion that there is more to consumer acceptance of cultivated
            meat than just its scientific and nutritional value; the choices
            made towards food consumption are based on various other factors
            such as culture, identity, and personal values.
          </p>
          <p>
            Additionally, when it came to communicating the negative aspects of
            traditional meat practices, Dr. Milburn noted that different
            concepts can turn away different audiences. For example, choosing to
            discuss the standard suffering of animals versus speaking about meat
            farming’s impact on the climate may reach different types of
            audiences. We were recommended to reach out to social psychologists
            as well as communications professionals to better understand various
            messaging strategies and how they may cater to demographics in their
            own ways.
          </p>
          <br></br>
          <p>
            Lastly, our outreach to Welcome Inn and Mission Services taught us
            that{" "}
            <b>food innovation cannot be separated from its accessibility</b>.
            The benefits of MEYCell are limited if the communities that matter
            to us most are unable to access it in the first place. Affordability
            and familiarity remain key determinants of whether people will
            choose to consume cultivated meat products.
          </p>
          <p>
            Our community survey reached a wide demographic of age, race,
            religion, and dietary preferences/restrictions, filled out by
            members of the Hamilton community, food bank users, and even
            students at McMaster University. Familiarity and education on food
            technologies still have a very long way to go – Jim O’Keeffe from
            Mission Services believed that at this stage of novel biotechnology
            and food development, marketing would be more beneficial than
            education. In our survey, transparency regarding what goes in their
            food, how it is made, additives/chemicals, regulations, and relative
            sustainability and cost compared to traditional meat farming were
            all significant hesitations of potential consumers.
          </p>
          <br></br>
          <p>
            As MEYCell progresses, our team hopes to continue learning through
            immersive community outreach, purposeful conversations, and
            intentional integration of feedback and perspectives into project
            design. McMasterU has grown MEYCell far beyond a student project,
            but a model of responsible science and <b>constant evolution</b>,
            both inside and outside of the lab.
          </p>
          <br></br>
          <img
            src={asset("/hp comms/questions.png")}
            alt="questions"
            width={500}
            height={300}
            className="mx-auto block border border-border"
          />
          <figcaption className="mx-auto mt-2 max-w-[550px] text-sm text-body">
            Questions from MEYCell Community Survey. Scales represent 1 = no
            familiarity/highly unlikely, to 5 = extremely familiar/highly
            likely.
          </figcaption>
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
