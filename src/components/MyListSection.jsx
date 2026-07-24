import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MyListSection = () => {
  const myList = useSelector((store) => store.myList.movies);

  return (
    <section
      id="my-list-section"
      className="px-6 md:px-10 py-14"
    >
      <h2 className="text-3xl font-bold text-white mb-8">
        ❤️ My List
      </h2>

      {myList.length === 0 ? (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-10 text-center">
          <h3 className="text-2xl font-semibold text-white">
            Your My List is Empty
          </h3>

          <p className="mt-3 text-gray-400">
            Save movies by clicking the bookmark icon on any movie.
          </p>
        </div>
      ) : (
        <MovieList
          title="Saved Movies"
          movies={myList}
        />
      )}
    </section>
  );
};

export default MyListSection;