import React from "react";
import BasicAsset from "../basicAsset";
import { Asset } from "@/app/types/assets";

type Props = {
  title: string;
  subtitle: string;
  data: Asset[];
  handleClick: (asset: Asset) => void;
};

const Section: React.FC<Props> = ({ title, subtitle, data, handleClick }) => (
  <>
    <h1 className="text-4xl font-semibold">{title}</h1>
    <p className="text-lg mb-8 text-gray-700">{subtitle}</p>
    <div className="flex flex-wrap gap-5 items-center justify-center mb-10">
      {!data.length && (
        <p className="text-lg mb-8 text-gray-700">
          No assets were found for this search term.
        </p>
      )}
      {data.map((cardInfo, idx) => (
        <BasicAsset
          key={`${cardInfo.name}${idx}`}
          data={cardInfo}
          handleClick={handleClick}
        />
      ))}
    </div>
  </>
);

export default Section;
