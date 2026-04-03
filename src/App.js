/** @format */
import React from "react";
import QuizOptions from "./features/quizOptions/QuizOptions.js";
import "./App.css";
import QuestionCard from "./features/questionCard/QuestionCard.js";

function App() {
 

 return (
  <div className="App">
   <header className="App-header">
    <h1>Welcome to QuizQu</h1>
   </header>
   <QuizOptions />
   <QuestionCard />
  </div>
 );
}

export default App;
