import { Banner } from "@/components/wiki/Banner";
import { MemberGrid } from "@/components/wiki/team/MemberGrid";
import type { TeamMember } from "@/types/wiki";

export const metadata = {
  title: "Team — MEYcell",
};

// Add members here. Drop photos in /public/team and reference them as
// `photo: "/team/<file>.jpg"`. Omit `photo` and the card shows initials.
// `linkedin` is optional.
const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Full Name",
    role: "Team Lead",
    program: "Integrated Biomedical Engineering & Health Sciences",
    year: "Year 3",
    // photo: "/team/full-name.jpg",
    // linkedin: "https://www.linkedin.com/in/username",
  },
  {
    name: "Full Name",
    role: "Wet Lab",
    program: "Biochemistry",
    year: "Year 2",
  },
  {
    name: "Full Name",
    role: "Dry Lab",
    program: "Computer Science",
    year: "Year 4",
  },
  {
    name: "Full Name",
    role: "Human Practices",
    program: "Life Sciences",
    year: "Year 1",
  },
];

export default function TeamPage() {
  return (
    <>
      <Banner eyebrow="Team" title="The people behind MEYcell.">
        <p>Meet the McMaster iGEM 2026 team.</p>
      </Banner>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <MemberGrid members={TEAM_MEMBERS} />
      </section>
    </>
  );
}
