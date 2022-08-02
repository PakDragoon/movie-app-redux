import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "movieData",
  initialState: {
    movies: [],
    size: true
  },
  reducers: {
    addMovies: (state, action) => {
      state.movies.push(action.payload)
    },
    removeMovies: (state, action) => {
      console.log('remove')
      state.movies = state.movies.filter(movie => movie.id !== action.payload)
    },
    size: (state, action) => {
      state.size = action.payload
    }
  }
});

export const { addMovies, removeMovies, size } = counterSlice.actions;

export default counterSlice.reducer;
