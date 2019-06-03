import React, { Component } from "react";
import Counter from "../components/Counter/index";

class CounterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  decrementCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  updateCounter = {
    increment: this.incrementCount,
    reset: this.reset,
    decrement:this.decrementCount
  };
  
  render() {
    return (
      <Counter count={this.state.count} updateCount={this.updateCounter} />
    );
  }
}

export default CounterContainer;
