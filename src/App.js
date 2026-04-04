/** @format */
import React from "react";
import QuizOptions from "./features/quizOptions/QuizOptions.js";
import "./App.css";
import QuestionCard from "./features/questionCard/QuestionCard.js";
import { useState } from "react";
import { resetScore } from "./features/analytics/resultSlice.js";

function App() {
  const [quizEnded, setQuizEnded] = useState(false);
  

  const handleClick = () => {
    setQuizEnded(true);
    resetScore();
  }
  if (quizEnded) {
    
  }
  return (
   <div className="App">
    <header className="App-header">
     <h1>Welcome to Quiz<span>IQ</span>u</h1>
    </header>
    <QuizOptions quizEnded={setQuizEnded}/>
    <div>
      {quizEnded ? (
        <div className="results">
          <h2>Your Results</h2>
          {/* Display results here */}
        </div>
      ) : (
        <QuestionCard />
      )}
    </div>
    <button onClick={handleClick}>End Quiz</button>
   </div>
  );
}

export default App;
