import React, { useEffect, useState } from "react";
import { data } from "../../db/questions";
import { CheckAnswerButton, FinishButton, NextButton } from "./Buttons";
import Question from "./Question";

export default function Questions({
  gamePhase,
  setGamePhase,
  gamePhases,
  score,
  setScore,
}) {
  const [currIndex, setCurrIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  useEffect(() => {
    if (gamePhase === "QUESTIONS") {
      setCurrIndex(0);
      setShowAnswer(false);
    }
  }, [gamePhase]);

  useEffect(() => {
    if (selectedAnswer === data[currIndex].correctAnswer) {
      setScore(score + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAnswer]);

  if (!data || data.length === 0 || gamePhase === "GAME_OVER") {
    return null;
  }

  const handleNext = () => {
    setCurrIndex(currIndex + 1);
    setShowAnswer(false);
    setSelectedAnswer(null);
  };

  const handleFinish = () => {
    setGamePhase(gamePhases.gameOver);
  };

  const handleSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const currQuestion = data[currIndex];

  return (
    <div key={currQuestion.id} className="questions">
      <p className="question">
        <span> {currIndex + 1}. </span>
        {currQuestion.question}
      </p>
      <Question
        currQuestion={currQuestion}
        handleSelect={handleSelect}
        showAnswer={showAnswer}
        selectedAnswer={selectedAnswer}
      />
      <p className="trivia">{showAnswer && currQuestion.trivia}</p>
      <CheckAnswerButton
        showAnswer={showAnswer}
        handleShowAnswer={handleShowAnswer}
      />
      <NextButton
        showAnswer={showAnswer}
        currIndex={currIndex}
        handleNext={handleNext}
      />
      <FinishButton
        showAnswer={showAnswer}
        currIndex={currIndex}
        handleFinish={handleFinish}
      />
    </div>
  );
}
