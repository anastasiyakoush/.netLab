import React, { useState } from "react";
import LoginForm from "../components/Form/index";
import InputDisplay  from "../components/InputDisplay/index";
import { PASSWORD_MIN_LENGTH, emailRegEx } from "../consts";
import { validateLength } from "../validators";

const FormContainer = () => {
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
      isEmailValid: emailRegEx.test(email)
    });
  };

  const handlePasswordChange = event => {
    setPassword({
      password: event.target.value,
      isPasswordValid: validateLength(password, PASSWORD_MIN_LENGTH)
    });
  };

  const Handler = () => {
    if (email !== "" && password !== "" && isEmailValid && isPasswordValid) {
      console.log(email);
      console.log(password);
      setEmail({ email: "", isEmailValid: true });
      setPassword({ password: "", isPasswordValid: true });
    } else console.log("error");
  };
  const onKeyPressHandler = event => {
    event.key === "Enter" && Handler();
  };

  return (
    <>
      <LoginForm
        onKeyPressHandler={onKeyPressHandler}
        email={email}
        password={password}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        Handler={Handler}
        passwordMinLength={PASSWORD_MIN_LENGTH}
        isEmailValid={isEmailValid}
        isPasswordValid={isPasswordValid}
      />
      <InputDisplay  email={email} password={password} />
    </>
  );
};

export default FormContainer;