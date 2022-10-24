import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  allMovie: [],
};

export const fetchMovies = createAsyncThunk(
  "fetchMovies",
  async (movieType) => {
    try {
      const res = await fetch(
        `${process.env.BASE_URL}/movie/${movieType}?api_key=${process.env.API_KEY}&language=en-US&page=1`
      );
      const data = await res.json();
      return data.results;
    } catch (error) {
      console.log(error);
    }
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMovies.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchMovies.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.allMovie = payload;
    },
    [fetchMovies.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

// export const {} = movieSlice.actions;

export default movieSlice.reducer;
