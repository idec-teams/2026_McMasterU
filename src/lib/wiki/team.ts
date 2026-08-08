import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { TeamMember } from "@/types/wiki";

const DATA_PATH = join(process.cwd(), "public", "team", "_data.json");

/**
 * Splits a raw track string into pills. Separate tracks are divided by "|";
 * commas are part of a track name, so they are never split on.
 *   "Finance | Wet-Lab"                    -> ["Finance", "Wet-Lab"]
 *   "Human Practices, Community Outreach"  -> ["Human Practices, Community Outreach"]
 */
export function parseTracks(raw: string): string[] {
  return raw
    .split("|")
    .map((track) => track.trim())
    .filter(Boolean);
}

type RawMember = {
  id?: string;
  name?: string;
  /** Either ["A", "B"] or a single "A | B" string. */
  tracks?: string[] | string;
  program?: string;
  year?: string;
  photo?: string;
  linkedin?: string;
};

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function toMember(raw: RawMember): TeamMember | null {
  if (!raw.name) return null;

  const tracks = Array.isArray(raw.tracks)
    ? raw.tracks.flatMap(parseTracks)
    : parseTracks(raw.tracks ?? "");

  return {
    id: raw.id ?? slugify(raw.name),
    name: raw.name,
    tracks,
    program: raw.program,
    year: raw.year,
    photo: raw.photo,
    linkedin: raw.linkedin,
  };
}

/**
 * Reads public/team/_data.json at build time. To add or edit a member, edit
 * that file only — no code changes needed. Returns [] if the file is missing
 * or empty so the page still renders while data is being filled in.
 */
export function loadTeamMembers(): TeamMember[] {
  let contents: string;
  try {
    contents = readFileSync(DATA_PATH, "utf8").trim();
  } catch {
    return [];
  }
  if (!contents) return [];

  const parsed: unknown = JSON.parse(contents);
  const list: RawMember[] = Array.isArray(parsed)
    ? parsed
    : ((parsed as { members?: RawMember[] })?.members ?? []);

  return list.map(toMember).filter((m): m is TeamMember => m !== null);
}
