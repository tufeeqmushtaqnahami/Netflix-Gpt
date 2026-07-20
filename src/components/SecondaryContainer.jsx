import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <section className="relative z-20 -mt-12 sm:-mt-16 md:-mt-20 lg:-mt-24 bg-black pb-24">
      <div className="px-3 sm:px-5 md:px-8 lg:px-10 space-y-10">
        <MovieList
          title="Now Playing Movies"
          movies={movies.nowPlayingMovies}
        />

        <MovieList
          title="Trending"
          movies={movies.trendingMovies}
        />

        <MovieList
          title="Popular"
          movies={movies.popularMovies}
        />

        <MovieList
          title="Upcoming Movies"
          movies={movies.upcomingMovies}
        />

        <MovieList
          title="Top Rated"
          movies={movies.topRatedMovies}
        />
      </div>
    </section>
  );
};

export default SecondaryContainer;