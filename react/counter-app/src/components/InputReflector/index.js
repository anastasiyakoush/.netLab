import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

const InputReflector = props => {
  const { classes } = props;
  
  return (
    <div className={classes.labelWrapper}>
      <p className={classes.label}>Email:</p>
      <p className={classes.data}>{JSON.stringify(props.email)}</p>
      <p className={classes.label}>Password:</p>
      <p className={classes.data}>{JSON.stringify(props.password)}</p>
    </div>
  );
};

export default withStyles(styles)(InputReflector);