
import { createAsyncThunk } from "@reduxjs/toolkit";

const getQuestions = createAsyncThunk(
  "questions/getQuestions", async (amount,category,difficulty) => {
    const response = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple&encode=base64`);   
    const data = await response.json();
    return data;
  }
);

export default getQuestions