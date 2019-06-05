import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "@material-ui/styles";
import { Typography, Container,Box } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import ReplayIcon from "@material-ui/icons/Replay";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from '@material-ui/styles';
import theme from "./styles";

const Counter = props => {
  return (    
      <Box >
        <Typography>{props.count}</Typography>
        <Box>
          <IconButton onClick={props.updateCount.decrement}>
            <RemoveIcon />
          </IconButton>
          <IconButton onClick={props.updateCount.reset}>
            <ReplayIcon />
          </IconButton>
          <IconButton onClick={props.updateCount.increment}>
            <AddIcon />
          </IconButton>
        </Box>
      </Box>
  );
};
Counter.propTypes = {
  updateCount: PropTypes.objectOf(PropTypes.func),
  count: PropTypes.number.isRequired
};
export default Counter;
