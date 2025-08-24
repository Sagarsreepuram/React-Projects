import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 2);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div >
      <h1>Counter : {count}</h1>
      <button onClick={decrement}>- Decrease</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>+ Increase</button>
    </div>
  );
};

export default Counter;
