import { useState } from "react";
import GenresMovieList from "./GenresMovieList";
import {
  Sword,
  Popcorn,
  Skull,
  Heart,
  Rocket,
  Palette,
} from "lucide-react";

const genres = [
  {
    id: 28,
    name: "Action",
    icon: Sword,
  },
  {
    id: 35,
    name: "Comedy",
    icon: Popcorn,
  },
  {
    id: 27,
    name: "Horror",
    icon: Skull,
  },
  {
    id: 10749,
    name: "Romance",
    icon: Heart,
  },
  {
    id: 878,
    name: "Sci-Fi",
    icon: Rocket,
  },
  {
    id: 16,
    name: "Animation",
    icon: Palette,
  },
];

const Genres = () => {
  const [selectedGenre, setSelectedGenre] = useState(genres[0]);

  return (
    <section
      id="genres-section"
      className="px-6 md:px-10 py-14"
    >
      <h2 className="text-3xl font-bold text-white mb-8">
        Browse by Genre
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mb-10">
        {genres.map((genre) => {
          const Icon = genre.icon;

          return (
            <button
              key={genre.id}
              onClick={() => setSelectedGenre(genre)}
              className={`group rounded-xl border p-6 transition-all duration-300 ${
                selectedGenre.id === genre.id
                  ? "bg-red-600 border-red-600 shadow-lg shadow-red-500/30"
                  : "bg-zinc-900 border-zinc-700 hover:border-red-500 hover:bg-zinc-800"
              }`}
            >
              <Icon
                size={36}
                className="mx-auto mb-4 text-white transition-transform duration-300 group-hover:scale-110"
              />

              <p className="text-white font-semibold text-sm md:text-base">
                {genre.name}
              </p>
            </button>
          );
        })}
      </div>

      <GenresMovieList
        genreId={selectedGenre.id}
        genreName={selectedGenre.name}
      />
    </section>
  );
};

export default Genres;