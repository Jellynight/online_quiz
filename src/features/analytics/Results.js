import { useSelector } from "react-redux";

const Results = () => {
  const score = useSelector((state) => state.results.score);
  const correctAnswers = useSelector((state) => state.results.correctAnswers);
  const incorrectAnswers = useSelector((state) => state.results.incorrectAnswers);
  const totalQuestions = useSelector((state) => state.results.answeredQuestions.length);
  return (
    <div className="results">
      <h2>Your Results</h2>
      <p>Score: {score}/{totalQuestions}</p>
      <p>Correct Answers: </p>
      {Object.entries(correctAnswers).map(([key, value]) => (
        <p key={key} className="correct">
          Question:: {key} Answer: {value}
        </p>
      ))}
      <p>Incorrect Answers:</p>
      {Object.entries(incorrectAnswers).map(([key, value]) => (
        <p key={key} className="incorrect">
          Question: {key} Answer:{value}
        </p>
      ))}
    </div>
  )
}

export default Results;