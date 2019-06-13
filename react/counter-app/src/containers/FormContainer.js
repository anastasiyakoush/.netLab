import React, { useState } from "react";
import LoginForm from "../components/Form/index";
import InputDisplay from "../components/InputDisplay/index";
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
            isEmailValid: email !== "" && emailRegEx.test(email)
        });
    };

    const handlePasswordChange = event => {
        setPassword({
            password: event.target.value,
            isPasswordValid:
                password !== "" && validateLength(password, PASSWORD_MIN_LENGTH)
        });
    };

    const Handler = () => {
        setEmail({ isEmailValid: false });
        setPassword({ isPasswordValid: false });
        if (
            email !== "" &&
            password !== "" &&
            isEmailValid &&
            isPasswordValid
        ) {
            console.log(email);
            console.log(password);
            setEmail({ email: "", isEmailValid: true });
            setPassword({ password: "", isPasswordValid: true });
        } else {
            !isEmailValid && console.log("Incorrect email");
            !isPasswordValid && console.log("Incorrect password");
        }
    };

    const onKeyDownHandler = event => {
        event.keyCode === 13 && Handler();
    };

    return (
        <>
            <LoginForm
                onKeyDownHandler={onKeyDownHandler}
                email={email}
                password={password}
                handleEmailChange={handleEmailChange}
                handlePasswordChange={handlePasswordChange}
                Handler={Handler}
                passwordMinLength={PASSWORD_MIN_LENGTH}
                isEmailValid={isEmailValid}
                isPasswordValid={isPasswordValid}
            />
            <InputDisplay email={email} password={password} />
        </>
    );
};

export default FormContainer;