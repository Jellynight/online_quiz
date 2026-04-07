/** @format */
import React from "react";
import QuizOptions from "./features/quizOptions/QuizOptions.jsx";
import "./App.css";
import QuestionCard from "./features/questionCard/QuestionCard.jsx";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Results from "./features/results/Results.jsx";
import { resetScore } from "./features/results/resultSlice.js";
import { resetQuestions } from "./features/questionCard/questionSlice.js";

function App() {
 const [quizEnded, setQuizEnded] = useState(false);
 const { questions } = useSelector((state) => state.questions);
 const dispatch = useDispatch();

 const handleReset = () => {
  dispatch(resetScore());
  dispatch(resetQuestions());
  setQuizEnded(false);
 };

 if (questions.length === 0) {
  return (
   <div className="Intropage">
    <header className="header">
     <h1 className="welcome">
      Welcome to Quiz<span>IQ</span>u
     </h1>
    </header>
    <QuizOptions quizEnded={setQuizEnded} />
   </div>
  );
 } else {
  return (
   <div className="Quizbox">
    {quizEnded ? (
     <div className="reset">
      <button onClick={handleReset}>Reset</button>
      <Results />
     </div>
    ) : (
     <div>
      <QuestionCard quizEnded={setQuizEnded} />
     </div>
    )}
   </div>
  );
 }
}
export default App;
