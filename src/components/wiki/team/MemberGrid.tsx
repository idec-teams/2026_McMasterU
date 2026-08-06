import type { TeamMember } from "@/types/wiki";
import { MemberCard } from "./MemberCard";

export function MemberGrid({ members }: { members: TeamMember[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {members.map((member) => (
        <MemberCard key={member.name} member={member} />
      ))}
    </div>
  );
}
