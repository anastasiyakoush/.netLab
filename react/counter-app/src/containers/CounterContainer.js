import React, { Component } from "react";
import Counter from "../views/Counter/Counter";

class CounterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  resetCount = () => {
    this.setState({ count: 0 });
  };
  decreaseCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <Counter
        count={this.state.count}
        increaseCount={this.increaseCount}
        resetCount={this.resetCount}
        decreaseCount={this.decreaseCount}
      />
    );
  }
}

export default CounterContainer;
