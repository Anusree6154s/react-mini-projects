const Question = ({
  currQuestion,
  handleSelect,
  showAnswer,
  selectedAnswer
}) => {
  const getShowAnswerClassName = (item, answer) => {
    if (!showAnswer) return "hover";
    if (item.correctAnswer === answer) return "correct-answer";
    if (selectedAnswer !== item.correctAnswer && selectedAnswer === answer)
      return "wrong-answer";
  };

  return (
    <div className="options">
      {currQuestion.answers.map((answer) => (
        <div
          className={getShowAnswerClassName(currQuestion, answer)}
          onClick={() => handleSelect(answer)}
          key={answer}
        >
          <input
            type="radio"
            value={answer}
            key={answer}
            checked={selectedAnswer === answer}
            readOnly
          />
          <label>{answer}</label>
        </div>
      ))}
    </div>
  );
};

export default Question;
