import React, { Component } from "react";
import { Container, Box } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import CounterContainer from "./CounterContainer";
import Counter from "../components/Counter/index";
import theme from "../components/Counter/styles";

const MIN_COUNT = 1;

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
    let childrenCounters = [...this.state.childrenCounters];
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
    this.setState({ childrenCounters });
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
          <Box className={"MuiBox-parent"}>
            <Counter count={this.state.count} updateCount={this.updateCount} />
          </Box>
          <Divider />
          <Grid>
            {this.state.childrenCounters.map((child, index) => (
              <CounterContainer
                border
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
