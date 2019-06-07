import React from "react";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

const NoMatch = props => {
  const { classes } = props;
  
  return <Typography className={classes.root}>404 - page not found</Typography>;
};
export default withStyles(styles)(NoMatch);