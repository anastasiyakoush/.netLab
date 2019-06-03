import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "@material-ui/styles";
import { Typography, Container } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import ReplayIcon from "@material-ui/icons/Replay";
import AddIcon from "@material-ui/icons/Add";
import theme from "./styles";

const Counter = props => {
  return (
    <ThemeProvider theme={theme}>
      <Typography>{props.count}</Typography>
      <Container>
        <IconButton onClick={props.updateCount.decrement}>
          <RemoveIcon />
        </IconButton>
        <IconButton onClick={props.updateCount.reset}>
          <ReplayIcon />
        </IconButton>
        <IconButton onClick={props.updateCount.increment}>
          <AddIcon />
        </IconButton>
      </Container>
    </ThemeProvider>
  );
};

Counter.propTypes = {
  updateCount: PropTypes.objectOf(PropTypes.func),
  count: PropTypes.number.isRequired
};

export default Counter;
