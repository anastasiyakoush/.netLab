import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { PASSWORD_MIN_LENGTH, emailRegEx, routes, root } from "../consts";
import { validatePassword, validateEmail } from "../validation/validators";
import * as actions from "../actions/actions";
import LoginForm from "../components/Form/index";
import InputDisplay from "../components/InputDisplay/index";

class LoginRedux extends Component {
    constructor(props) {
        super(props);
        this.state = { ...props };
    }

    static getDerivedStateFromProps(props, state) {
        return props;
    }

    onKeyDownSubmitHandler = event => {
        event.keyCode === 13 && this.submitHandler();
    };

    handleEmailChange = event => {
        const email = event.target.value;
        const isValid = validateEmail(email, emailRegEx);
        this.props.setEmail(email, isValid);
    };

    handlePasswordChange = event => {
        const password = event.target.value;
        const isValid = validatePassword(password, PASSWORD_MIN_LENGTH);
        this.props.setPassword(password, isValid);
    };

    submitHandler = () => {
        if (this.props.isAuthenticated) {
            this.props.setEmail("");
            this.props.setPassword("");
            this.props.logout();
            return;
        }

        const isEmailValid = (() => validateEmail(this.props.email, emailRegEx))();
        const isPasswordValid = (() => validatePassword(this.props.password, PASSWORD_MIN_LENGTH))();

        if (isEmailValid && isPasswordValid) {
            this.props.login(this.props.email, this.props.password);
            this.props.history.push({
                pathname: `${root()}${routes.loginReduxSuccess}`,
                state: {
                    from: { pathname: routes.loginRedux }
                }
            });
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
        email: state.login.email,
        password: state.login.password,
        isAuthenticated: state.login.isAuthenticated,
        isEmailValid: state.login.isEmailValid,
        isPasswordValid: state.login.isPasswordValid
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
