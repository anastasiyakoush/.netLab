import React, { Component, Fragment } from "react";
import CounterContainer from "./CounterContainer";
import Counter from "../components/Counter/index";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { theme, parentStyles } from "../components/Counter/styles";
import { withStyles } from "@material-ui/styles";

const MIN_COUNT = 1;
const classes=parentStyles;

class ParentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: MIN_COUNT,
      childrenCounters: [{ count: 0 }]
    };
  }

  increment = () => {
    let childrenCounters = [...this.state.childrenCounters];
    childrenCounters = childrenCounters.map(child =>
      child.count % 2 ? child : { count: child.count + 1 }
    );
    childrenCounters.push({ count: 0 });
    this.setState(state => ({
      count: state.count + 1,
      childrenCounters
    }));
  };

  decrement = () => {
    let childrenCounters = [...this.state.childrenCounters];
    childrenCounters = childrenCounters.map(child =>
      child.count % 2 ? { count: child.count - 1 } : child
    );
    childrenCounters.pop();
    this.state.count !== MIN_COUNT &&
      this.setState({
        count: this.state.count - 1,
        childrenCounters
      });
  };

  reset = () => {
    const childrenCounters = [...this.state.childrenCounters];
    childrenCounters.splice(1);
    this.setState({
      count: MIN_COUNT,
      childrenCounters
    });
  };

  updateCount = {
    increment: this.increment,
    decrement: this.decrement,
    reset: this.reset
  };

  updateParent = (index, value) => {
    let childrenCounters = [...this.state.childrenCounters];
    childrenCounters[index].count = value;
    this.setState(state => ({ childrenCounters }));
  };

  shouldComponentUpdate() {
    console.log("ParentContainer -- shouldComponentUpdate");
    return true;
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    console.log(`----------`);
    console.log("ParentContainer -- getDerivedStateFromProps");
    return nextState;
  }

  getSnapshotBeforeUpdate() {
    console.log("ParentContainer -- getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("ParentContainer -- componentDidUpdate");
  }

  componentDidMount() {
    console.log("ParentContainer -- componentDidMount");
  }

  componentWillUnmount() {
    console.log("ParentContainer -- componentWillUnmount");
  }

  render() {
    console.log("ParentContainer -- render");
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Counter className={classes.root} count={this.state.count} updateCount={this.updateCount} />
          <hr />
          <Grid /* direction={"row"} */>
            {this.state.childrenCounters.map((child, index) => (
              <CounterContainer
                key={index}
                id={index}
                count={child.count}
                updateParent={this.updateParent.bind(this)}
              />
            ))}
          </Grid>
        </Container>
      </ThemeProvider>
    );
  }
}

export default ParentContainer;
