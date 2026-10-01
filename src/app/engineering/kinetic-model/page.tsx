import { ModelPage } from "@/components/wiki/engineering/ModelPage";
import { content } from "./content";

export const metadata = {
  title: "Kinetic Model — MEYcell",
};

export default function KineticModelPage() {
  return (
    <ModelPage
      title="TAG Synthesis Kinetic Model"
      src="/banners/engineering.png"
      content={content}
    />
  );
}
