import { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState({ value: "", done: false });

  const handleDelete = (index) => {
    let listCopy = [...list];
    listCopy.splice(index, 1);
    setList(listCopy);
  };

  const handleAdd = () => {
    input.value && setList((prev) => [...prev, input]);
    setInput({ value: "", done: false });
  };

  const handleDone = (index) => {
    const newList = [...list];
    newList[index].done = !list[index].done;
    setList(newList);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>

      <br />
      <ul
        style={{
          height: "50vh",
          width: "50%",
          margin: "0 auto",
          border: "1px solid pink",
          padding: "0px",
          overflowY: "scroll",
        }}
      >
        {list.length !== 0 ? (
          list.map((item, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                gap: "20px",
                background: "whitesmoke",
                padding: "20px",
                margin: "5px",
              }}
            >
              <span
                style={{ width: "10px", cursor: "pointer" }}
                onClick={() => handleDone(index)}
              >
                {item.done ? "✅" : "⬜"}
              </span>
              <div
                style={{
                  width: "100%",
                  textAlign: "left",
                  textDecoration: item.done ? "line-through" : "none",
                }}
              >
                <span>{item.value}</span>
              </div>
              <button
                style={{
                  color: "white",
                  background: "red",
                  border: "none",
                  borderRadius: "5px",
                  padding: "5px 10px",
                  cursor: "pointer",
                }}
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p style={{ color: "grey", fontSize: "12px", textAlign: "center" }}>
            No items in todo list
          </p>
        )}
      </ul>
      <br />
      <div
        style={{
          display: "flex",
          gap: "20px",
          width: "50%",
          height: "7vh",
          margin: "0 auto",
        }}
      >
        <input
          style={{ border: "1px solid black", flex: 1, height: "100%" }}
          onChange={(e) => setInput({ value: e.target.value, done: false })}
          value={input.value}
        />
        <button style={{ width: "10%" }} onClick={handleAdd}>
          Add
        </button>
      </div>
    </div>
  );
}

export default App;
