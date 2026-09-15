import { ModelPage } from "@/components/wiki/engineering/ModelPage";
import { content } from "./content";

export const metadata = {
  title: "ML1 — MEYcell",
};

export default function Ml1Page() {
  return (
    <ModelPage title="ML1" src="/banners/engineering.png" content={content} />
  );
}
