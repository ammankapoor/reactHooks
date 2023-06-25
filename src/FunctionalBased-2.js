import React, { useState } from "react";

export default function FuntionalBased(props) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count from FunctionalBased: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
