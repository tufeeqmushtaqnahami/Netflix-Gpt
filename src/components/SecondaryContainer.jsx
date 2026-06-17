import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black min-h-screen">
      <div className="relative z-20 -mt-8 sm:-mt-16 md:-mt-32 lg:-mt-60 pl-2 sm:pl-4 md:pl-8 lg:pl-12 space-y-8">
        <MovieList
          title={"Now Playing Movies"}
          movies={movies.nowPlayingMovies}
        />

        <MovieList
          title={"Trending"}
          movies={movies.trendingMovies}
        />

        <MovieList
          title={"Popular"}
          movies={movies.popularMovies}
        />

        <MovieList
          title={"Upcoming Movies"}
          movies={movies.upcomingMovies}
        />

        <MovieList
          title={"Top Rated"}
          movies={movies.topRatedMovies}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;