import React from "react";
import { IMG_CDN_URL } from "../utils/Constants";
import noPoster from "../assets/noPoster.png";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-28 sm:w-36 md:w-40 lg:w-48 flex-shrink-0">
      <img
        alt="Movie Card"
        src={posterPath ? IMG_CDN_URL + posterPath : noPoster}
        className="rounded-lg w-full"
        onError={(e) => {
          e.target.src = noPoster;
        }}
      />
    </div>
  );
};

export default MovieCard;
