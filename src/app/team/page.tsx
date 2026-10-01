import { Banner } from "@/components/wiki/Banner";
import { MemberGrid } from "@/components/wiki/team/MemberGrid";
import { loadTeamMembers } from "@/lib/wiki/team";

export const metadata = {
  title: "Team — MEYcell",
};

export default function TeamPage() {
  // Roster comes from public/team/_data.json — edit that file to add, remove,
  // or reorder members. No code changes needed.
  const members = loadTeamMembers();

  return (
    <>
      <Banner title="Meet Our Team">
        <p>Meet the McMaster IDEC 2026 team.</p>
      </Banner>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <MemberGrid members={members} />
      </section>
    </>
  );
}
