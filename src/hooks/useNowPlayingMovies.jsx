// import { useDispatch } from "react-redux";
// import { API_OPTIONS } from "../utils/Constants";
// import { addNowPlayingMovies } from "../utils/moviesSlice";
// import { useEffect } from "react";

// const useNowPlayingMovies = () => {
//   const dispatch = useDispatch();

//   const getNowPlayingMovies = async () => {
//     try {
//       const data = await fetch(
//         "https://api.themoviedb.org/3/movie/now_playing?page=1",
//         API_OPTIONS
//       );

//       if (!data.ok) {
//         throw new Error(`HTTP Error: ${data.status}`);
//       }

//       const json = await data.json();

//       if (json.results) {
//         dispatch(addNowPlayingMovies(json.results));
//       }
//     } catch (error) {
//       console.error("Now Playing Movies Error:", error);
//     }
//   };

//   useEffect(() => {
//     getNowPlayingMovies();
//   }, []);

//   return null;
// };

// export default useNowPlayingMovies;



import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getNowPlayingMovies = async () => {
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?page=1",
          API_OPTIONS
        );

        if (!data.ok) {
          throw new Error(`HTTP Error: ${data.status}`);
        }

        const json = await data.json();

        if (json.results) {
          dispatch(addNowPlayingMovies(json.results));
        }
      } catch (error) {
        console.error("Now Playing Movies Error:", error);
      }
    };

    getNowPlayingMovies();
  }, [dispatch]);

  return null;
};

export default useNowPlayingMovies;
