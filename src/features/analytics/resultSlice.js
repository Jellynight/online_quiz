

import { createSlice } from '@reduxjs/toolkit';

const resultSlice = createSlice({
  name: 'results',
  initialState: {
    score: 0,
    correctAnswers: {},
    incorrectAnswers: {},
    answeredQuestions: []
  },
  reducers: {
    addAnsweredQuestion: (state, action) => {
      if (action.payload.question in state.correctAnswers || action.payload.question in state.incorrectAnswers) {
        return; // Question already answered, do not update score again
      }
      if (action.payload.answer === action.payload.correct_answer) {
        state.score += 1;
        state.correctAnswers[action.payload.question] = action.payload.answer;
        state.answeredQuestions.push(action.payload);
      } else {
        state.incorrectAnswers[action.payload.question] = action.payload.answer;
        state.answeredQuestions.push(action.payload);
      }
    },
    resetScore: (state) => {
      state.score = 0;
      state.correctAnswers = {};
      state.incorrectAnswers = {};
      state.answeredQuestions = [];
    },
  }
});

export const { actions, reducer } = resultSlice;
export const { addAnsweredQuestion, resetScore } = actions;