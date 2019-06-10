import React, { useState } from "react";
import { Container, Button, TextField, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import { tip } from "../../consts";

const LoginForm = props => {
  const { classes } = props;
  const tipField = (field, constraint) => {
    return (
      <Typography className={classes.invalid}>
        {tip(field, constraint)}
      </Typography>
    );
  };

  return (
    <Container className={classes.container}>
      <TextField
        label="Email"
        type="email"
        value={props.email}
        name="email"
        onChange={props.handleEmailChange}
        variant="outlined"
        className={classes.input}
        required
      />
      {!props.isEmailValid && tipField("Email", props.emailMinLength)}
      <TextField
        label="Password"
        type="password"
        value={props.password}
        name="password"
        onChange={props.handlePasswordChange}
        variant="outlined"
        className={classes.input}
        required
      />
      {!props.isPasswordValid && tipField("Password", props.passwordMinLength)}
      <Button className={classes.button} onClick={props.submitHadler}>
        Log in
      </Button>
    </Container>
  );
};

export default withStyles(styles)(LoginForm);
