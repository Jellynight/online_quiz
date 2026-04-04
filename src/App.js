/** @format */
import React from "react";
import QuizOptions from "./features/quizOptions/QuizOptions.js";
import "./App.css";
import QuestionCard from "./features/questionCard/QuestionCard.js";
import { useState } from "react";

import Results from "./features/analytics/Results.js";

function App() {
  const [quizEnded, setQuizEnded] = useState(false);
  
  const handleClick = () => {
    setQuizEnded(true);
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
