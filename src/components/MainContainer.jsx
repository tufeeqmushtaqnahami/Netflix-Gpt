import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackgorund from "./VideoBackgorund";

const MainContainer = () => {
  const movies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );

  if (!movies || movies.length === 0) return null;

  const { original_title, overview, id } = movies[0];

  return (
    <section
      className="
        relative
        w-full
        h-[55vh]
        sm:h-[60vh]
        md:h-[70vh]
        lg:h-[85vh]
        xl:h-screen
        overflow-hidden
        bg-black
      "
    >
      <VideoBackgorund movieId={id} />

      <div className="absolute inset-0 z-20">
        <VideoTitle
          title={original_title}
          overview={overview}
        />
      </div>
    </section>
  );
};

export default MainContainer;