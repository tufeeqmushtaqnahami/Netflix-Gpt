// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { API_OPTIONS } from "../utils/Constants";
// import { addUpcomingMovies } from "../utils/moviesSlice";

// const useUpcomingMovies = () => {
//   const dispatch = useDispatch();

//   const getUpcomingMovies = async () => {
//     try {
//       const data = await fetch(
//         "https://api.themoviedb.org/3/movie/upcoming?page=1",
//         API_OPTIONS
//       );

//       if (!data.ok) {
//         throw new Error(`HTTP Error: ${data.status}`);
//       }

//       const json = await data.json();

//       const today = new Date();

//       const upcomingMovies = json.results
//         .filter((movie) => new Date(movie.release_date) > today)
//         .sort(
//           (a, b) =>
//             new Date(a.release_date) - new Date(b.release_date)
//         );

//       dispatch(addUpcomingMovies(upcomingMovies));
//     } catch (error) {
//       console.error("Upcoming Movies Error:", error);
//     }
//   };

//   useEffect(() => {
//     getUpcomingMovies();
//   }, []);

//   return null;
// };

// export default useUpcomingMovies;


import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUpcomingMovies = async () => {
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/upcoming?page=1",
          API_OPTIONS
        );

        if (!data.ok) {
          throw new Error(`HTTP Error: ${data.status}`);
        }

        const json = await data.json();

        const today = new Date();

        const upcomingMovies = json.results
          .filter((movie) => new Date(movie.release_date) > today)
          .sort(
            (a, b) =>
              new Date(a.release_date) - new Date(b.release_date)
          );

        dispatch(addUpcomingMovies(upcomingMovies));
      } catch (error) {
        console.error("Upcoming Movies Error:", error);
      }
    };

    getUpcomingMovies();
  }, [dispatch]);

  return null;
};

export default useUpcomingMovies;