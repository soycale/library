import { useState } from "react";
import Image from "next/image";
import KpiContent from "@/components/kpi";
import FavoriteButton from "@/components/buttons/favoriteButton";
import AdditionalInfo from "../additionalInfo";
import { formatDate } from "@/utils/dataHelper";
import { Kpi } from "@/app/types/kpi";
import { Layout } from "@/app/types/layout";

type Props = {
  data: Layout;
  isFavorite: boolean;
  switchFavorite: () => void;
};

const LayoutModalContent: React.FC<Props> = ({
  data,
  isFavorite,
  switchFavorite,
}) => {
  const [activeKpi, setActiveKpi] = useState<Kpi>(data.kpis[0]);

  const handleKpiClick = (kpi: Kpi) => {
    setActiveKpi(kpi);
  };

  return (
    <>
      <div className="flex flex-row justify-center items-center w-[70px] h-[70px] rounded-md mr-[10px] mb-5 bg-gray-200">
        <Image
          src={"/assets/dashboard.png"}
          alt="icon"
          width={40}
          height={40}
        />
      </div>
      <div className="flex flex-row justify-center items-center mb-[10px]">
        <h1 className="text-3xl font-bold text-center">{data.name}</h1>
        <p className="flex justify-center items-center bg-gray-200 text-sm font-normal px-2.5 rounded-md h-full ml-2.5">
          Layout
        </p>
      </div>
      <p className="text-base text-center mb-6 -mt-2 text-gray-400">
        {data.descriptive_name}
      </p>
      <p className="text-lg text-center mb-5">{data.description}</p>
      <div className="flex flex-row justify-center items-center mb-[10px]">
        {data.kpis.map((kpi, idx) => {
          return (
            <button
              onClick={() => handleKpiClick(kpi)}
              className={`flex justify-center items-center bg-gray-200 text-sm font-normal px-2.5 rounded-md h-full ml-2.5 cursor-pointer ${
                activeKpi.id === kpi.id ? "bg-orange-500 text-white" : ""
              }`}
              key={`${data.id}-kpi-${idx}`}
            >
              #{kpi.name}
            </button>
          );
        })}
      </div>
      <div className="flex flex-row justify-around items-center mb-[10px] w-full mt-5">
        <AdditionalInfo name="Used" value="2485" hasSeparator />

        <AdditionalInfo name="Type" value="Universal" hasSeparator />

        <AdditionalInfo
          name="Pages No."
          value={data.amountOfPages.toString()}
          hasSeparator
        />

        <AdditionalInfo
          name="Last Updated"
          value={formatDate(data.updated_at)}
        />
      </div>
      <KpiContent data={activeKpi} />
      <FavoriteButton isFavorite={isFavorite} handleClick={switchFavorite} />
    </>
  );
};

export default LayoutModalContent;
