import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "searchValue",
  initialState: {
    search: ""
  },
  reducers: {
    filterMovies: (state, action) => {
      state.search = action.payload;
    }
  }
});

export const { filterMovies } = counterSlice.actions;

export default counterSlice.reducer;
