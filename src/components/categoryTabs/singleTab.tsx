import React, { Dispatch, SetStateAction } from "react";
import { Categories } from "@/app/types/enums";

type Props = {
  title: Categories;
  isActive: boolean;
  setActiveTab: Dispatch<SetStateAction<Categories>>;
};

const SingleTab: React.FC<Props> = ({
  title,
  isActive,
  setActiveTab,
}) => {
  const handleClick = () => {
    setActiveTab(title);
  };

  return (
    <div
      className={`flex justify-center items-center rounded-md h-10 w-1/4 cursor-pointer ${
        isActive ? "bg-white" : ""
      }`}
      onClick={handleClick}
    >
      <p className={`text-lg ${isActive ? "font-medium text-black" : "font-normal text-gray-500"}`}>
        {title}
      </p>
    </div>
  );
};

export default SingleTab;
