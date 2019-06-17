import React, { useState } from "react";
import LoginForm from "../components/Form/index";
import InputDisplay from "../components/InputDisplay/index";
import { PASSWORD_MIN_LENGTH, emailRegEx } from "../consts";
import { validatePassword, validateEmail } from "../validation/validators";

const FormContainer = () => {
    const [email, setEmail] = useState("");
    const [isEmailValid, setEmailValid] = useState(true);

    const [password, setPassword] = useState("");
    const [isPasswordValid, setPasswordValid] = useState(true);

    const handleEmailChange = event => {
        const email = event.target.value;

        const isValid = validateEmail(email, emailRegEx);
        setEmail(email);
        setEmailValid(isValid);
    };

    const handlePasswordChange = event => {
        const password = event.target.value;
        const isValid = validatePassword(password, PASSWORD_MIN_LENGTH);
        setPassword(password);
        setPasswordValid(isValid);
    };

    const submitHandler = () => {
        const isEmailValid = validateEmail(email, emailRegEx);
        const isPasswordValid = validatePassword(password, PASSWORD_MIN_LENGTH);

        setEmail(email);
        setPassword(password);
        setEmailValid(isEmailValid);
        setPasswordValid(isPasswordValid);

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