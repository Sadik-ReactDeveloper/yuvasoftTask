// ChildComponent.js

import React from 'react';

const ChildComponent = ({ count, dispatch }) => {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
};

export default ChildComponent;
