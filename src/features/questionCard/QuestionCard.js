/** @format */

import { useSelector, useDispatch } from "react-redux";
import { nextQuestion } from "./questionSlice";
const QuestionCard = () => {
 const currentQuestion = useSelector((state) => state.questions.currentQuestion);
  const questions = useSelector((state) => state.questions.questions);
  const loading = useSelector((state) => state.questions.loading);
  const dispatch = useDispatch();

  if (loading) return <p>Loading questions…</p>;
  if (!questions || questions.length === 0) return <p>No questions loaded yet</p>;

  const handleClick = () => {
    // Logic to move to the next question
    dispatch(nextQuestion());
  }

 return (
    <div className="questionCard">
      <h2>{currentQuestion.question}</h2>

      

      <button onClick={handleClick}>Next Question</button>
    </div>
  );
};

export default QuestionCard;
