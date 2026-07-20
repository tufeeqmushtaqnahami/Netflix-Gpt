import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    movieId: null,
  },
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.movieId = action.payload;
    },

    closeModal: (state) => {
      state.isOpen = false;
      state.movieId = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;