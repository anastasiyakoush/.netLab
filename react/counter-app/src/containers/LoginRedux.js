import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../redux/actions";
import LoginForm from "../components/Form/index";
import InputDisplay from "../components/InputDisplay/index";
import { PASSWORD_MIN_LENGTH, emailRegEx, routes, root } from "../consts";

const LoginRedux = props => {

    const onKeyPressHandler = event => {
        event.keyCode === 13 && Handler();
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
        if (props.isAuthenticated) {
            props.setEmail("");
            props.setPassword("");
            props.logout();
            return;
        }
        console.log(props.email)
        //console.log(props.loginReducer.isEmailValid)

        props.validateEmail(emailRegEx);
        props.validatePassword(PASSWORD_MIN_LENGTH);

        //console.log(props.loginReducer.isEmailValid)
        /* rops.isEmailValid = props.email === '';
         props.isPasswordValid = props.password == ''; */
        if (props.isEmailValid && props.isPasswordValid) {
            props.login(props.email, props.password);
        } props.history.push(`${root()}${routes.loginReduxSuccess}`);

    };

    return (
        <>
            <LoginForm
                onKeyPressHandler={onKeyPressHandler}
                email={props.email}
                password={props.password}
                handleEmailChange={handleEmailChange}
                handlePasswordChange={handlePasswordChange}
                Handler={Handler}
                passwordMinLength={PASSWORD_MIN_LENGTH}
                isEmailValid={props.isEmailValid}
                isPasswordValid={props.isPasswordValid}
                buttonText={props.isAuthenticated ? "Log out" : "Log in"}
            />
            <InputDisplay email={props.email} password={props.password} />
        </>
    );
};

const mapStateToProps = state => {
    console.log(state)
    return {
        email: state.loginReducer.email,
        password: state.loginReducer.password,
        isAuthenticated: state.loginReducer.isAuthenticated,
        isEmailValid: state.loginReducer.isEmailValid,
        isPasswordValid: state.loginReducer.isPasswordValid
    }
};

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
