/** @format */

import { useState } from "react";
import { useDispatch } from "react-redux";

import getQuestions from "../../questionCard/thunk/getQuestions";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../css/quizOptions.css";

function QuizOptions() {
 const navigate = useNavigate();
 const { trivia_categories } = useLoaderData();
 const dispatch = useDispatch();

 //setting up state
 const [inputs, setInputs] = useState({
  number: 10,
  category: 9,
  difficulty: "easy",
  quizMode: "multiple",
 });

 // logic save user selections/options
 const handleUserSelection = (e) => {
  setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
 };

 // triggers the API request to get the questions using the users desired selections as arguments
 const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(getQuestions({ ...inputs }));

  navigate("/quiz");
 };

 return (
  <form className="optioncontainer" onSubmit={handleSubmit}>
   <div className="options">
    <label className="categorycontainer">
     Select Categorie:
     <select
      name="category"
      className="categorydropbox"
      value={inputs.category}
      onChange={handleUserSelection}>
      {trivia_categories.map((category) => (
       <option key={category.id} value={category.id}>
        {category.name}
       </option>
      ))}
     </select>
    </label>
    <br></br>
    <label className="difficultycontainer">
     Select Difficulty:
     <select
      name="difficulty"
      className="difficulty"
      value={inputs.difficulty}
      onChange={handleUserSelection}>
      <option value="easy">Easy</option>
      <option value="medium">Medium</option>
      <option value="hard">Hard</option>
     </select>
    </label>
    <br></br>
    <label htmlFor="number" className="numberbanner">
     Number of Questions:
     <input
      id="number"
      type="number"
      className="number"
      name="number"
      min="1"
      max="25"
      value={inputs.number}
      onChange={handleUserSelection}></input>
    </label>
    <br></br>
    <label className="modecontainer">
     Choose Quiz Mode:
     <select
      name="quizMode"
      className="quizzMode"
      value={inputs.quizMode}
      onChange={handleUserSelection}>
      <option value="multiple">Multiple Choice</option>
      <option value="boolean">True / false</option>
      <option value="">Mix of Both</option>
     </select>
    </label>
   </div>
   <br></br>
   <button className="submitbtn" type="submit">
    Start the Quiz
   </button>
   <br></br>
   <Link to="/" className="back-btn">Back to Home Page</Link>
  </form>
 );
}

export default QuizOptions;
