import { useState } from "react";
import "./index.css";

function App() {
  const [cal, setCal] = useState("");
  const [result, setResult] = useState("");

  const ops = ["+", "-", "*", "/", "."];

  const updateCal = (value) => {
    if ((ops.includes(value) && cal === "") || (ops.includes(value) && ops.includes(cal.slice(-1)))) {
      return;
    }
    setCal(cal + value);

    if (!ops.includes(value)) {
      setResult(eval(cal + value).toString());
    }
  };

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCal(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };

  const calculate = () => {
    setCal(eval(cal).toString());
  };

  const deletelast = () => {
    if (cal == "") {
      return;
    }
    const value = cal.slice(0, -1);
    setCal(value);
  };
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ""} &nbsp; {cal || "0"}
        </div>
        <div className="operators">
          <button onClick={() => updateCal("/")}>/</button>
          <button onClick={() => updateCal("+")}>+</button>
          <button onClick={() => updateCal("-")}>-</button>
          <button onClick={() => updateCal("*")}>x</button>
          <button onClick={deletelast}>DEL</button>
        </div>
        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCal("0")}>0</button>
          <button onClick={() => updateCal(".")}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
