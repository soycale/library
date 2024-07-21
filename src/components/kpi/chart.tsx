import React from "react";
import Image from "next/image";
import { Chart } from "@/app/types/enums";

type Props = {
  data: Chart[];
  isStoryboard?: boolean;
}

const getChartImage = (visual: Chart) => {
  switch (visual) {
    case Chart.BAR_CHART:
      return "/assets/barChart.png";
    case Chart.LINE_CHART:
      return "/assets/lineChart.png";
    case Chart.PIE_CHART:
      return "/assets/pieChart.jpg";
    default:
      return "/assets/pieChart.jpg";
  }
}

const KpiCharts: React.FC<Props> = ({ data, isStoryboard }) => {
  return (
    <div className={`flex flex-wrap gap-5 bg-gray-200 p-5 mt-5 w-full justify-center ${isStoryboard ? "filter blur-sm mb-5" : ""}`}>
      {data.map((visual, idx) => {
        return (
          <div key={idx} className="relative flex-1 min-w-[300px] max-w-full h-[300px]">
            <Image
              src={getChartImage(visual)}
              alt="graph"
              layout="fill"
              objectFit="contain"
            />
          </div>
        );
      })}
    </div>
  );
};

export default KpiCharts;
