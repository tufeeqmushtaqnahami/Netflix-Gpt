import MovieList from "./MovieList";
import useGenreMovies from "../hooks/useGenreMovies";

const GenresMovieList = ({ genreId, genreName }) => {
  const movies = useGenreMovies(genreId);

  return (
    <MovieList
      title={`${genreName} Movies`}
      movies={movies}
    />
  );
};

export default GenresMovieList;