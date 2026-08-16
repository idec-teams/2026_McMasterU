import type { TeamMember } from "@/types/wiki";
import { MemberCard } from "./MemberCard";

export function MemberGrid({ members }: { members: TeamMember[] }) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
      {members.map((member) => (
        <MemberCard key={member.id} member={member} />
      ))}
    </div>
  );
}
