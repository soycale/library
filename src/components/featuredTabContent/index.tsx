import React from "react";
import Section from "./section";
import { Asset } from "@/app/types/assets";

type Props = {
  data: Asset[];
  handleClick: (asset: Asset) => void;
};

const FeaturedTabContent: React.FC<Props> = ({ data, handleClick }) => {
  return (
    <div className="flex-1 w-4/5 max-w-[810px] mx-auto">
      <Section title="Featured" subtitle="Curated top picks from this week" data={data} handleClick={handleClick} />
      <Section title="Trending" subtitle="Most popular by community" data={data} handleClick={handleClick} />
    </div>
  );
};

export default FeaturedTabContent;
