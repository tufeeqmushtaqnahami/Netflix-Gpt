import React from "react";
import { ChevronRight } from "lucide-react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <section className="group">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-5 px-1">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-8 rounded-full bg-gradient-to-b from-red-500 to-pink-500"></div>

          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {title}
          </h2>
        </div>

        <button className="hidden md:flex items-center gap-2 text-gray-400 hover:text-white transition">
          View All
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Movie Slider */}
      <div className="relative">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>

        {/* Right Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

        <div
          className="
            flex
            gap-5
            overflow-x-auto
            pb-4
            scroll-smooth
            no-scrollbar
          "
        >
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovieList;

