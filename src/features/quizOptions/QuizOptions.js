/** @format */

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getCategories from "./getCategories";
import { setCategories } from "./categorySlice";
import getQuestions from "../questionCard/getQuestions";

function QuizOptions({ quizEnded }) {
 const categories = useSelector((state) => state.categories.items);
 const dispatch = useDispatch();
 const [inputs, setInputs] = useState({
  number: 10,
  category: "9",
  difficulty: "easy",
 });

 useEffect(() => {
  const fetchCategories = async () => {
   const result = await dispatch(getCategories());
   if (getCategories.fulfilled.match(result)) {
    dispatch(setCategories(result.payload.trivia_categories));
   }
  };
  fetchCategories();
 }, [dispatch]);

 const handleChange = (e) => {
  setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  quizEnded(false);
  dispatch(getQuestions({ ...inputs }));
 };

 return (
  <div>
   <form className="menu" onSubmit={handleSubmit}>
    <h3 className="menubanner">
     To start the quiz select your preferences below then press the button
    </h3>
    <p>
     To get your results use the button at the bottom to end the quiz. <br></br>
     You need to reset the results each time you have finished to get the next
     quiz results
    </p>
    <label>Select Categorie</label>
    <select
     name="category"
     className="categoryForm"
     value={inputs.category}
     onChange={handleChange}>
     {categories.map((category) => (
      <option key={category.id} value={category.id}>
       {category.name}
      </option>
     ))}
    </select>
    <br></br>
    <label>Select Difficulty</label>
    <select
     name="difficulty"
     className="difficulty"
     value={inputs.difficulty}
     onChange={handleChange}>
     <option value="easy">Easy</option>
     <option value="medium">Medium</option>
     <option value="hard">Hard</option>
    </select>
    <br></br>
    <label htmlFor="numOfQuestions" className="">
     How Many Questions?
    </label>
    <input
     type="number"
     name="number"
     className="number"
     min="1"
     max="25"
     value={inputs.number}
     onChange={handleChange}></input>
    <br></br>
    <button className="submitBtn" type="submit">
     Start the Quiz
    </button>
   </form>
  </div>
 );
}

export default QuizOptions;
