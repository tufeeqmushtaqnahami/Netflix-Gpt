import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
          "/videos?language=en-US",
        API_OPTIONS
      );

      if (!data.ok) {
        throw new Error(`HTTP Error: ${data.status}`);
      }

      const json = await data.json();

      const filterData = json.results.filter(
        (video) => video.type === "Trailer"
      );

      const trailer =
        filterData.length > 0 ? filterData[0] : json.results[0];

      if (trailer) {
        dispatch(addTrailerVideo(trailer));
      }
    } catch (error) {
      console.error("Movie Trailer Fetch Error:", error);
    }
  };

  useEffect(() => {
    if (movieId) {
      getMovieVideos();
    }
  }, [movieId]);

};

export default useMovieTrailer;