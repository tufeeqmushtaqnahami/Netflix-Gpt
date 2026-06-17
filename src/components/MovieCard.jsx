import React from "react";
import { IMG_CDN_URL } from "../utils/Constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div  className="w-28 sm:w-36 md:w-40 lg:w-48 flex-shrink-0">
      <img
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
        className="rounded-lg w-full"
      />
    </div>
  );
};

export default MovieCard;
