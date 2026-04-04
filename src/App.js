/** @format */
import React from "react";
import QuizOptions from "./features/quizOptions/QuizOptions.js";
import "./App.css";
import QuestionCard from "./features/questionCard/QuestionCard.js";
import { useState } from "react";
import { resetScore } from "./features/analytics/resultSlice.js";
import Results from "./features/analytics/Results.js";
import { useDispatch } from "react-redux";
function App() {
  const [quizEnded, setQuizEnded] = useState(false);
 const [reset, setReset] = useState(false);
  const dispatch = useDispatch();
  const handleClick = () => {
    setQuizEnded(true);
  }

  const handleReset = () => {
    setQuizEnded(false);
    setReset(true);
    dispatch(resetScore());
  }
  
  return (
   <div className="App">
    <header className="App-header">
     <h1>Welcome to Quiz<span>IQ</span>u</h1>
    </header>
    <QuizOptions quizEnded={setQuizEnded}/>
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
