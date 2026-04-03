/** @format */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchQuestions = createAsyncThunk(
 "questions/getQuestions", async (amount,category,difficulty) => {
    const response = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple&encode=base64`);   
    const data = await response.json();
    return data;
  }
);


const questionSlice = createSlice({
 name: "questions",
 initialState: {
  questions: [],
  currentQuestion: null,
  loading: false,
  error: null,
 },
 reducers: {
  setCurrentQuestion: (state, action) => {
   state.currentQuestion = action.payload;
  },
  setLoading: (state, action) => {
   state.loading = action.payload;
  },
  setError: (state, action) => {
   state.error = action.payload;
  },

 },
});

export const { setCurrentQuestion, setLoading, setError } =
 questionSlice.actions;
export default questionSlice.reducer;
