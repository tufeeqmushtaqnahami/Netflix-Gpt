import React from "react";
import { Play } from "lucide-react";
import { IMG_CDN_URL } from "../utils/Constants";
import noPoster from "../assets/noPoster.png";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div
      className="
        relative
        flex-shrink-0
        w-36
        sm:w-40
        md:w-44
        lg:w-52
        xl:w-56
        overflow-hidden
        rounded-2xl
        cursor-pointer
        group
        transition-all
        duration-500
        hover:scale-105
      "
    >
      {/* Poster */}
      <img
        src={posterPath ? IMG_CDN_URL + posterPath : noPoster}
        alt="Movie Poster"
        className="
          w-full
          h-full
          object-cover
          rounded-2xl
          transition-transform
          duration-500
          group-hover:scale-110
        "
        onError={(e) => {
          e.target.src = noPoster;
        }}
      />

      {/* Dark Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black
          via-black/30
          to-transparent
          opacity-0
          group-hover:opacity-100
          transition
          duration-500
        "
      />

      {/* Play Button */}
      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          opacity-0
          group-hover:opacity-100
          transition
          duration-500
        "
      >
        <div
          className="
            w-16
            h-16
            rounded-full
            bg-red-600
            flex
            items-center
            justify-center
            shadow-2xl
            shadow-red-600/50
          "
        >
          <Play
            size={28}
            fill="white"
            className="text-white ml-1"
          />
        </div>
      </div>

      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          rounded-2xl
          ring-0
          group-hover:ring-2
          ring-red-500/60
          transition
          duration-500
        "
      />

      {/* Bottom Shadow */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-24
          bg-gradient-to-t
          from-black/70
          to-transparent
        "
      />
    </div>
  );
};

export default MovieCard;
