import React, { useState } from "react";
import LoginForm from "../components/Form/index";
import InputDisplay from "../components/InputDisplay/index";
import { PASSWORD_MIN_LENGTH, emailRegEx } from "../consts";
import { validatePassword, validateEmail } from "../validators";

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
        const email = event.target.value;
        const isEmailValid = validateEmail(email, emailRegEx);
        setEmail({ email, isEmailValid });
    };

    const handlePasswordChange = event => {
        const password = event.target.value;
        const isPasswordValid = validatePassword(password, PASSWORD_MIN_LENGTH);       
        setPassword({ password, isPasswordValid });
    };

    const submitHandler = () => {
        const isEmailValid = validateEmail(email, emailRegEx);
        const isPasswordValid = validatePassword(password, PASSWORD_MIN_LENGTH);

        setEmail({ email, isEmailValid });
        setPassword({ password, isPasswordValid });

        if (isEmailValid && isPasswordValid) {
            console.log(email);
            console.log(password);
        } else {
            !isEmailValid && console.log("Incorrect email");
            !isPasswordValid && console.log("Incorrect password");
        }
    };

    const onKeyDownSubmitHandler = event => {
        event.keyCode === 13 && submitHandler();
    };

    return (
        <>
            <LoginForm
                onKeyDownSubmitHandler={onKeyDownSubmitHandler}
                email={email}
                password={password}
                handleEmailChange={handleEmailChange}
                handlePasswordChange={handlePasswordChange}
                submitHandler={submitHandler}
                passwordMinLength={PASSWORD_MIN_LENGTH}
                isEmailValid={isEmailValid}
                isPasswordValid={isPasswordValid}
            />
            <InputDisplay email={email} password={password} />
        </>
    );
};

export default FormContainer;