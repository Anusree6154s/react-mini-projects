import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)} className='count'>+</button>
      <button onClick={() => setCount(count - 1)} className='count'>-</button>
      <br />
      <button onClick={() => setCount(0)} className='reset'>Reset</button>
    </div>
  );
}

export default App;
