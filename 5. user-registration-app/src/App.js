import { useState } from "react";
import "./App.css";

function App() {
  // maintain a set of input values and input errors
  // when !validated, show error, cancel registration
  // when validated , short alert that user registered, and reset form

  const initialInput = {
    name: "",
    email: "",
    password: "",
    "confirm-password": "",
  };
  const initialError = {
    name: "",
    email: "",
    password: "",
    "confirm-password": "",
  };

  const [input, setInput] = useState(initialInput);
  const [errors, setErrors] = useState(initialError);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validated()) {
      setTimeout(() => {
        alert("User Registered Successfully!");
        setInput(initialInput);
      }, 5);
    }
  };

  const validated = () => {
    let errorFlag = false;
    let errorObj = { ...initialError };

    if (!input.name) {
      errorObj.name = "Name is required";
      errorFlag = true;
    }

    if (!input.email) {
      errorObj.email = "Email is required";
      errorFlag = true;
    } else if (!/\S+@\S+\.\S+/.test(input.email)) {
      //checkout personal regex notes
      errorObj.email = "Invalid email format";
      errorFlag = true;
    }

    if (!input.password) {
      errorObj.password = "Password is required";
      errorFlag = true;
    } else if (!/^(?=.*[A-Z]).+$/.test(input.password)) {
      //checkout personal regex notes
      errorObj.password = "Password must contain atleast one capital letter";
      errorFlag = true;
    } else if (!/^(?=.*\d).+$/.test(input.password)) {
      //checkout personal regex notes
      errorObj.password = "Password must contain atleast one number";
      errorFlag = true;
    } else if (!/^(?=.*[\W_]).+$/.test(input.password)) {
      //checkout personal regex notes
      errorObj.password = "Password must contain atleast one special character";
      errorFlag = true;
    }

    if (!input["confirm-password"]) {
      errorObj["confirm-password"] = "Confirm Password is required";
      errorFlag = true;
    } else if (input["confirm-password"] !== input.password) {
      errorObj["confirm-password"] = "Password dont match Confirm Password";
      errorFlag = true;
      errorFlag = true;
    }

    if (errorFlag) setErrors(errorObj);
    else setErrors(initialError);
    
    return !errorFlag;
  };

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="App">
      <h1>Registration</h1>
      <form
        action="submit"
        onSubmit={(e) => handleSubmit(e)}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "150px",
          margin: "0 auto",
          gap: 5,
        }}
      >
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
          value={input.name}
        />
        {errors && errors.name && <p className="errors">{errors.name}</p>}
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={input.email}
        />
        {errors && errors.email && <p className="errors">{errors.email}</p>}
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={input.password}
        />
        {errors && errors.password && (
          <p className="errors">{errors.password}</p>
        )}
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirm-password"
          onChange={handleChange}
          value={input['confirm-password']}
        />
        {errors && errors["confirm-password"] && (
          <p className="errors">{errors["confirm-password"]}</p>
        )}
        <button>Register</button>
      </form>
    </div>
  );
}

export default App;
