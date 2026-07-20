
import React, { useRef, useState } from "react";
import model from "../utils/gemini";
import { API_OPTIONS } from "../utils/Constants";
import { addGptMovieResult } from "../utils/GptSlice";
import { useDispatch } from "react-redux";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchMovieTmdb = async (movie) => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          encodeURIComponent(movie) +
          "&include_adult=false&language=en-US&page=1",
        API_OPTIONS
      );

      if (!data.ok) {
        throw new Error(`TMDB Error: ${data.status}`);
      }

      const json = await data.json();

      return json.results || [];
    } catch (error) {
      console.error(`TMDB Search Error for "${movie}":`, error);
      return [];
    }
  };

  const handleGptSearchClick = async () => {
    try {
      setLoading(true);
      setError("");

      if (!searchText.current.value.trim()) {
        setError("Please enter a movie genre, actor, or movie name.");
        return;
      }

      const gptQuery =
        "Act as a Movie Recommendation system and suggest some movies for the query: " +
        searchText.current.value +
        ". Only give me names of 5 movies, comma separated like this example: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

      const result = await model.generateContent(gptQuery);

      const response = result.response.text();

      const movieNames = response
        .split(",")
        .map((movie) => movie.trim())
        .filter(Boolean);

      if (movieNames.length === 0) {
        setError("No movie recommendations found.");
        return;
      }

      const promiseArray = movieNames.map((movie) =>
        searchMovieTmdb(movie)
      );

      const tmdbResult = await Promise.all(promiseArray);

      dispatch(
        addGptMovieResult({
          movieNames,
          movieResults: tmdbResult,
        })
      );
    } catch (error) {
      console.error("GPT Search Error:", error);

      if (error.message?.includes("403")) {
        setError("Gemini API key is invalid or missing.");
      } else if (error.message?.includes("429")) {
        setError("Gemini API quota exceeded. Please try again later.");
      } else if (error.message?.includes("Failed to fetch")) {
        setError("Network error. Please check your internet connection.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
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
          disabled={loading}
        >
          {loading ? "Searching..." : "Search"}
        </button>

        {error && (
          <div className="bg-red-600 text-white p-3 rounded-lg text-center">
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

export default GptSearchBar;