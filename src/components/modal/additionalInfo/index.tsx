import React from "react";

type Props = {
  name: string;
  value: string;
  hasSeparator?: boolean;
};

const AdditionalInfo: React.FC<Props> = ({
  name,
  value,
  hasSeparator = false,
}) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <p className="text-base text-center my-2 font-bold text-black">
          {value}
        </p>
        <p className="text-base text-center mb-6 -mt-2 text-gray-400">{name}</p>
      </div>
      {hasSeparator && <div className="h-[60px] mx-2 w-[2px] bg-gray-400" />}
    </>
  );
};

export default AdditionalInfo;
