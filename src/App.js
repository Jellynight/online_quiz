/** @format */
import React from "react";
import QuizOptions from "./features/quizOptions/QuizOptions.js";
import "./App.css";
import QuestionCard from "./features/questionCard/QuestionCard.js";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Results from "./features/analytics/Results.js";
import { resetScore } from "./features/analytics/resultSlice.js";
import { resetQuestions } from "./features/questionCard/questionSlice.js";

function App() {
 const [quizEnded, setQuizEnded] = useState(false);

const dispatch = useDispatch();

 const handleClick = () => {
  setQuizEnded(true);
 };
 const handleReset = () => {
  dispatch(resetScore());
  dispatch(resetQuestions());
  setQuizEnded(false);
 }

 return (
  <div className="App">
   <header className="App-header">
    <h1>
     Welcome to Quiz<span>IQ</span>u
    </h1>
   </header>
   <QuizOptions quizEnded={setQuizEnded} />
   <div>
    {quizEnded ? (
     <div className="start">
      <Results />
      <button onClick={handleReset}>Reset</button>
     </div>
    ) : (
     <div>
      <QuestionCard />
      <button onClick={handleClick}>End Quiz</button>
     </div>
    )}
   </div>
  </div>
 );
}

export default App;
