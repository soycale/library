import { useCallback, useState } from "react";
import Image from "next/image";
import useApiCall from "@/hooks/useApiCall";
import FavoriteButton from "@/components/buttons/favoriteButton";
import KpiCharts from "@/components/kpi/chart";
import RequestAccessButton from "@/components/buttons/requestAccessButton";
import { Storyboard } from "@/app/types/storyBoard";
import { DataViz } from "@/app/types/dataViz";

type Props = {
  data: Storyboard;
  isFavorite: boolean;
  switchFavorite: () => void;
};

const StoryboardModalContent: React.FC<Props> = ({
  data,
  isFavorite,
  switchFavorite,
}) => {
  const { patch } = useApiCall();
  const [activeDataViz, setActiveDataViz] = useState<DataViz>(data.data_viz[0]);

  const handleKpiClick = (dv: DataViz) => {
    setActiveDataViz(dv);
  };

  const handleRequestAccess = useCallback(async () => {
    try {
      await patch(`api/storyBoard/requestAccess/${data.id}`, { access_requested: true });
      data.access_requested = true;
    } catch (error) {
      console.error("Failed to request access:", error);
    }
  }, [data, patch]);

  return (
    <>
      <div className="flex flex-row justify-center items-center w-[70px] h-[70px] rounded-md mr-[10px] mb-5 bg-gray-200">
        <Image
          src="/assets/storyboard.png"
          alt="icon"
          width={40}
          height={40}
        />
      </div>
      <div className="flex flex-row justify-center items-center mb-[10px]">
        <h1 className="text-3xl font-bold text-center">{data.title}</h1>
        <p className="flex justify-center items-center bg-gray-200 text-sm font-normal px-2.5 rounded-md h-full ml-2.5">Layout</p>
      </div>
      <p className="text-base text-center mb-6 -mt-2 text-gray-400">{data.descriptive_name}</p>
      <p className="text-lg text-center mb-5">{data.description}</p>
      <div className="flex flex-row justify-center items-center mb-[10px]">
        {data.data_viz.map((dataViz, idx) => (
          <button
            onClick={() => handleKpiClick(dataViz)}
            className={`flex justify-center items-center bg-gray-200 text-sm font-normal px-2.5 rounded-md h-full ml-2.5 cursor-pointer ${
              dataViz.id === activeDataViz.id ? "bg-orange-500 text-white" : ""
            }`}
            key={`${data.id}-dv-${idx}`}
          >
            #{dataViz.kpi.name}
          </button>
        ))}
      </div>
      <KpiCharts data={[activeDataViz.chart_type]} isStoryboard={true} />
      <div className="flex flex-row justify-between items-center mb-2.5 w-full">
        <div className="min-w-[100px] w-[45%]">
          <FavoriteButton
            isFavorite={isFavorite}
            handleClick={switchFavorite}
          />
        </div>
        <div className="min-w-[100px] w-[45%]">
          <RequestAccessButton
            handleClick={handleRequestAccess}
            accessRequested={data.access_requested}
          />
        </div>
      </div>
    </>
  );
};

export default StoryboardModalContent;
