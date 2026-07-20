import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);

  if (!movieNames || !movieResults) return null;

 return (
  <div className="mx-auto w-11/12 bg-black/80 rounded-xl p-6 mt-8">
    {movieNames?.map((movieName, index) => (
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
