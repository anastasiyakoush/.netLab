import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../redux/actions";
import LoginForm from "../components/Form/index";
import InputDisplay from "../components/InputDisplay/index";
import { PASSWORD_MIN_LENGTH, emailRegEx, routes, root } from "../consts";

class LoginRedux extends Component {
    constructor(props) {
        super(props);
        this.state = { ...props };
        this.state.ok = false;
    }

    static getDerivedStateFromProps(props, state) {
        return props;
    }

    validateEmail = email => email !== '' && emailRegEx.test(email);

    validatePassword = password => password !== '' && password.length >= PASSWORD_MIN_LENGTH;

    onKeyDownSubmitHandler = event => {
        event.keyCode === 13 && this.submitHandler();
    };

    handleEmailChange = event => {
        const email = event.target.value;
        const isValid = this.validateEmail(email);
        this.props.setEmail(email, isValid);
    };

    handlePasswordChange = event => {
        const password = event.target.value;
        const isValid = this.validatePassword(password);
        this.props.setPassword(password, isValid);
    };

    submitHandler = () => {
        if (this.props.isAuthenticated) {
            this.props.setEmail("");
            this.props.setPassword("");
            this.props.logout();
            return;
        }

        const isEmailValid = (() => this.validateEmail(this.props.email))();
        const isPasswordValid = (() => this.validatePassword(this.props.password))();

        if (isEmailValid && isPasswordValid) {
            this.props.login(this.props.email, this.props.password);
            this.props.history.push(`${root()}${routes.loginReduxSuccess}`);
        }

        this.props.setEmail(this.state.email, isEmailValid);
        this.props.setPassword(this.state.password, isPasswordValid);

    };

    render() {
        return (
            <div>
                <LoginForm
                    onKeyDownSubmitHandler={this.onKeyDownSubmitHandler}
                    email={this.props.email}
                    password={this.props.password}
                    handleEmailChange={this.handleEmailChange}
                    handlePasswordChange={this.handlePasswordChange}
                    submitHandler={this.submitHandler}
                    passwordMinLength={PASSWORD_MIN_LENGTH}
                    isEmailValid={this.props.isEmailValid}
                    isPasswordValid={this.props.isPasswordValid}
                    buttonText={this.props.isAuthenticated ? "Log out" : "Log in"}
                />
                <InputDisplay email={this.props.email} password={this.props.password} />
            </div >
        );
    }
};

const mapStateToProps = state => {
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
        setEmail: (value, isValid) => dispatch(actions.setEmail(value, isValid)),
        setPassword: (value, isValid) => dispatch(actions.setPassword(value, isValid)),
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
