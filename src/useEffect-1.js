/* When and how it runs?
    How Dependencies work?
    Primitive and non primitive dependency
    when to use clean up function
*/

import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <span>You clicked {number} times</span>
      <button onClick={() => setNumber((prev) => prev + 1)}>Increase</button>
    </div>
  );
}

export default App;
