// ParentComponent.js

import React, { useReducer } from 'react';

const initialState = {
  count: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const ParentComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <ChildComponent count={state.count} dispatch={dispatch} />
    </div>
  );
};

export default ParentComponent;
