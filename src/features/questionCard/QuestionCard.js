/** @format */

import { useSelector, useDispatch } from "react-redux";
import { nextQuestion } from "./questionSlice";
import { addAnsweredQuestion } from "../analytics/resultSlice";

const QuestionCard = ({ quizEnded }) => {
 const currentQuestion = useSelector(
  (state) => state.questions.currentQuestion,
 );
 const questions = useSelector((state) => state.questions.questions);
 const loading = useSelector((state) => state.questions.loading);
 const dispatch = useDispatch();

 if (loading) return <p>Loading questions…</p>;
 if (!questions || questions.length === 0)
  return <p>No questions loaded yet</p>;

 const handleClick = () => {
  // Logic to move to the next question
  dispatch(nextQuestion());
 };
 const allAnswers = [
  currentQuestion.correct_answer,
  ...currentQuestion.incorrect_answers,
 ].sort();

 const handleEnd = () => {
  quizEnded(true);
 };
 return (
  <div className="questionCard">
   <h2>{currentQuestion.question}</h2>
   <h3>Is It?</h3>
   <form className="answers">
    {allAnswers.map((e) => (
     <button
      key={e}
      type="button"
      value={e}
      onClick={(e) =>
       dispatch(
        addAnsweredQuestion({
         question: currentQuestion.question,
         answer: e.target.value,
         correct_answer: currentQuestion.correct_answer,
        }),
       )
      }>
      {e}
     </button>
    ))}
   </form>
   <br></br>
   
   <button onClick={handleClick}>Next Question</button>
   <br></br>
   <button onClick={handleEnd}>End Quiz</button>
  </div>
 );
};

export default QuestionCard;
