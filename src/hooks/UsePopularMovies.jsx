import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/popular?page=1",
          API_OPTIONS
        );

        if (!data.ok) {
          throw new Error(`HTTP Error: ${data.status}`);
        }

        const json = await data.json();

        if (json.results) {
          dispatch(addPopularMovies(json.results));
        }
      } catch (error) {
        console.error("Popular Movies Error:", error);
      }
    };

    getPopularMovies();
  }, [dispatch]);

  return null;
};

export default usePopularMovies;