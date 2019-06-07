import React, { Component } from "react";
import Counter from "../components/Counter/index";

// let isStateChanged = false;
// const computeNextState = (state, props) => {
//   return isStateChanged ? state : { count: props.count, id: props.id };
// };
/* let preState; */
class CounterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count,
      id: props.id
    };
    this.updateParent = props.updateParent;
    this.previosState = this.state;
    console.log("constructor");
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
    // isStateChanged = true;
  };
  reset = () => {
    this.setState({ count: 0 });
    // isStateChanged = true;
  };

  decrementCount = () => {
    this.setState({ count: this.state.count - 1 });
    // isStateChanged = true;
  };

  updateCounter = this.props.updateCount || {
    increment: this.incrementCount,
    reset: this.reset,
    decrement: this.decrementCount
  };

  static getDerivedStateFromProps(props, state) {
    console.log(`----------`);
    console.log(`ChildContainer ${state.id} -- getDerivedStateFromProps`);
    console.log(props.count);
    console.log(state.count);

    // return this.previosState !== this.state ?
    // return  { count: props.count, id: props.id }
   /*  if (preState.count !== state.count) {
      return state;
    } */
    //return { count: props.count, id: props.id };
  }

  shouldComponentUpdate(props, nextState) {
    console.log(`ChildContainer ${this.state.id} -- shouldComponentUpdate`);
    console.log(props);
    console.log(nextState);
    if (nextState.count === this.state.count) {
      return false;
    }
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(`ChildContainer ${this.state.id} -- getSnapshotBeforeUpdate`);
    console.log(prevProps.count);
    console.log(prevState.count);
    console.log(this.props.count !== prevProps.count);
    // console.log(this.state.count !== prevState.count);
    return this.state.count !== prevState.count;
  }

  componentDidUpdate(props, prevState, snapshot) {
    console.log(`ChildContainer ${this.state.id} -- componentDidUpdate`);
    console.log(props.count);
    console.log(this.props.count);
    console.log(prevState.count);
    console.log(this.state.count);
    console.log(snapshot);

    /* if (snapshot) {
      preState.count = this.state.count;
    } */
    // this.setState(props.count,);
    // this.updateParent(props.count, props.count);
    // }
    console.log(props.count);
    console.log(this.props.count);
    console.log(prevState.count);
    console.log(this.state.count);
    this.updateParent(this.state.id, this.state.count);
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
