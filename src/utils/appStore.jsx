
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; 
import moviesReducer from "./moviesSlice";
import gptReducer from "./GptSlice"
import modalReducer from "./modalSlice";
import searchReducer from "./searchSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer, 
    movies : moviesReducer,
    gpt: gptReducer,
    modal: modalReducer,
    search: searchReducer,
  },
});

export default appStore;