import React from "react";

type Props = {
  handleClick: () => void;
  accessRequested: boolean;
};

const RequestAccessButton: React.FC<Props> = ({
  handleClick,
  accessRequested,
}) => {
  return (
    <div
      onClick={accessRequested ? undefined : handleClick}
      className={`flex w-full text-white text-lg rounded-md h-10 items-center justify-center cursor-pointer ${
        accessRequested ? "bg-gray-400 cursor-default" : "bg-black"
      }`}
    >
      {accessRequested ? "Access Requested" : "Request Access"}
    </div>
  );
};

export default RequestAccessButton;
