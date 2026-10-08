import { Banner } from "@/components/wiki/Banner";
import { MemberGrid } from "@/components/wiki/team/MemberGrid";
import { loadTeamMembers } from "@/lib/wiki/team";

export const metadata = {
  title: "Team",
};

export default function TeamPage() {
  // Roster comes from public/team/_data.json. Edit the file to add/remove content
  const members = loadTeamMembers();

  return (
    <>
      {/* No group photo in /public/team yet, so the banner falls back to its
          plain header. Drop the file in and restore
          src="/team/Team photo.JPG" to bring the photo back. */}
      <Banner variant="photo" title="Meet Our Team">
        <p>Meet the McMaster IDEC 2026 team.</p>
      </Banner>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <MemberGrid members={members} />
      </section>
    </>
  );
}
