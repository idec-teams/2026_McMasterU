import { Banner } from "@/components/wiki/Banner";
import { MemberGrid } from "@/components/wiki/team/MemberGrid";
import { loadTeamMembers } from "@/lib/wiki/team";

export const metadata = {
  title: "Team — MEYcell",
};

export default function TeamPage() {
  // Roster comes from public/team/_data.json. Edit the file to add/remove content
  const members = loadTeamMembers();

  return (
    <>
      <Banner variant="photo" title="Meet Our Team" src="/team/Team photo.JPG">
        <p>Meet the McMaster IDEC 2026 team.</p>
      </Banner>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <MemberGrid members={members} />
      </section>
    </>
  );
}
