import React, { useState, Fragment } from "react";
import LoginForm from "../../components/Form/index";
import { Box, Typography, Divider } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import { EMAIL_MIN_LENGTH, PASSWORD_MIN_LENGTH } from "../../consts";

const FormContainer = props => {
  const { classes } = props;
  const [{ email, isEmailValid }, setEmail] = useState({
    email: "",
    isEmailValid: true
  });
  const [{ password, isPasswordValid }, setPassword] = useState({
    password: "",
    isPasswordValid: true
  });
  const validate = (value, constraint) => {
    return value.length + 1 >= constraint;
  };
  /*  const [isValid, setIsValid] = useState(true); */

  const handleEmailChange = event => {
    const value = event.target.value;
    /*     console.log(value); */
    setEmail({ email: value, isEmailValid: validate(email, EMAIL_MIN_LENGTH) });
    /*  console.log(email);
    console.log(isEmailValid); */
    /* setIsValid(email.length + 1 >= EMAIL_MIN_LENGTH); */
  };
  const handlePasswordChange = event => {
    const value = event.target.value;
    setPassword({
      password: value,
      isPasswordValid: validate(password, PASSWORD_MIN_LENGTH)
    });
    /* setIsValid(password.length + 1 >= PASSWORD_MIN_LENGTH); */
  };
  const submitHadler = () => {
    if (isEmailValid && isPasswordValid) {
      console.log(email);
      console.log(password);
      setEmail({ email: "", isEmailValid: true });
      setPassword({ password: "", isPasswordValid: true });
    } else console.log("error");
  };

  return (
    <>
      <LoginForm
        email={email}
        password={password}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        submitHadler={submitHadler}
        emailMinLength={EMAIL_MIN_LENGTH}
        passwordMinLength={PASSWORD_MIN_LENGTH}
        isEmailValid={isEmailValid}
        isPasswordValid={isPasswordValid}
      />
      <Box className={classes.labelWrapper}>
        <Typography className={classes.label}>Email:</Typography>
        <Typography className={classes.data}>
          {JSON.stringify(email)}
        </Typography>
        <Typography className={classes.label}>Password:</Typography>
        <Typography className={classes.data}>
          {JSON.stringify(password)}
        </Typography>
      </Box>
    </>
  );
};
export default withStyles(styles)(FormContainer);
