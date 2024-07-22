import React from "react";
import { Storyboard } from "@/app/types/storyBoard";

const RequestedInfoList = ({ data }: { data: Storyboard[] }) => {
  return (
    <div className="mt-2 p-2 border border-gray-300 rounded-lg bg-gray-50 absolute top-14 right-0 w-52 shadow-lg z-10">
      {!data.length && (
        <p className="text-sm text-gray-500">
          You have not requested access to any Storyboards
        </p>
      )}
      {data.map((item, idx) => (
        <div key={idx} className="mb-2">
          <h4 className="m-0 text-base font-bold">- {item.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default RequestedInfoList;
