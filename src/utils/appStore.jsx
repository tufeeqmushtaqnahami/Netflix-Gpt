
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; 
import moviesReducer from "./moviesSlice";
import gptReducer from "./GptSlice"
import modalReducer from "./modalSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer, 
    movies : moviesReducer,
    gpt: gptReducer,
    modal: modalReducer,
  },
});

export default appStore;