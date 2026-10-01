import { TRACK_COLORS } from "@/lib/wiki/colors";

// A single track badge, e.g. "Dry-Lab Design" or
// "Human Practices, Entrepreneurship & Commercialization".
// Leadership tracks (Co-President / Vice-President) get the filled treatment.
const LEAD_TRACKS = new Set(["co-president", "vice-president", "president"]);

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function TrackPill({ track }: { track: string }) {
  const isLead = LEAD_TRACKS.has(track.trim().toLowerCase());
  const key = slugify(track);
  const custom = TRACK_COLORS[key];

  const classes = isLead
    ? "border-primary/50 bg-primary/10 text-primary"
    : custom
      ? `${custom.border} ${custom.bg} ${custom.text}`
      : "border-border bg-section text-muted-foreground";

  return (
    <span
      className={`inline-block border px-2 py-1 font-mono text-[9px] uppercase leading-tight tracking-widest ${classes}`}
    >
      {track}
    </span>
  );
}

export function TrackPills({ tracks }: { tracks: string[] }) {
  if (tracks.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-1.5">
      {tracks.map((track) => (
        <TrackPill key={track} track={track} />
      ))}
    </div>
  );
}
