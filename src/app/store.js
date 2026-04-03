/** @format */

import { configureStore } from "@reduxjs/toolkit";

import categoryReducer from "../features/quizOptions/categorySlice";
import questionReducer from "../features/questionCard/questionSlice";
export const store = configureStore({
 reducer: {
  categories: categoryReducer,
  questions: questionReducer,
 },
});
