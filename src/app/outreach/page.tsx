import type { ReactNode } from "react";
import { Banner } from "@/components/wiki/Banner";
import {
  MediaRow,
  Photo,
  PosterGrid,
} from "@/components/wiki/outreach/OutreachMedia";
import { WikiPage } from "@/components/wiki/WikiPage";
import { WikiSection } from "@/components/wiki/WikiSection";

export const metadata = {
  title: "Outreach",
};

// Images live in /public/outreach. A <Photo> with no `src` renders a placeholder

const PODCAST_GUESTS = [
  {
    name: "Dr. Alex Sotra",
    episode: "Episode 1",
    src: "/outreach/podcast-alex-sotra.jpg",
  },
  {
    name: "Dr. Peiran Su",
    episode: "Episode 2",
    src: "/outreach/podcast-peiran-su.jpg",
  },
  {
    name: "Mann Parikh",
    episode: "Episode 3",
    src: "/outreach/podcast-mann-parikh.jpg",
  },
];

const HSI_POSTERS = [
  {
    title: "Escherichia coli K-12 as a Diagnostic Device for Glucosuria",
    src: "/outreach/hsi-poster-glucosuria.jpg",
  },
  {
    title:
      "Feasibility of E. coli Nissle 1917 for Enzyme Production in the Treatment of Lactose Intolerance",
    src: "/outreach/hsi-poster-lactose.jpg",
  },
  {
    title:
      "Engineering a Neural Interface with Modified Bacterial Cellulose to Improve Prosthetic Biocompatibility and Neural Signal Longevity",
    src: "/outreach/hsi-poster-neural-interface.jpg",
  },
  {
    title:
      "Engineering Komagataella phaffii into Hydrogel Patches for Muscle Regeneration Following Severe Burn Injuries",
    src: "/outreach/hsi-poster-burn-patches.jpg",
  },
  {
    title: "Smart Hydrogel Bandages for Post-Surgical Superficial Wounds",
    src: "/outreach/hsi-poster-hydrogel-bandages.jpg",
  },
];

