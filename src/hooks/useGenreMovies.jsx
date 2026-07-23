import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/Constants";

const useGenreMovies = (genreId) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!genreId) return;

    const getGenreMovies = async () => {
      try {
        const data = await fetch(
          `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}`,
          API_OPTIONS
        );

        const json = await data.json();

        setMovies(json.results || []);
      } catch (error) {
        console.error("Genre Error:", error);
      }
    };

    getGenreMovies();
  }, [genreId]);

  return movies;
};

export default useGenreMovies;