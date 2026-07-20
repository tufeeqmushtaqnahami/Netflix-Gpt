import React from "react";
import { useSelector } from "react-redux";
import { Sparkles } from "lucide-react";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);

  // Empty State
  if (!movieNames || movieNames.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 md:p-16 text-center shadow-2xl">

          <div className="text-6xl mb-6">🎬</div>

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Your AI Recommendations will appear here
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            Search by movie name, actor, genre, director, or even your mood.
            Our AI will recommend movies and fetch details directly from TMDB.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            <span className="px-4 py-2 rounded-full bg-red-600/20 border border-red-500/30 text-red-300">
              Funny Movies
            </span>

            <span className="px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300">
              Mind-Bending Sci-Fi
            </span>

            <span className="px-4 py-2 rounded-full bg-green-600/20 border border-green-500/30 text-green-300">
              Romantic Comedy
            </span>

            <span className="px-4 py-2 rounded-full bg-purple-600/20 border border-purple-500/30 text-purple-300">
              Crime Thriller
            </span>

          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 pb-20">

      {/* Header */}
      <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 md:p-8 mb-10 shadow-xl">

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center">

            <Sparkles className="text-white" size={22} />

          </div>

          <div>

            <h2 className="text-3xl font-bold text-white">
              AI Recommendations
            </h2>

            <p className="text-gray-400">
              Personalized movie suggestions generated using Gemini AI.
            </p>

          </div>

        </div>

      </div>

      {/* Movie Rows */}
      <div className="space-y-12">

        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}

      </div>

    </section>
  );
};

export default GptMovieSuggestions;
