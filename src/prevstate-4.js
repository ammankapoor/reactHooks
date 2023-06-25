import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    // Update the count based on its previous value using a function
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    // Update the count based on its previous value using a function
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
