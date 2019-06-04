import React, { Component, Fragment } from "react";
import CounterContainer from "./CounterContainer";
import Counter from "../components/Counter/index";

class ParentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.minCount,
      childrenCounters: [{ count: 0 }]
    };
  }

  minCount = 1;

  increment = () => {
    let childrenCounters = [...this.state.childrenCounters];
    childrenCounters.push({ count: 0 });

    this.setState({
      count: this.state.count + 1,
      childrenCounters
    });
  };
  decrement = () => {
    const childrenCounters = [...this.state.childrenCounters];
    childrenCounters.pop();

    this.state.count !== this.minCount &&
      this.setState({
        count: this.state.count - 1,
        childrenCounters
      });
  };
  reset = () => {
    const childrenCounters = [...this.state.childrenCounters];
    childrenCounters.splice(1);

    this.setState({
      count: this.minCount,
      childrenCounters
    });
  };
  updateCount = {
    increment: this.increment,
    decrement: this.decrement,
    reset: this.reset
  };
  updateState(index, value) {
    let childrenCounters = [...this.state.childrenCounters];
    childrenCounters[index] = value;
    this.setState(childrenCounters)
  }
  shouldComponentUpdate() {
    console.log("ParentContainer -- shouldComponentUpdate");
    return true;
  }
  static getDerivedStateFromProps(props, state) {
    console.log("ParentContainer -- getDerivedStateFromProps");
    console.log(props);
    console.log(state);
  }
  getSnapshotBeforeUpdate() {
    console.log("ParentContainer -- getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("ParentContainer -- componentDidUpdate");
  }
  render() {
    console.log("ParentContainer -- render");
    return (
      <Fragment>
        <Counter count={this.state.count} updateCount={this.updateCount} />
        <hr />
        <Fragment>
          {this.state.childrenCounters.map((child, index) => (
            <CounterContainer
              key={index}
              id={index}
              count={child.count}
              updateCount={this.updateState}
            />
          ))}
        </Fragment>
      </Fragment>
    );
  }
  componentDidMount() {
    console.log("ParentContainer -- componentDidMount");
  }
  componentWillUnmount() {
    console.log("ParentContainer -- componentWillUnmount");
  }
}
export default ParentContainer;
