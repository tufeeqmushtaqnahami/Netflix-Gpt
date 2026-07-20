import React from "react";
import { Play, Info } from "lucide-react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div
      className="
        absolute
        inset-0
        z-20
        flex
        items-start
        bg-gradient-to-r
        from-black
        via-black/70
        to-transparent
      "
    >
      <div
        className="
          w-full
          pt-24
          sm:pt-28
          md:pt-36
          lg:pt-40
          pl-5
          sm:pl-8
          md:pl-12
          lg:pl-16
          xl:pl-20
        "
      >
        <div className="max-w-xl lg:max-w-2xl">
          {/* Title */}
          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-extrabold
              leading-tight
              text-white
              drop-shadow-2xl
            "
          >
            {title}
          </h1>

          {/* Description */}
          <p
            className="
              hidden
              md:block
              mt-6
              text-gray-200
              text-base
              lg:text-lg
              leading-relaxed
              max-w-xl
              drop-shadow-lg
            "
          >
            {overview}
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-8">
            <button
              className="
                flex
                items-center
                gap-2
                bg-white
                text-black
                font-semibold
                px-6
                py-3
                rounded-md
                hover:bg-gray-200
                transition-all
                duration-300
              "
            >
              <Play size={20} fill="black" />
              Play
            </button>

            <button
              className="
                flex
                items-center
                gap-2
                bg-gray-700/80
                backdrop-blur-md
                text-white
                font-semibold
                px-6
                py-3
                rounded-md
                hover:bg-gray-600
                transition-all
                duration-300
              "
            >
              <Info size={20} />
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
