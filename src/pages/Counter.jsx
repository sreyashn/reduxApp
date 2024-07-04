
import React from "react";
import { useSelector, useDispatch } from 'react-redux';


const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state;
  }
};


const Count = () => {
  const count = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    return {
      type: 'INCREMENT'
    };
  };

  const decrement = () => {
    return {
      type: 'DECREMENT'
    };
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};


export { reducer, Count };
