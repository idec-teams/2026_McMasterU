type Tone = "muted" | "brand";

export function SectionEyebrow({
  children,
  tone = "muted",
}: {
  children: React.ReactNode;
  tone?: Tone;
}) {
  const color = tone === "brand" ? "text-primary" : "text-muted-foreground";
  const line = tone === "brand" ? "bg-primary" : "bg-muted-foreground/40";

  return (
    <div
      className={`font-mono text-[10px] tracking-widest uppercase mb-4 flex items-center gap-3 ${color}`}
    >
      <span className={`inline-block w-6 h-px ${line}`} />
      {children}
    </div>
  );
}
