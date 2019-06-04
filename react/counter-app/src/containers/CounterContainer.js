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
    this.setState({ count: this.state.count + 1 });
    debugger;
    this.props.updateCount(this.props.id,this.state.count)
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  decrementCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  updateCounter = this.props.updateCount || {
    increment: this.incrementCount,
    reset: this.reset,
    decrement: this.decrementCount
  };

  shouldComponentUpdate(nextProps,nextState) {
    console.log(`ChildContainer ${this.state.id} -- shouldComponentUpdate`);
    return !(nextState.count === this.state.count);
  }
  static getDerivedStateFromProps(props, state) {
    console.log(`ChildContainer ${props.id} -- getDerivedStateFromProps`);
    console.log(props);
    console.log(state)
  }
  getSnapshotBeforeUpdate(props, state) {
    console.log(`ChildContainer ${this.state.id} -- getSnapshotBeforeUpdate`);
    return null;
  }
  componentDidUpdate() {
    console.log(`ChildContainer ${this.state.id} -- componentDidUpdate`);
  }



  render() {
    console.log(`ChildContainer ${this.state.id} -- render`);
    debugger;
    return (
      <Counter count={this.state.count} updateCount={this.updateCounter} />
    );
  }



  componentDidMount() {
    console.log(`ChildContainer ${this.state.id} -- componentDidMount`);
  }
  componentWillUnmount() {
    console.log(`ChildContainer ${this.state.id} -- componentWillUnmount`);
  }
}

export default CounterContainer;
