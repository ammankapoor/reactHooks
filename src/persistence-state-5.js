import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(() => {
    // Retrieve the count value from local storage on component initialization
    const storedCount = localStorage.getItem("count");
    return storedCount ? parseInt(storedCount, 10) : 0;
  });

  useEffect(() => {
    // Store the count value in local storage whenever it changes
    localStorage.setItem("count", count.toString());
  }, [count]);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
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
