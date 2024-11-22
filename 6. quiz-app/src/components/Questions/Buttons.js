import { data } from "../../db/questions";

export const NextButton = ({ showAnswer, currIndex, handleNext }) => {
  if (!showAnswer || data.legnth === 0 || !data[currIndex + 1]) return null;
  return <button onClick={handleNext} className="next-button">Next</button>;
};

export const CheckAnswerButton = ({ showAnswer, handleShowAnswer }) => {
  if (showAnswer) return null;
  return <button onClick={handleShowAnswer} className="check-answer-button">Check Answer</button>;
};

export const FinishButton = ({ showAnswer, currIndex, handleFinish }) => {
  if (!showAnswer || data.legnth === 0 || data[currIndex + 1]) return null;
  return <button onClick={handleFinish} className="finish-button">Finish</button>;
};
