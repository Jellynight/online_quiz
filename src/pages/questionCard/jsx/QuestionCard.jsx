/** @format */
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { nextQuestion } from "../slice/questionSlice";
import { addAnsweredQuestion } from "../../results/slice/resultSlice";
import { decodeHtml } from "../../utils/decodeHtml";
import "../css/questionCard.css"

const QuestionCard = () => {

  //state logic setup
 const currentQuestion = useSelector(
  (state) => state.questions.currentQuestion,
 );
 const questions = useSelector((state) => state.questions.questions);
 const loading = useSelector((state) => state.questions.loading);
 const currentQuestionIndex = useSelector(
  (state) => state.questions.currentQuestionIndex,
 );
 const dispatch = useDispatch();
 const [isActive, setIsActive] = useState(false);
 const navigate = useNavigate();


 // set loading screen
 if (loading) return <p className="loadscreen">Loading questions…</p>;

 // displays when there are no questions loaded
 if (!questions || questions.length === 0)
  return <p className="questionsnotloaded">No questions loaded yet</p>;

 // Logic to move to the next question
 const handleClick = () => {
  setIsActive(false);
  dispatch(nextQuestion());
 };

 // to gather the API answers together in an array, then arrange them randomly.
 const allAnswers = [
  currentQuestion.correct_answer,
  ...currentQuestion.incorrect_answers,
 ].sort();


 // logic ends quiz by setting quiz end state to true. The app will then render the results instead. 
 const handleEnd = () => {
  navigate("/results");
 };


 // stores the users answer and checks if its correct in the slice. Then stores correct/incorrect answers and keeps user score.
 const handleAnswerClick = (answer) => {
  setIsActive(answer);
  dispatch(
   addAnsweredQuestion({
    question: decodeHtml(currentQuestion.question),
    answer: decodeHtml(answer),
    correct_answer: decodeHtml(currentQuestion.correct_answer),
   }),
  );
 };

 return (
  <div className="questionCard">
   <h2>
    {currentQuestionIndex + 1}. {decodeHtml(currentQuestion.question)}
   </h2>

   {/* renders all the answers and triggers "active" on  user click */} 
   <div className="answersbox">
    {allAnswers.map((e) => (
     <button
      className={isActive === e ? "active" : "inactive"}
      key={e}
      type="button"
      value={e}
      onClick={() => handleAnswerClick(e)}>
      {decodeHtml(e)}
     </button>
    ))}
   </div>
   <br></br>

   { /*renders endquizbutton when you get to the last question. else it render nextbutton*/}
   <div className="actionbox">
    {questions.length === currentQuestionIndex + 1 ? (
     <button type="button" onClick={handleEnd} className="endquizbutton">
      End Quiz
     </button>
    ) : (
     <button type="button" onClick={handleClick} className="nextbutton">
      Next Question
     </button>
    )}
   </div>
  </div>
 );
};

export default QuestionCard;
