import Image from "next/image";
import type { TeamMember } from "@/types/wiki";
import { TrackPills } from "./TrackPill";

// One team member: photo, name, track pills, optional program/year/LinkedIn.
// Photos live in /public/team — set `photo: "/team/<file>.JPG"`. Until a photo
// exists the card falls back to the member's initials so the grid stays even.
export function MemberCard({ member }: { member: TeamMember }) {
  const { name, tracks, program, year, photo, linkedin } = member;

  return (
    <article className="group flex flex-col border border-border bg-card transition-colors duration-200 hover:border-primary/40">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-section">
        {photo ? (
          <Image
            src={photo}
            alt={name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover grayscale-[0.35] transition duration-300 group-hover:grayscale-0"
          />
        ) : (
          <InitialsFallback name={name} />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-display text-lg leading-tight text-foreground">
          {name}
        </h3>

        <TrackPills tracks={tracks} />

        {program ? (
          <p className="text-sm leading-snug text-body">{program}</p>
        ) : null}
        {year ? (
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            {year}
          </p>
        ) : null}

        {linkedin ? (
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-auto inline-flex items-center gap-2 pt-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
          >
            <LinkedInMark />
            LinkedIn
          </a>
        ) : null}
      </div>
    </article>
  );
}

// lucide-react v1 dropped brand icons, so the LinkedIn mark is inlined here.
// `currentColor` keeps it in step with the link's hover state.
function LinkedInMark() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className="h-3.5 w-3.5 fill-current"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InitialsFallback({ name }: { name: string }) {
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

  return (
    <div className="flex h-full w-full items-center justify-center">
      <span className="font-display text-4xl text-primary/25">{initials}</span>
    </div>
  );
}
