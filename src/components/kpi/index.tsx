import React from "react";
import { Kpi } from "@/app/types/kpi";
import KpiCharts from "./chart";
import QuestionCard from "./questionCard";

type Props = {
  data: Kpi;
};

const KpiContent: React.FC<Props> = ({ data }) => {
  return (
    <>
      <KpiCharts data={data.visuals_available} />
      <h1 className="text-2xl font-semibold my-4 self-start">Business Questions</h1>
      <div className="flex items-center justify-between mb-5 w-full">
        {data.business_questions.map((question, idx) => (
          <QuestionCard
            key={`${data.id}-question-${idx}`}
            title={`Question ${idx + 1}`}
            question={question}
          />
        ))}
      </div>
    </>
  );
};

export default KpiContent;
