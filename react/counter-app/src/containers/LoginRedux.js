import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../redux/actions";
import LoginForm from "../components/Form/index";
import InputDisplay from "../components/InputDisplay/index";
import { PASSWORD_MIN_LENGTH, emailRegEx, routes, root } from "../consts";

const LoginRedux = props => {
    const [
        { email, password, isEmailValid, isPasswordValid, isAuthenticated },
        setChange
    ] = useState(props.loginReducer);

    const onKeyPressHandler = event => {
        event.key === "Enter" && Handler();
    };

    const handleEmailChange = event => {
        props.setEmail(event.target.value);
        props.validateEmail(emailRegEx);
    };

    const handlePasswordChange = event => {
        props.setPassword(event.target.value);
        props.validatePassword(PASSWORD_MIN_LENGTH);
    };

    const Handler = () => {
        if (isAuthenticated) {
            props.setEmail("");
            props.setPassword("");
            props.logout();
            return;
        }

        props.validateEmail(emailRegEx);
        props.validatePassword(PASSWORD_MIN_LENGTH);
        
        if (isEmailValid && isPasswordValid) {
            props.login(email, password);
            props.history.push(`${root()}${routes.loginReduxSuccess}`);
        }
    };
    useEffect(() => {
         if (!isAuthenticated) {
            props.validateEmail(emailRegEx);
            props.validatePassword(PASSWORD_MIN_LENGTH);
        }
    }, []);

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
                buttonText={isAuthenticated ? "Log out" : "Log in"}
            />
            <InputDisplay email={email} password={password} />
        </>
    );
};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => {
    return {
        setEmail: value => dispatch(actions.setEmail(value)),
        setPassword: value => dispatch(actions.setPassword(value)),
        validateEmail: constraint =>
            dispatch(actions.validateEmail(constraint)),
        validatePassword: constraint =>
            dispatch(actions.validatePassword(constraint)),
        login: (email, password) => dispatch(actions.login(email, password)),
        logout: () => dispatch(actions.logout())
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(LoginRedux)
);
