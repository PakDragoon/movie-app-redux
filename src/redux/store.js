import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movie";

export default configureStore({
  reducer: {
    movieData: movieReducer
  }
});
