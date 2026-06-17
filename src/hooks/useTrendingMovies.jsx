import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { addTrendingMovies } from "../utils/moviesSlice";

const useTrendingMovies = () => {
  const dispatch = useDispatch();

  const getTrendingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/trending/movie/week",
        API_OPTIONS
      );

      const json = await data.json();

      dispatch(addTrendingMovies(json.results));
    } catch (error) {
      console.error("Trending Movies Error:", error);
    }
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);
};

export default useTrendingMovies;