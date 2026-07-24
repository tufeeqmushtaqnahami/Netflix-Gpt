import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import Genres from "./Genres";
import MyListSection from "./MyListSection";


const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

 return (
  <section
    id="movies-section"
    className="relative z-20 -mt-12 sm:-mt-16 md:-mt-20 lg:-mt-24 bg-black pb-24"
  >
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
      <Genres />
      <MyListSection />
    </div>
  </section>
);
};

export default SecondaryContainer;