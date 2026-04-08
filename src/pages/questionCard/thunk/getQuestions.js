/** @format */

import { createAsyncThunk } from "@reduxjs/toolkit";

const getQuestions = createAsyncThunk(
 "questions/getQuestions",
 async ({ number, category, difficulty, quizMode }) => {
  console.log(number, category, difficulty, quizMode);
  const response = await fetch(
   `https://opentdb.com/api.php?amount=${number}&category=${category}&difficulty=${difficulty}&type=${quizMode}`,
  );
  const data = await response.json();
  return data;
 },
);

export default getQuestions;
