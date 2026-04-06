import { useState } from "react";
import "./App.css";

// function App() {
//   const [value, setValue] = useState(1);

//   // const [multipliedValue, setMultipliedValue] = useState(5);
//   // const multiplyByFive = () => {
//   //   setMultipliedValue(value * 5);
//   //   setValue(value + 1);
//   // };

//   let multipliedValue = value * 5;
//   const multiplyByFive = () => {
//     setValue(value + 1);
//   };

//   return (
//     <>
//       <h2>Main Value: {value}</h2>
//       <button onClick={multiplyByFive}>Multiply by 5</button>
//       <h2>Multiplied Value: {multipliedValue}</h2>
//     </>
//   );
// }

function App() {
  console.log("Rendered", new Date().toUTCString());

  // const [value, setValue] = useState(1);
  // const clickMe = () => {
  //   setValue(1);
  // };

  const [value, setValue] = useState({ value: 1 });
  const clickMe = () => {
    setValue({ value: 1 });
  };

  return (
    <>
      {/* <h2>Main Value: {value}</h2> */}
      <h2>Main Value: {value.value}</h2>
      <button onClick={clickMe}>Click Me</button>
    </>
  );
}

export default App;
