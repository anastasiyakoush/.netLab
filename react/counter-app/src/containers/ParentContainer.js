import React, { useState } from "react";
import { MIN_COUNT } from "../consts";
import CounterContainer from "./CounterContainer";
import Counter from "../components/Counter/index";
import { Container, Box } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import theme from "../components/Counter/styles";

const ParentContainer = () => {
  const [count, setCount] = useState(MIN_COUNT);
  const [childrenCounters, setChildrenCounters] = useState([{ count: 0 }])

  const increment = () => {
    let children = childrenCounters.map(child => child.count % 2 ? child : { count: child.count + 1 });
    children.push({ count: 0 });
    setCount(count + 1);
    setChildrenCounters(children)
  };

  const decrement = () => {
    let children = [...childrenCounters];
    children = children.map(child => child.count % 2 ? { count: child.count - 1 } : child);
    children.pop();
    if (count !== MIN_COUNT) {
      setCount(count - 1);
      setChildrenCounters(children)
    }
  };

  const reset = () => {
    let children = [...childrenCounters];
    children.splice(1);
    setCount(MIN_COUNT);
    setChildrenCounters(children)
  };

  const updateCount = { increment, decrement, reset };

  const updateParent = (index, value) => {
    let children = [...childrenCounters];
    children[index].count = value;
    setChildrenCounters(children);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Box className={`MuiBox-parent`}>
          <Counter count={count} updateCount={updateCount} />
        </Box>
        <Divider />
        <Grid>
          {childrenCounters.map((child, index) => (
            <CounterContainer
              key={index}
              id={index}
              count={child.count}
              updateParent={updateParent}
            />
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default ParentContainer;