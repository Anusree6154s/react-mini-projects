import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000); //1000 millisecond =1sec
    }

    return () => clearInterval(interval);
  }, [isRunning]);


  const formattedTime = () => {
    let seconds = time % 60; //seconds must repeat after 60 times of 10 millisec
    let minutes = Math.floor(time / 60) % 60; //minutes must repeat after 60 times of second
    let hours = Math.floor(time / (60 * 60));

    let formattedSec = seconds.toString().padStart(2, "0");
    let formattedMin = minutes.toString().padStart(2, "0");
    let formattedHr = hours.toString().padStart(2, "0");
    return `${formattedHr}:${formattedMin}:${formattedSec}`;
  };

  const reset = () => {
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div className="App">
      <p>time {formattedTime()}</p>
      <button onClick={() => setIsRunning(true)}>start</button>
      <button onClick={() => setIsRunning(false)}>stop</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default App;
