import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",

  initialState: {
    isOpen: false,
    query: "",
    results: [],
    loading: false,
  },

  reducers: {
    openSearch: (state) => {
      state.isOpen = true;
    },

    closeSearch: (state) => {
      state.isOpen = false;
      state.query = "";
      state.results = [];
    },

    setQuery: (state, action) => {
      state.query = action.payload;
    },

    setResults: (state, action) => {
      state.results = action.payload;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {
  openSearch,
  closeSearch,
  setQuery,
  setResults,
  setLoading,
} = searchSlice.actions;

export default searchSlice.reducer;