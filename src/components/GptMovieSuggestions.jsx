import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);

  if (!movieNames || !movieResults) return null;

  return (
    <div className="w-full md:w-11/12 lg:w-10/12 mx-auto p-2 sm:p-4 m-2 sm:m-4 bg-black bg-opacity-90 text-white rounded-lg">
      {movieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieResults[index]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
