import React from "react";

type Props = {
  isFavorite: boolean;
  handleClick: () => void;
};

const FavoriteButton: React.FC<Props> = ({ isFavorite, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className={`flex w-full text-white text-lg rounded-md h-10 items-center justify-center cursor-pointer ${
        isFavorite ? "bg-black" : "bg-gray-700"
      }`}
    >
      {isFavorite ? "Add To Favorites" : "Remove From Favorites"}
    </div>
  );
};

export default FavoriteButton;
