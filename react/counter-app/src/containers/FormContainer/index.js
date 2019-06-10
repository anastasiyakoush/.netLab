import React, { useState } from "react";
import LoginForm from "../../components/Form/index";
import { PASSWORD_MIN_LENGTH, emailRegEx } from "../../consts";
import { validateLength } from "../../validators";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

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

  const handleEmailChange = event => {
    setEmail({
      email: event.target.value,
      isEmailValid: email.match(emailRegEx)
    });
  };

  const handlePasswordChange = event => {
    setPassword({
      password: event.target.value,
      isPasswordValid: validateLength(password, PASSWORD_MIN_LENGTH)
    });
  };

  const submitHadler = () => {
    if (email !== "" && password !== "" && isEmailValid && isPasswordValid) {
      console.log(email);
      console.log(password);
      setEmail({ email: "", isEmailValid: true });
      setPassword({ password: "", isPasswordValid: true });
    } else console.log("error");
  };
  const onKeyPressHandler = event => {
    event.key === "Enter" && submitHadler();
  };

  return (
    <>
      <LoginForm
        onKeyPressHandler={onKeyPressHandler}
        email={email}
        password={password}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        submitHadler={submitHadler}
        passwordMinLength={PASSWORD_MIN_LENGTH}
        isEmailValid={isEmailValid}
        isPasswordValid={isPasswordValid}
      />
      <div className={classes.labelWrapper}>
        <p className={classes.label}>Email:</p>
        <p className={classes.data}>{JSON.stringify(email)}</p>
        <p className={classes.label}>Password:</p>
        <p className={classes.data}>{JSON.stringify(password)}</p>
      </div>
    </>
  );
};

export default withStyles(styles)(FormContainer);
