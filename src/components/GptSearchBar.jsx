
import React, { useRef } from "react";
import model from "../utils/gemini";
import { API_OPTIONS } from "../utils/Constants";
import { addGptMovieResult } from "../utils/GptSlice";
import { useDispatch } from "react-redux";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS,
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separated like this example: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const result = await model.generateContent(gptQuery);

    const response = result.response.text();

    const movieNames = response.split(",").map((movie) => movie.trim());

    const promiseArray = movieNames.map((movie) => searchMovieTmdb(movie));


    const tmdbResult = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({
        movieNames,
        movieResults: tmdbResult,
      }),
    );
  };
return (
  <div className="pt-44 md:pt-48 flex justify-center px-4">
    <form
      className="w-full max-w-2xl flex flex-col gap-4"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        ref={searchText}
        type="text"
        className="w-full p-4 rounded-lg text-black focus:outline-none"
        placeholder="What would you like to watch today?"
      />

      <button
        className="w-full bg-red-700 hover:bg-red-800 text-white py-4 rounded-lg font-semibold"
        onClick={handleGptSearchClick}
      >
        Search
      </button>
    </form>
  </div>
);

};

export default GptSearchBar;
