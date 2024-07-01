import "./QuizQuestion.scss";
import { useTranslation } from "react-i18next";

const QuizQuestion = ({ question, onAnswer }) => {
  const { t } = useTranslation();

  return (
    <div className="quiz-question">
      <h2>{question.title}</h2>
      {question.options.map((option, index) => (
        <button key={index} onClick={() => onAnswer(option)}>
          {option}
        </button>
      ))}
      <button>{t("next")}</button>
    </div>
  );
};

export default QuizQuestion;
