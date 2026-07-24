import { createSlice } from "@reduxjs/toolkit";

const loadMovies = () => {
  try {
    const movies = localStorage.getItem("myList");
    return movies ? JSON.parse(movies) : [];
  } catch {
    return [];
  }
};

const myListSlice = createSlice({
  name: "myList",
  initialState: {
    movies: loadMovies(),
  },
  reducers: {
    addToMyList: (state, action) => {
      const exists = state.movies.find(
        (movie) => movie.id === action.payload.id
      );

      if (!exists) {
        state.movies.push(action.payload);

        localStorage.setItem(
          "myList",
          JSON.stringify(state.movies)
        );
      }
    },

    removeFromMyList: (state, action) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload
      );

      localStorage.setItem(
        "myList",
        JSON.stringify(state.movies)
      );
    },
  },
});

export const {
  addToMyList,
  removeFromMyList,
} = myListSlice.actions;

export default myListSlice.reducer;