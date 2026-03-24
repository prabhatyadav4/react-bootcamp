import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  const minusValue = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value: {count}</h2>
      <button onClick={addValue}> Add (+) </button>
      <button onClick={minusValue}> Minus (-) </button>
    </>
  );
}

export default App;