/** @format */
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextQuestion } from "./questionSlice";
import { addAnsweredQuestion } from "../results/resultSlice";
import { decodeHtml } from "../htmldecoder/decodeHtml";

const QuestionCard = ({ quizEnded }) => {
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

 if (loading) return <p>Loading questions…</p>;
 if (!questions || questions.length === 0)
  return <p>No questions loaded yet</p>;

 const handleClick = () => {
  // Logic to move to the next question
  setIsActive(false)
  dispatch(nextQuestion());
 };

 const allAnswers = [
  currentQuestion.correct_answer,
  ...currentQuestion.incorrect_answers,
 ].sort();

 const handleEnd = () => {
  quizEnded(true);
 };

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
   
   <div className="answers">
    {allAnswers.map((e) => (
     <button
      className={isActive === e ? "active" : "inActive"}
      key={e}
      type="button"
      value={e}
      onClick={() => handleAnswerClick(e)}>
      {decodeHtml(e)}
     </button>
     
    ))}
   </div>
   <br></br>
   <div className="actionbox">
   {questions.length === currentQuestionIndex + 1 ? (
    <button type="submit" onClick={handleEnd} className="endquiz">
     End Quiz
    </button>
   ) : (
    <button type="submit" onClick={handleClick} className="nextbutton">
     Next Question
    </button>
   )}</div>
  </div>
 );
};

export default QuestionCard;
