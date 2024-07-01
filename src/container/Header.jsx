import "./Header.scss";

const Header = ({ currentQuestion, totalQuestions }) => {
  const progressPercentage = (currentQuestion / totalQuestions) * 100;
  return (
    <div className="header">
      <div className="question-number">
        Question {currentQuestion} / {totalQuestions}
      </div>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Header;
