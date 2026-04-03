
import { useSelector } from "react-redux";

const QuestionCard = () => {
  
  const question = useSelector((state) => state.questions.currentQuestion);

  if (!question) {
    return null;
  }

  return (
    <div className="questionCard">
      <h3>{question.question}</h3>
      <ul>
        {question.options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
      <button>Next Question</button>
    </div>
  )
}

export default QuestionCard;