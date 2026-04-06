import { useState } from "react";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(0);

  return (
    <>
      <div style={{ padding: "2rem" }}>
        <h1>Welcome to Chai Aur Code</h1>
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Login</button>
        <div>
          <h3>&& Operator</h3>
          {!!isLoggedIn && <p>Welcome Prabhat</p>}
        </div>
        <div>
          <h3>&& Operator</h3>
          {isLoggedIn ? <p>Welcome Prabhat</p> : <p>Please Login</p>}
        </div>
      </div>
    </>
  );
}

export default App;
