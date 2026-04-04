/** @format */
import { createSlice } from "@reduxjs/toolkit";
import getQuestions from "./getQuestions";

const questionSlice = createSlice({
 name: "questions",
 initialState: {
  questions: [],
  currentQuestion: null,
  currentQuestionIndex: 0,
  loading: false,
  error: null,
 },
 reducers: {
  setCurrentQuestion: (state, action) => {
   state.currentQuestion = action.payload;
  },
  nextQuestion: (state) => {
    if (state.currentQuestionIndex < state.questions.length - 1) {
      state.currentQuestionIndex += 1;
      state.currentQuestion = state.questions[state.currentQuestionIndex];
    }
  },
  setLoading: (state, action) => {
   state.loading = action.payload;
  },
  setError: (state, action) => {
   state.error = action.payload;
  },
  resetQuestions: (state) => {
   state.questions = [];
   state.currentQuestion = null;
   state.currentQuestionIndex = 0;
   state.loading = false;
   state.error = null;
  }
 },
 extraReducers: (builder) => {
  builder
    .addCase(getQuestions.pending, (state) => {
      state.loading = true;
    })
    .addCase(getQuestions.fulfilled, (state, action) => {
      state.loading = false;
      state.questions = action.payload.results;
      state.currentQuestion = action.payload.results[0];
      state.currentQuestionIndex = 0;
    })
    .addCase(getQuestions.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { nextQuestion, setCurrentQuestion, setLoading, setError } =
 questionSlice.actions;
export default questionSlice.reducer;
