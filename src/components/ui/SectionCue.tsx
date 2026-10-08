import { ScrollCue } from "@/components/ui/ScrollCue";

/**
 * The "Next" cue pinned to the bottom centre of a full-height section. The
 * section it sits in must be positioned.
 */
export function SectionCue({ to }: { to: string }) {
  return (
    <div className="absolute inset-x-0 bottom-10 flex justify-center">
      <ScrollCue to={to} />
    </div>
  );
}

/** The same cue at the end of a section that is only as tall as its content. */
export function FlowCue({ to }: { to: string }) {
  return (
    <div className="mt-20 flex justify-center">
      <ScrollCue to={to} />
    </div>
  );
}
