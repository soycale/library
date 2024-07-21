import Image from "next/image";
import FavoriteButton from "@/components/buttons/favoriteButton";
import KpiContent from "@/components/kpi";
import { Kpi } from "@/app/types/kpi";

type Props = {
  data: Kpi;
  isFavorite: boolean;
  switchFavorite: () => void;
};

const KpiModalContent: React.FC<Props> = ({
  data,
  isFavorite,
  switchFavorite,
}) => {
  return (
    <>
      <div className="flex flex-row justify-center items-center w-[70px] h-[70px] rounded-md mr-[10px] mb-5 bg-gray-200">
        <Image
          src={"/assets/kpi.png"}
          alt="icon"
          width={40}
          height={40}
        />
      </div>
      <div className="flex flex-row justify-center items-center mb-[10px]">
        <h1 className="text-3xl font-bold text-center">{data.name}</h1>
        <p className="flex justify-center items-center bg-gray-200 text-sm font-normal px-2.5 rounded-md h-full ml-2.5">Kpi</p>
      </div>
      <p className="text-base text-center mb-6 -mt-2 text-gray-400">{data.descriptive_name}</p>
      <p className="text-lg text-center mb-5">{data.description}</p>
      <KpiContent data={data} />
      <FavoriteButton isFavorite={isFavorite} handleClick={switchFavorite} />
    </>
  );
};

export default KpiModalContent;
