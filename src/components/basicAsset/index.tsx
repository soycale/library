import React from "react";
import Image from "next/image";
import { Asset } from "@/app/types/assets";

const BasicAsset = ({
  data,
  handleClick,
}: {
  data: Asset;
  handleClick: (asset: Asset) => void;
}) => {
  let iconUrl = "";

  switch (data.type) {
    case "KPI":
      iconUrl = "/assets/kpi.png";
      break;
    case "Layout":
      iconUrl = "/assets/dashboard.png";
      break;
    case "Storyboard":
      iconUrl = "/assets/storyboard.png";
      break;
    default:
      break;
  }

  return (
    <div
      className="flex flex-row items-center w-[360px] h-[120px] rounded-md border-2 border-gray-300 p-2.5 overflow-hidden bg-white cursor-pointer"
      onClick={() => handleClick(data)}
    >
      <div className="flex justify-center items-center w-[90px] h-[90px] rounded-md mr-[10px] bg-gray-200">
        <Image
          src={iconUrl}
          className="icon"
          alt="icon"
          width={40}
          height={40}
        />
      </div>
      <div className="flex flex-col items-start flex-1 overflow-hidden h-full">
        <h2 className="text-lg font-bold">{data?.name || "TEST"}</h2>
        <p className="text-base overflow-hidden text-ellipsis">
          {`This is an asset of type ${data?.description || "TEST"}`}
        </p>
      </div>
    </div>
  );
};

export default BasicAsset;
