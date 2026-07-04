import { PagePlaceholder } from "@/components/wiki/PagePlaceholder";

export const metadata = {
  title: "Notebook — MEYcell",
};

export default function NotebookPage() {
  return (
    <PagePlaceholder
      eyebrow="Notebook"
      title="Lab notebook."
      description="Day-by-day experimental log for the MEYcell project. Content coming soon."
    />
  );
}
