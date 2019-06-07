import React, { Component } from "react";
import Counter from "../components/Counter/index";

class CounterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count,
      id: props.id
    };
    this.updateParent = props.updateParent;
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

  updateCounter = this.props.updateCount || {
    increment: this.incrementCount,
    reset: this.reset,
    decrement: this.decrementCount
  };

  componentWillReceiveProps(nextProps) {
    console.log(`ChildContainer ${this.state.id} -- componentWillReceiveProps`);
    if (this.state.count !== nextProps.count) {
      this.setState({ id: nextProps.id, count: nextProps.count });
    }
  }

  shouldComponentUpdate(props, nextState) {
    console.log(`ChildContainer ${this.state.id} -- shouldComponentUpdate`);
    return nextState.count !== this.state.count;
  }

  componentDidUpdate(props, prevState, snapshot) {
    console.log(`ChildContainer ${this.state.id} -- componentDidUpdate`);

    if (prevState.count !== this.state.count) {
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