export default function OutreachPage() {
  return (
    <>
      <Banner title="Outreach" src="/banners/outreach.png">
        <p>
          How the MEYcell team brings synthetic biology to classrooms, events,
          and the wider public.
        </p>
      </Banner>

      <WikiPage>
        <WikiSection id="podcast" title="Base Pairs Podcast">
          <p>
            The Base Pairs podcast is a series created by McMaster SynBio to
            introduce university students to the diverse careers available in
            the synthetic biology field. Through conversations with researchers,
            industry professionals, and entrepreneurs, the podcast provides
            insight into the work of each guest. Each guest shares the unique
            academic and professional experiences that helped them enter their
            career, along with advice for students interested in similar
            pathways, giving listeners guidance on how they can leverage their
            opportunities related to synthetic biology.
          </p>
          <p>
            In our first episode, we hosted Dr. Alex Sotra, a PhD candidate at
            McMaster University and biomedical engineer working on
            organ-on-a-chip technology at OrganoBiotech. Our second episode
            featured Dr. Peiran Su, a medical biophysics PhD graduate working in
            the biotechnology industry on nanoparticle-based delivery platforms.
            In our third episode, we spoke with Mann Parikh, founder and CEO of
            NerView Surgical, a medical technology startup developing a
            non-invasive imaging system to help surgeons visualize nerves during
            surgery.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {PODCAST_GUESTS.map((guest) => (
              <Photo
                key={guest.name}
                src={guest.src}
                caption={`${guest.name} · ${guest.episode}`}
                sizes="(min-width: 640px) 15rem, 100vw"
              />
            ))}
          </div>
          <p>
            Ultimately, Base Pairs aims to give students a firsthand perspective
            on what a career in the broad field of synthetic biology may look
            like.
          </p>
        </WikiSection>

        <WikiSection id="high-school-internship" title="High School Internship">
          <p>
            The McMaster SynBio High School Internship (HSI) is an annual
            internship run by McMaster SynBio. The 2026 High School Internship
            spanned the month of July and consisted of several workshops, run by
            members of our own team, focusing on different topics in synthetic
            biology, research, and science communication skills. Guided by the
            inquiry-based and problem-based learning principles signature to
            McMaster University, students were introduced to several real-world
            issues they could choose to tackle with a synthetic biology
            solution, and underwent an intensive research process to arrive at a
            completed research poster and elucidated solution.
          </p>
          {/* Full width rather than in a MediaRow: 25 faces need the room. */}
          <Photo
            aspect="landscape"
            src="/outreach/hsi-cohort.jpg"
            caption="The HSI 2026 cohort."
            sizes="(min-width: 768px) 48rem, 100vw"
          />

          <SubHeading>
            The application stage, and science equity and inclusion
          </SubHeading>
          <p>
            The SynBio HSI is open to eligible students entering grades 11 or 12
            (ages 16–18). Applications opened in mid-March of 2026, with student
            outreach ongoing throughout February–April. Applications closed in
            early May, with online interviews scheduled for mid-May 2026.
          </p>
          <p>
            This year, the McMaster SynBio HSI hit its record high of student
            applications: we had 255 applications competing for a little over 25
            spots in this internship. 30 applicants passed the initial stage on
            to the interview stage, of whom 25 were selected for this year's
            final cohort.
          </p>
          <p>
            As part of our enduring commitment to science equity and inclusion
            in our local Hamilton-Wentworth community, and acknowledging the
            systemic disparities in educational resource allocation between
            south-western Ontario and affluent, resource-rich neighbourhoods in
            the Greater Toronto Area, our Outreach team took extensive measures
            to ensure that south-western Ontario students living in
            resource-poor areas were adequately represented among the written
            applications. Systematic measures we took to ensure equitable
            applicant representation included:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Emailing, calling, and codifying resource-poor high schools in the
              city of Hamilton. These schools unfortunately experience some of
              the highest high school attrition rates in the province of
              Ontario. We are proud to announce that, compared to last year,
              Hamilton-Wentworth applicants have climbed 15%.
            </li>
            <li>
              Considering student resources, and codifying them as part of our
              formal evaluation process in selecting students who go on to the
              interview stage. These measures included holistically considering
              the resources available to these students in their local
              neighbourhoods, and how science-rich their educational
              environments may be, to ensure that equity-deserving applicants
              pass on to the interview stage.
            </li>
          </ul>

          <SubHeading>Welcome Day</SubHeading>
          <p>
            This event was the first workshop of the HSI. Annually, the Welcome
            Day for the SynBio HSI serves several key functions: to introduce
            students to the world of synthetic biology, to introduce students to
            their group and their mentors, and to ignite a curiosity for the
            world of cellular agriculture that McMaster SynBio is diving into
            this year.
          </p>
          <MediaRow
            media={
              <Photo
                src="/outreach/hsi-onboarding.jpg"
                caption="Opening remarks: introducing the cohort to McMaster SynBio."
              />
            }
          >
            <p>
              This workshop began with opening remarks of the HSI by our
              Outreach MC, Liam Serrano. Interns were introduced to the team,
              our mission, history, and past projects. Following that, interns
              were introduced to the fundamentals of synthetic biology, genetic
              engineering, and the problems that synthetic biology can solve.
            </p>
          </MediaRow>
          <p>
            Following group introductions and a formal introduction to the
            expectations of their project, students were invited to ask
            questions to Outreach members and members of our greater team. This
            was a great opportunity for students to ask questions they could not
            have found answers to outside of a school context, providing
            invaluable experience and information for them to use. Members of
            our team spanned many programs: Integrated Biomedical Engineering
            and Health Sciences, Molecular Biology and Genetics, Biotechnology,
            Biochemistry, and the Honours Health Sciences Program. Specific
            categories of inquiry included university application questions,
            research inquiries, and discussions regarding science equity and
            opportunities.
          </p>
          <p>
            The day closed with a presentation by Daniel Sim, a PhD candidate in
            Materials Engineering, who introduced students to his work in
            cellular agriculture and the significance of alternative proteins in
            our evolving, modernising world.
          </p>

          <SubHeading>SciComm Workshop</SubHeading>
          <p>
            This was a mandatory virtual workshop run by Outreach member and HSI
            mentor Anthony Zhao. Within this workshop, students were introduced
            to some of the fundamental components of scientific communication,
            and communication best practices. Concepts covered included:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Real-world issues arising from scientific communication issues
            </li>
            <li>BioRender skills and applications</li>
            <li>Components of a research poster</li>
            <li>Components of graphical abstracts, and their function</li>
            <li>Components of effective verbal scientific communication</li>
          </ul>
          <div className="space-y-4">
            <p>
              In light of the inquiry-based and problem-based learning
              objectives we aimed to follow throughout the SynBio HSI, students
              were asked to apply their learned skills through a rapid-fire
              BioRender challenge. Within this 45-minute activity, students were
              tasked with designing graphical representations of three prompts
              ranging from easy and medium to difficult. Prompts spanned topics
              such as anatomy/physiology, cellular and molecular biology,
              bioethics, environmental science, and genetic engineering, to
              ensure students got exposure to BioRender being applied in various
              contexts.
            </p>
          </div>
          <p>
            Through this workshop, students met three objectives: understand the
            role of science communication in an increasingly information-based
            world, attain skills to apply BioRender to novel contexts, and
            understand the objectives and aims for the Symposium Day
            presentation.
          </p>

          <SubHeading>Week 2: Dry Lab</SubHeading>
          <h4 className="font-display text-base text-foreground">
            Introduction to Gene Circuits Workshop
          </h4>
          <p>
            This workshop introduced students to the fundamental concepts of
            synthetic biology and the principles behind the design and
            construction of genetic circuits. Students were first introduced to
            several key components commonly found in genetic constructs,
            including promoters, ribosome binding sites (RBS), coding sequences
            (CDS), and terminators. Students were also introduced to BioBricks
            and explored logic gates and Boolean systems. Finally, the workshop
            touched on the real-world applications of gene circuits, including
            medicine, agriculture, and environmental biotechnology.
          </p>
          <h4 className="font-display text-base text-foreground">
            Introduction to PyMOL and Protein Data Bank (PDB) Workshop
          </h4>
          <p>
            The PyMOL and Protein Data Bank (PDB) workshop introduced students
            to foundational skills in protein visualization and structural
            biology through hands-on exploration of the software and database,
            respectively. Students first explored the PDB, where they could
            browse and filter entries and learn briefly about structural
            information. Students also completed a PDB scavenger hunt to locate
            and interpret information within protein structures.
          </p>
          <p>
            Afterwards, students were introduced to PyMOL, where they got the
            opportunity to manipulate and visualize proteins from different
            perspectives. They also explored protein mutations by altering
            individual amino acids and examining how these changes affected
            protein structure, connecting sequence variation to potential
            changes in protein properties and function. Finally, the workshop
            ended with students investigating a protein of their interest in
            PyMOL.
          </p>

          <SubHeading>Week 3: Wet Lab</SubHeading>
          <p>
            The Wet Lab Week is a highly anticipated component of the HSI for
            many students. This week focuses on the practical wet-lab skills
            necessary for success in a research environment. During this week,
            students are trained in biosafety, the foundational theory behind
            laboratory techniques, and applications of these techniques.
          </p>
          <p>
            To respect biological safety, the wet lab workshop was hosted
            entirely outside of an active laboratory space; students were not
            working with any live specimens, nor were they in contact with any
            biosafety hazards for the duration of their workshop.
          </p>
          <h4 className="font-display text-base text-foreground">
            Serial Dilutions, Microscopes, and a Virtual Lab Tour
          </h4>
          <p>
            In this workshop, students were introduced to the concept of serial
            dilutions, their applications, and the theoretical calculations
            associated with conducting serial dilutions in the laboratory.
            Several contexts in which serial dilution can be applied were
            explored, including microbiology, pharmacology, reaction chemistry,
            and industrial design. Calculations covered in this workshop
            included dilution factor calculations, dilution calculations, and a
            review of scientific notation and SI units.
          </p>
          <p>
            Students were invited to practice food colouring serial dilutions,
            in which a concentrated stock solution of food colouring was diluted
            to a magnitude of 10⁻²⁰. Students were also instructed in proper
            pipetting technique, using a Pasteur pipette to transfer each
            solution into the next cup as described in the procedure.
          </p>
          <p>
            Following the serial dilution workshop, students learned how to use
            a manual microscope. Students were instructed in the components of a
            microscope as well as the magnification calculations associated with
            microscopy. Students then did a cheek swab and visualized cheek
            cells, as well as fruit and vegetable cells, under the microscope.
            Students were also taught proper biological sketching in the context
            of laboratory observations.
          </p>
          {/* Portrait shot, so it's held to a column width instead of
              stretching across the section. */}
          <div className="mx-auto w-full max-w-sm">
            <Photo
              src="/outreach/hsi-wet-lab-workshop.jpg"
              caption="Reviewing key terms (solute, solvent, concentration, serial dilution, CFUs) before the bench work began."
              sizes="(min-width: 768px) 24rem, 100vw"
            />
          </div>
          <p>
            In addition, students joined our wet lab lead Rachel Ou, as well as
            junior member Anvi Babbar, in the lab. Over a Zoom call, students
            were able to observe the laboratory equipment McMaster SynBio uses
            and its CL1 and CL2 laboratory spaces at the Biointerfaces Institute
            in ETB at McMaster University. Students also had the opportunity to
            ask questions about research experiences open to high school
            students, as well as about the procedures and workflow of this
            year's project.
          </p>
          <p>
            Overall, students achieved the three main objectives of this
            workshop: first, to understand several biological techniques used in
            the wet lab to support research; second, to understand the
            theoretical components and background of these biological
            techniques; and finally, to gain an appreciation for the intricacy
            and precision of laboratory biological work.
          </p>
          <h4 className="font-display text-base text-foreground">
            Food Colouring Gel Electrophoresis Workshop
          </h4>
          <MediaRow
            media={
              <Photo
                aspect="landscape"
                src="/outreach/hsi-gel-electrophoresis.jpg"
                caption="A food colouring gel run by HSI students."
              />
            }
          >
            <p>
              This workshop introduced students to the principles and
              applications of gel electrophoresis through a hands-on experiment
              using accessible and biosafe materials, including food colouring,
              corn syrup, agar powder, and baking soda. Students first learned
              about the science behind gel electrophoresis and its real-world
              applications in biotechnology and forensic science.
            </p>
            <p>
              Students were guided through each stage of the gel electrophoresis
              process using detailed protocols. This included preparing and
              casting the gel, and preparing the food colouring dye samples.
              Students were instructed on how to safely load their samples into
              the wells of the gel and run the gel using 9 V batteries.
            </p>
          </MediaRow>
          <p>
            While the gel was running, students were also introduced to
            micropipettes and had the opportunity to practice proper pipetting
            techniques using water. At the end of the workshop, students were
            able to visualize their samples and how far they migrated through
            the gel.
          </p>
          <p>
            Overall, the workshop provided students with both theoretical and
            practical exposure to gel electrophoresis and micropipetting.
            Students developed foundational laboratory skills while reinforcing
            the importance of accuracy, safety, and precision in laboratory
            work.
          </p>

          <SubHeading>Symposium Day</SubHeading>
          <p>
            The culmination of the weeks of work in the internship took the form
            of a final research poster. Each week, students were assigned
            homework that corresponded to a different part of their research
            poster (introduction, materials and methods, results and discussion,
            conclusion). This approach allowed students to develop their ideas
            in accordance with what was taught that week while incorporating
            active feedback from their mentors.
          </p>
          <p>
            On the day of the symposium, students presented their posters to
            their peers and a panel of judges to showcase their research. During
            the symposium, keynote speaker Dr. Krupa Patel discussed the
            transition into university life, emphasizing the importance of
            remaining curious and open to new opportunities. Nikoo Mansourian
            also shared her journey to becoming an iGEM Ambassador and provided
            insight into her experiences with the iGEM conference. Their talks
            offered students valuable perspectives on the opportunities
            available to them as they continue their academic and scientific
            pathways.
          </p>
          <PosterGrid posters={HSI_POSTERS} />
          <p>
            Following the symposium, students were invited to provide feedback
            on the program. 85% of responses said they would recommend the
            program to another high school student. Mentorship, collaboration,
            and networking opportunities were the most valued aspects of the
            program, with students also highlighting the supportive environment
            and the independence they were given in developing their research
            projects. Students also expressed interest in more in-person and
            hands-on experiences. This feedback will help guide future
            iterations of the internship.
          </p>
        </WikiSection>

        <WikiSection id="discovery-day" title="Discovery Day">
          <p>
            Discovery Day is an outreach event designed to orient high school
            students in Hamilton to hands-on laboratory work and
            university-level science. The event was geared towards schools in
            less affluent areas of Hamilton, with the intention of providing
            students with opportunities to explore science outside of their
            typical classroom environment. By providing access to hands-on
            laboratory experiences and university-style learning, Discovery Day
            encouraged students to build confidence in science and explore
            opportunities while exposing them to new fields and academic
            pathways.
          </p>
          <p>
            The workshop began with an introduction to laboratory practices,
            including aseptic technique and the proper usage of micropipettes.
            Students first practiced their micropipetting through a serial
            dilution activity before applying these skills to extract DNA from
            spinach leaves. After the extraction, students ran an agarose gel,
            where they learned about gel electrophoresis and how the properties
            of DNA allow it to be separated and visualized. The event concluded
            with a period for open questions, allowing students to hear
            firsthand experiences of university life and ask questions about
            furthering their education in science.
          </p>
        </WikiSection>
      </WikiPage>
    </>
  );
}

// Sub-section heading inside a WikiSection — same treatment as ModelPage's.
function SubHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-display pt-4 text-xl text-foreground">{children}</h3>
  );
}
