import { useState } from "react";
import "./App.css";
import Questions from "./components/Questions/Questions";
import Scoreboard from "./components/Scoreboard";

function App() {
  const gamePhases = {
    questions: "QUESTIONS",
    gameOver: "GAME_OVER",
  };
  const [gamePhase, setGamePhase] = useState(gamePhases.questions);
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>Quiz</h1>
      <Questions
        gamePhase={gamePhase}
        setGamePhase={setGamePhase}
        gamePhases={gamePhases}
        score={score}
        setScore={setScore}
      />
      <Scoreboard
        gamePhase={gamePhase}
        setGamePhase={setGamePhase}
        gamePhases={gamePhases}
        score={score}
        setScore={setScore}
      />
    </div>
  );
}

export default App;
