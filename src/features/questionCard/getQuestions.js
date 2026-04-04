

import { createAsyncThunk } from "@reduxjs/toolkit";

const getQuestions = createAsyncThunk(
  
  "questions/getQuestions", async ({number,category,difficulty}) => {
    console.log(number,category,difficulty)
    const response = await fetch(`https://opentdb.com/api.php?amount=${number}&category=${category}&difficulty=${difficulty}&type=multiple`);   
    const data = await response.json();
    return data;
  }
);

export default getQuestions