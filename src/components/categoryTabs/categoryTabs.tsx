import React, { Dispatch, SetStateAction } from "react";
import SingleTab from "./singleTab";
import { Categories } from "@/app/types/enums";

type Props = {
  categories: Categories[];
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<Categories>>;
}

const CategoryTabs: React.FC<Props> = ({
  categories,
  activeTab,
  setActiveTab,
}) => {
  return (
    <div className="flex flex-row items-center, justify-center w-3/4 bg-gray-200 rounded-md p-1 max-w-[810px] mb-10">
      {categories.map((category, idx) => {
        return (
          <SingleTab
            key={`cat${idx}`}
            title={category}
            isActive={activeTab === category}
            setActiveTab={setActiveTab}
          />
        );
      })}
    </div>
  );
};

export default CategoryTabs;
