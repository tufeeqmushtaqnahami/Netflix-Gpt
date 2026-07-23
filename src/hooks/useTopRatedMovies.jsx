// import { useDispatch } from "react-redux";
// import { API_OPTIONS } from "../utils/Constants";
// import { addTopRatedMovies } from "../utils/moviesSlice";
// import { useEffect } from "react";

// const useTopRatedMovies = () => {
//   const dispatch = useDispatch();

//   const getTopRatedMovies = async () => {
//     try {
//       const data = await fetch(
//         "https://api.themoviedb.org/3/movie/top_rated?page=1",
//         API_OPTIONS
//       );

//       if (!data.ok) {
//         throw new Error(`HTTP Error: ${data.status}`);
//       }

//       const json = await data.json();

//       if (json.results) {
//         dispatch(addTopRatedMovies(json.results));
//       }
//     } catch (error) {
//       console.error("Top Rated Movies Error:", error);
//     }
//   };

//   useEffect(() => {
//     getTopRatedMovies();
//   }, []);

//   return null;
// };

// export default useTopRatedMovies;

import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getTopRatedMovies = async () => {
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/top_rated?page=1",
          API_OPTIONS
        );

        if (!data.ok) {
          throw new Error(`HTTP Error: ${data.status}`);
        }

        const json = await data.json();

        if (json.results) {
          dispatch(addTopRatedMovies(json.results));
        }
      } catch (error) {
        console.error("Top Rated Movies Error:", error);
      }
    };

    getTopRatedMovies();
  }, [dispatch]);

  return null;
};

export default useTopRatedMovies;