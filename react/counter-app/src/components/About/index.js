import React from "react";
import { aboutCounters } from "../../consts";
import { Container, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

const About = props => {
  const { classes } = props;

  return (
    <Container>
      <Paper className={classes.container}>{aboutCounters}</Paper>
    </Container>
  );
};

export default withStyles(styles)(About);