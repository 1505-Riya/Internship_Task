import React, { useState } from 'react';

const Counter = () => {
  // Declare a state variable named "count" with an initial value of 0
  const [count, setCount] = useState(0);

  const increment = () => {
    // When the button is clicked, update the "count" state by increasing it by 1
    setCount(count + 1);
  };

  const decrement = () => {
    // When the button is clicked, update the "count" state by decreasing it by 1
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Current count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
