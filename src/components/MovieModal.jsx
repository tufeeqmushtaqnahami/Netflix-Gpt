import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { X, Star, Clock, Calendar } from "lucide-react";
import { closeModal } from "../utils/modalSlice";
import useMovieDetails from "../hooks/useMovieDetails";
import { IMG_CDN_URL } from "../utils/Constants";

const MovieModal = () => {
  const dispatch = useDispatch();

  const { isOpen, movieId } = useSelector((store) => store.modal);

  const movie = useMovieDetails(movieId);

  if (!isOpen) return null;

  if (!movie) {
    return (
      <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80">
        <div className="text-white text-2xl font-bold">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-[95%] max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl bg-zinc-900 shadow-2xl">

        {/* Close Button */}
        <button
          onClick={() => dispatch(closeModal())}
          className="absolute top-5 right-5 z-50 rounded-full bg-black/70 p-2 hover:bg-red-600 transition"
        >
          <X className="text-white" size={24} />
        </button>

        {/* Backdrop */}
        <img
          src={IMG_CDN_URL + movie.backdrop_path}
          alt={movie.title}
          className="w-full h-[350px] object-cover"
        />

        <div className="p-8">

          {/* Title */}
          <h1 className="text-4xl font-bold text-white">
            {movie.title}
          </h1>

          {/* Tagline */}
          {movie.tagline && (
            <p className="text-red-400 italic mt-2">
              {movie.tagline}
            </p>
          )}

          {/* Movie Info */}
          <div className="flex flex-wrap gap-6 mt-6 text-gray-300">

            <div className="flex items-center gap-2">
              <Star className="text-yellow-400" size={18} />
              {movie.vote_average?.toFixed(1)}/10
            </div>

            <div className="flex items-center gap-2">
              <Clock size={18} />
              {movie.runtime} min
            </div>

            <div className="flex items-center gap-2">
              <Calendar size={18} />
              {movie.release_date}
            </div>

          </div>

          {/* Genres */}
          <div className="flex flex-wrap gap-3 mt-6">
            {movie.genres?.map((genre) => (
              <span
                key={genre.id}
                className="bg-red-600 px-4 py-2 rounded-full text-sm text-white"
              >
                {genre.name}
              </span>
            ))}
          </div>

          {/* Overview */}
          <h2 className="text-2xl text-white font-semibold mt-8 mb-3">
            Overview
          </h2>

          <p className="text-gray-300 leading-8">
            {movie.overview}
          </p>

        </div>
      </div>
    </div>
  );
};

export default MovieModal;