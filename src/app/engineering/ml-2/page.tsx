import { ModelPage } from "@/components/wiki/engineering/ModelPage";
import { content } from "./content";

export const metadata = {
  title: "ML2: ThermoCast — MEYcell",
};

export default function Ml2Page() {
  return (
    <ModelPage
      title="ML2 - ThermoCast"
      src="/banners/engineering.png"
      content={content}
    />
  );
}
