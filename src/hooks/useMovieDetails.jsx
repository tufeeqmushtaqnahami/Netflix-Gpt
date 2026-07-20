import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/Constants";

const useMovieDetails = (movieId) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieDetails = async () => {
      try {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}`,
          API_OPTIONS
        );

        const json = await data.json();

        setMovie(json);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return movie;
};

export default useMovieDetails;