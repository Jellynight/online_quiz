/** @format */

import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "../pages/questionCard/slice/questionSlice";
import { reducer } from "../pages/results/slice/resultSlice";

export const store = configureStore({
 reducer: {
  questions: questionReducer,
  results: reducer,
 },
});
