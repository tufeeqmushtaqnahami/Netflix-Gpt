import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/Constants";

const GptSearch = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black">
      {/* Background */}
      <div className="fixed inset-0 -z-20">
        <img
          src={BG_URL}
          alt="GemiFlix Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/90 via-black/80 to-black"></div>

      {/* Decorative Blur */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-red-600/10 blur-[140px] pointer-events-none"></div>

      {/* Content */}
      <main className="relative z-10">
        {/* Hero */}
        <section className="pt-28 md:pt-36 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-red-500/40 bg-red-500/10 backdrop-blur-md mb-8">
              <span className="text-2xl">🤖</span>
              <span className="text-red-400 font-semibold tracking-wide">
                AI Powered Movie Recommendations
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
              <span className="text-white">Find Your Next</span>
              <br />
              <span className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                Favorite Movie
              </span>
            </h1>

            <p className="mt-6 text-gray-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              Tell our AI what you're in the mood for and receive personalized
              movie recommendations powered by Gemini AI and TMDB.
            </p>
          </div>

          <GptSearchBar />
        </section>

        {/* Suggestions */}
        <section className="mt-12 pb-16">
          <GptMovieSuggestions />
        </section>
      </main>
    </div>
  );
};

export default GptSearch;