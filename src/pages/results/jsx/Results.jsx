/** @format */

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetScore } from "../slice/resultSlice";
import { resetQuestions } from "../../questionCard/slice/questionSlice";
import "../css/results.css";

const Results = () => {
 const score = useSelector((state) => state.results.score);
 const correctAnswers = useSelector((state) => state.results.correctAnswers);
 const incorrectAnswers = useSelector(
  (state) => state.results.incorrectAnswers,
 );
 const totalQuestions = useSelector(
  (state) => state.results.answeredQuestions.length,
 );
 const allQuestions = useSelector((state) => state.results.answeredQuestions);
 const navigate = useNavigate();
 const dispatch = useDispatch();
 const handleReset = () => {
  dispatch(resetScore());
  dispatch(resetQuestions());
  navigate("/");
 };

 return (
  <div className="results">
   <h1>Your Results</h1>
   <p className="yourscore">
    Score: {score}/{totalQuestions}
   </p>
   <button className="reset-btn" onClick={handleReset}>
    Reset
   </button>
   <h2>Correct Answers: </h2>
   {Object.entries(correctAnswers).map(([key, value]) => (
    <p key={key} className="correct">
     Question: {" " + key} <br></br>Answer: {" " + value}
    </p>
   ))}
   <h2>Incorrect Answers:</h2>
   {Object.entries(incorrectAnswers).map(([key, value]) => (
    <p key={key} className="incorrect">
     Question: {key} <br></br>Your Answer:{" " + value} <br></br> Correct
     Answer:
     {" " + allQuestions.find((q) => q.question === key)?.correct_answer}
    </p>
   ))}
  </div>
 );
};

export default Results;
