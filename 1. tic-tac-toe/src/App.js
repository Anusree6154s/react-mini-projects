import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [blocks, setBlocks] = useState(Array.from({ length: 9 }).fill(null));
  const [player, setPlayer] = useState(true);
  const [isWinner, setIsWinner] = useState(false);
  const [isTie, setIsTie] = useState(false);

  const handleValue = (e) => {
    if (blocks[e.target.name]) return;
    let newBlocksArr = [...blocks];
    newBlocksArr[e.target.name] = player === true ? "X" : "O";
    setPlayer(!player);
    setBlocks(newBlocksArr);
  };

  useEffect(() => {
    const checkWinner = () => {
      const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      for (let combo of winningCombinations) {
        const [a, b, c] = combo;
        if (blocks[a] && blocks[a] === blocks[b] && blocks[a] === blocks[c]) {
          return true;
        }
      }

      if (blocks.every((block) => block !== null)) {
        return "tie";
      }

      return null;
    };

    if (checkWinner() === "tie") {
      setIsTie(true);
    } else if (checkWinner()) {
      setIsWinner(true);
    }
  }, [blocks]);

  const handleReset = () => {
    setBlocks(Array.from({ length: 9 }).fill(null));
    setIsWinner(false);
    setIsTie(false);
    setPlayer(true);
  };

  console.log();
  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>

      {isWinner || isTie ? (
        <h4>Game Over</h4>
      ) : (
        <h4>Player{player === true ? 1 : 2}</h4>
      )}
      <br />

      <div>
        {Array.from({ length: 3 }, (_, rowIndex) => (
          <div
            key={rowIndex}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {blocks
              .slice(rowIndex * 3, rowIndex * 3 + 3)
              .map((value, colIndex) => (
                <button
                  key={rowIndex * 3 + colIndex}
                  onClick={(e) => handleValue(e)}
                  name={rowIndex * 3 + colIndex}
                  style={{
                    width: "25px",
                    height: "25px",
                  }}
                  disabled={isWinner || isTie}
                >
                  {value}
                </button>
              ))}
          </div>
        ))}
      </div>

      <br />
      {isWinner && <h4>Player{player === false ? 1 : 2} WON!</h4>}
      {isTie && <h4>Tie</h4>}
      <br />

      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
