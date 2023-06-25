import React, { useState } from "react";

export default function FuntionalBased(props) {
  console.log("re-render");
  const [count, setCount] = useState(
    (function () {
      console.log("asddsa");
      return 0;
    })()
  );

  return (
    <div>
      <p>Count from FunctionalBased: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
