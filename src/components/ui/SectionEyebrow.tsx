type Tone = "muted" | "cyan";

export function SectionEyebrow({
  children,
  tone = "muted",
}: {
  children: React.ReactNode;
  tone?: Tone;
}) {
  const color = tone === "cyan" ? "text-cyan-400" : "text-muted-foreground";
  const line = tone === "cyan" ? "bg-cyan-400" : "bg-muted-foreground/40";

  return (
    <div
      className={`font-mono text-[10px] tracking-widest uppercase mb-4 flex items-center gap-3 ${color}`}
    >
      <span className={`inline-block w-6 h-px ${line}`} />
      {children}
    </div>
  );
}
