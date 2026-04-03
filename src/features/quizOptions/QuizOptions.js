/** @format */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getCategories from "./getCategories";
import { setCategories } from "./categorySlice";
import { setSelectedCategory } from "./categorySlice";
import { fetchQuestions } from "../questionCard/questionSlice";

function QuizOptions() {
 const categories = useSelector((state) => state.categories.items);
 const dispatch = useDispatch();

 useEffect(() => {
  const fetchCategories = async () => {
   const result = await dispatch(getCategories());
   if (getCategories.fulfilled.match(result)) {
    dispatch(setCategories(result.payload.trivia_categories));
   }
  };
  fetchCategories();
 }, [dispatch]);

const handleClick = () => {
  dispatch(fetchQuestions());

}

 return (
  <div>
   <form className="menu">
    <h3 className="menubanner">Quiz Setup:</h3>
    <label htmlFor="categorielist">Select Categorie</label>
    <select name="categorielist" className="categoryForm" onChange={(e) => dispatch(setSelectedCategory(e.target.value))}>
     {categories.map((category) => (
      <option key={category.id} value={category.id}>
       {category.name} 
      </option>
     ))}
    </select>
    <br></br>
    <label htmlFor="setDificulty">Select dificulty</label>
    <select name="setDificulty" className="setDificulty">
     <option>Easy</option>
     <option>Medium</option>
     <option>Hard</option>
    </select>
    <br></br>
    <label htmlFor="numOfQuestions" className="">
     How Many Questions?
    </label>
    <input
     type="number"
     name="numOfQuestions"
     className="numOfQuestions"
     min="1"
     max="25"
     ></input>
    <br></br>
    <button className="submitBtn" type="submit" onClick={handleClick}>Start the Quiz</button>
   </form>
  </div>
 );
}


export default QuizOptions;