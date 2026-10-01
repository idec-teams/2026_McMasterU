import { Banner } from "@/components/wiki/Banner";
import { WikiPage } from "@/components/wiki/WikiPage";
import { WikiSection } from "@/components/wiki/WikiSection";

export const metadata = {
  title: "Outreach — MEYcell",
};

export default function OutreachPage() {
  return (
    <>
      <Banner title="Outreach">
        <p>
          How the MEYcell team brings synthetic biology to classrooms, events,
          and the wider public.
        </p>
      </Banner>

      <WikiPage>
        <WikiSection id="overview" title="Overview">
          <p>COMING SOON</p>
        </WikiSection>

        <WikiSection id="events" title="Events">
          <p>COMING SOON</p>
        </WikiSection>

        <WikiSection id="education" title="Education">
          <p>COMING SOON</p>
        </WikiSection>

        <WikiSection id="collaborations" title="Collaborations">
          <p>COMING SOON</p>
        </WikiSection>
      </WikiPage>
    </>
  );
}
