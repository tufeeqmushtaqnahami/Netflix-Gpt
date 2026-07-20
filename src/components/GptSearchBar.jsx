import React, { useRef, useState } from "react";
import { Search, Sparkles, Loader2 } from "lucide-react";
import model from "../utils/gemini";
import { API_OPTIONS } from "../utils/Constants";
import { addGptMovieResult } from "../utils/GptSlice";
import { useDispatch } from "react-redux";

const suggestions = [
  "Action",
  "Comedy",
  "Sci-Fi",
  "Horror",
  "Marvel",
  "Anime",
  "Romance",
  "Thriller",
];

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
        setLoading(false);
        setError("Please enter a movie, actor, genre or mood.");
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
        setLoading(false);
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
      console.error(error);

      if (error.message?.includes("403")) {
        setError("Gemini API key is invalid.");
      } else if (error.message?.includes("429")) {
        setError("Gemini API quota exceeded.");
      } else if (error.message?.includes("Failed to fetch")) {
        setError("Please check your internet connection.");
      } else {
        setError("Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-12 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Search Box */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-4 md:p-6 shadow-2xl">

          <div className="flex flex-col md:flex-row gap-4">

            {/* Input */}
            <div className="relative flex-1">

              <Search
                size={22}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                ref={searchText}
                type="text"
                placeholder="Try 'Mind bending Sci-Fi' or 'Movies like Interstellar'"
                className="w-full bg-black/40 border border-white/10 rounded-2xl pl-14 pr-5 py-4 text-white placeholder:text-gray-400 outline-none focus:border-red-500 transition"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleGptSearchClick();
                  }
                }}
              />
            </div>

            {/* Button */}
            <button
              onClick={handleGptSearchClick}
              disabled={loading}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-red-600 to-pink-600 hover:scale-105 transition duration-300 disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2
                    size={20}
                    className="animate-spin"
                  />
                  Thinking...
                </>
              ) : (
                <>
                  <Sparkles size={20} />
                  Recommend
                </>
              )}
            </button>

          </div>

          {/* Suggestion Chips */}
          <div className="mt-6">

            <p className="text-gray-400 text-sm mb-3">
              Popular Searches
            </p>

            <div className="flex flex-wrap gap-3">

              {suggestions.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    searchText.current.value = item;
                    handleGptSearchClick();
                  }}
                  className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-gray-200 hover:bg-red-600 hover:border-red-600 transition duration-300"
                >
                  {item}
                </button>
              ))}

            </div>

          </div>

          {/* Error */}
          {error && (
            <div className="mt-6 rounded-xl bg-red-600/20 border border-red-500 text-red-300 p-4 text-center">
              {error}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default GptSearchBar;



