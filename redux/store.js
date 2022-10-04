import { combineReducers, configureStore } from "@reduxjs/toolkit";
import movieReducer from "../redux/slices/movieSlice";

const rootReducer = combineReducers({
  movies: movieReducer,
});

export const store = configureStore({ reducer: rootReducer });

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};
