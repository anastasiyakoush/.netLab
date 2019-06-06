import React, { Component } from "react";
import Counter from "../components/Counter/index";

class CounterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count,
      id: props.id
    };
  }

  incrementCount = () => {
    this.setState(state => {
      let newState = { ...state, count: state.count + 1 };
      this.props.updateParent(newState.id, newState.count);
      return newState;
    });
  };

  reset = () => {
    this.setState(state => {
      let newState = { ...state, count: 0 };
      this.props.updateParent(newState.id, newState.count);
      return newState;
    });
  };

  decrementCount = () => {
    this.setState(state => {
      let newState = { ...state, count: state.count - 1 };
      this.props.updateParent(newState.id, newState.count);
      return newState;
    });
  };

  updateCounter = this.props.updateCount || {
    increment: this.incrementCount,
    reset: this.reset,
    decrement: this.decrementCount
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`ChildContainer ${this.state.id} -- shouldComponentUpdate`);
    return nextState.count !== this.state.count;
  }

  static getDerivedStateFromProps(nextProps) {
    console.log(`----------`);
    console.log(`ChildContainer ${nextProps.id} -- getDerivedStateFromProps`);
    return { ...nextProps };
  }

  getSnapshotBeforeUpdate(props, state) {
    console.log(`ChildContainer ${this.state.id} -- getSnapshotBeforeUpdate`);
    return null;
  }

  componentDidUpdate() {
    console.log(`ChildContainer ${this.state.id} -- componentDidUpdate`);
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
