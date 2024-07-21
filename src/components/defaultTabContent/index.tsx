import React from "react";
import BasicAsset from "../basicAsset";
import { Asset } from "@/app/types/assets";

interface Props {
  data: Asset[];
  handleClick: (asset: Asset) => void;
}

const DefaultTabContent: React.FC<Props> = ({ data, handleClick }) => {
  return (
    <div className="flex-1 w-4/5 max-w-3xl mx-auto">
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
    </div>
  );
};

export default DefaultTabContent;
