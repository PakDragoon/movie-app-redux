import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movie";
import searchReducer from "./search";

export default configureStore({
  reducer: {
    movieData: movieReducer,
    searchValue: searchReducer
  }
});
