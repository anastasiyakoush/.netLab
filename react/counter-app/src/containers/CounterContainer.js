import React, { useState, useEffect } from "react";
import Counter from "../components/Counter/index";

const CounterContainer = props => {
  const [count, setCount] = useState(props.count);
  const { id, updateParent } = props;

  const incrementCount = () => {
    setCount(props.count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  const decrementCount = () => {
    setCount(props.count - 1);
  };

  const updateCounter = props.updateCount || {
    increment: incrementCount,
    reset: reset,
    decrement: decrementCount
  };

  useEffect(() => {
    updateParent(id, count)
  }, [count])

  return (<Counter count={props.count} updateCount={updateCounter} />);

}

export default CounterContainer;