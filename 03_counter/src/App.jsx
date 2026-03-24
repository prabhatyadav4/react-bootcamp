import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    if (count < 20) {
      
      // setCount(count + 1);
      // setCount(count + 1);
      // setCount(count + 1);
      // setCount(count + 1);         // ---> This increments only 1 times doesn't matter how many times it passes.
      
      setCount(count => count + 1);
      setCount(count => count + 1);
      setCount(count => count + 1);
      setCount(count => count + 1);  // ---> This increments n (no. of setCount) times.
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