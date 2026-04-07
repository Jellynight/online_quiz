/** @format */

import { useSelector } from "react-redux";
import "./results.css"

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
 return (
  <div className="results">
   <h1>Your Results</h1>
   <p className="yourscore">
    Score: {score}/{totalQuestions}
   </p>
   <h2>Correct Answers: </h2>
   {Object.entries(correctAnswers).map(([key, value]) => (
    <p key={key} className="correct">
     Question: {" " + key} <br></br>Answer: {" " + value}
    </p>
   ))}
   <h2>Incorrect Answers:</h2>
   {Object.entries(incorrectAnswers).map(([key, value]) => (
     <p key={key} className="incorrect">
      Question: {key} <br></br>Your Answer:{" " + value} <br></br> Correct Answer:
      {" " + allQuestions.find((q) => q.question === key)?.correct_answer}
     </p>
   ))}
  </div>
 );
};

export default Results;
