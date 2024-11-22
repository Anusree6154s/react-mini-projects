import React from "react";
import { data } from "../db/questions";

export default function Scoreboard({
  gamePhase,
  setGamePhase,
  gamePhases,
  score,
  setScore,
}) {
  if (gamePhase === "QUESTIONS") return null;

  const handleRestart = () => {
    setScore(0);
    setGamePhase(gamePhases.questions);
  };

  const totalScore = data.length;

  return (
    <div className="scoreboard">
      <h3>Score Board</h3>
      <span>
        You Scored - <strong> {score}</strong>/{totalScore}
      </span>
      <p>🎉</p>
      <br />
      <button onClick={handleRestart} className="restart-button">
        Restart Quiz
      </button>
    </div>
  );
}
