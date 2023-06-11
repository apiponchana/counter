import React from "react";
import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";
import { counterActions } from "../store/counter";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const decreaseHandler = () => {
    dispatch(counterActions.decrease(5));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  let content = "Counter is zero";

  if (counter > 0) {
    content = "Positive real numbers";
  } else if (counter < 0) {
    content = "Negative real numbers";
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>

      <p>
        {show && <strong className={classes.textcounter}>{counter}</strong>}
      </p>

      <p>
        <strong>{content}</strong>
      </p>

      <div>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={decreaseHandler}>Decrement by 5</button>
      </div>
      <div>
        <button onClick={toggleCounterHandler}>Toggle</button>
      </div>
    </main>
  );
};

export default Counter;
