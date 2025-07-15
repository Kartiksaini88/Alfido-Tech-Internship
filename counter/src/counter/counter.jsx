import React, { useState } from "react";
import "./counter.css"; // Assuming you have a CSS file for styling
export default function Counter() {
  // This component will be used to display and manage a counter
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);

  const decrement = () => {
      setCount((prev) => (prev > 0 ? prev - 1 : 0));
  }

  const reset = () => setCount(0);

  return (
    <div className="container">
      <div className="counter-box">
        <h1>Count: {count}</h1>
        <div className="buttons">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement} >Decrement</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}
