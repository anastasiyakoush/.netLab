import React, { Component } from "react";
import Counter from "../components/Counter/index";

let isStateChanged = false;
const computeNextState = (state, props) => {
  return isStateChanged ? state : { count: props.count, id: props.id };
};

class CounterContainer extends Component {
  state = {
    count: this.props.count,
    id: this.props.id
  };

  updateParent = this.props.updateParent;

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
    isStateChanged = true;
  };
  reset = () => {
    this.setState({ count: 0 });
    isStateChanged = true;
  };

  decrementCount = () => {
    this.setState({ count: this.state.count - 1 });
    isStateChanged = true;
  };

  updateCounter = this.props.updateCount || {
    increment: this.incrementCount,
    reset: this.reset,
    decrement: this.decrementCount
  };

  static getDerivedStateFromProps(props, state) {
    console.log(`----------`);
    console.log(`ChildContainer ${state.id} -- getDerivedStateFromProps`);
    if (props.count !== state.count) {
      return computeNextState(state, props);
    }
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`ChildContainer ${this.state.id} -- shouldComponentUpdate`);
    if (nextState.count === this.state.count) {
      return false;
    }
    return true;
  }

  getSnapshotBeforeUpdate(props, state) {
    console.log(`ChildContainer ${this.state.id} -- getSnapshotBeforeUpdate`);
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`ChildContainer ${this.state.id} -- componentDidUpdate`);
    if (prevProps.count !== this.state.count) {
      isStateChanged = false;
      this.updateParent(this.state.id, this.state.count);
    }
  }

  componentDidMount() {
    console.log(`ChildContainer ${this.state.id} -- componentDidMount`);
  }

  componentWillUnmount() {
    console.log(`ChildContainer ${this.state.id} -- componentWillUnmount`);
  }

  render() {
    console.log(`ChildContainer ${this.state.id} -- render`);
    return (
      <Counter count={this.state.count} updateCount={this.updateCounter} />
    );
  }
}

export default CounterContainer;
