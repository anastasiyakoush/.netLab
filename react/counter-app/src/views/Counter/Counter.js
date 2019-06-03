import React from "react";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import ReplayIcon from "@material-ui/icons/Replay";
import AddIcon from "@material-ui/icons/Add";
import { Typography } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import "./Counter.css";
import PropTypes from "prop-types";

const theme = createMuiTheme({
  overrides: {
    MuiIconButton: {
      root: {
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        padding: "25px",
        margin: "0 10px"
      }
    },
    MuiTypography: {
      body1: {
        fontSize: "80px",
        textAlign: "center"
      }
    }
  }
});

const Counter = props => {
  return (
    <ThemeProvider theme={theme}>
      <Typography>{props.count}</Typography>
      <div className="container">
        <IconButton onClick={props.decreaseCount}>
          <RemoveIcon />
        </IconButton>
        <IconButton onClick={props.resetCount}>
          <ReplayIcon />
        </IconButton>
        <IconButton onClick={props.increaseCount}>
          <AddIcon />
        </IconButton>
      </div>
    </ThemeProvider>
  );
};

Counter.propTypes = {
  decreaseCount: PropTypes.func.isRequired,
  resetCount: PropTypes.func.isRequired,
  increaseCount: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired
};

export default Counter;
