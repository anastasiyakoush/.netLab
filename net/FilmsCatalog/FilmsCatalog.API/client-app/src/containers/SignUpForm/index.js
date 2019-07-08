import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { withRouter } from "react-router-dom";
import { Typography, Button, Container, Link } from "@material-ui/core";
import { signup } from "../../actions/thunks";
import { root, routes } from "../../routing/routes";
import validate from "../../validation/formValidator";
import FormInput from "../../components/FormInput/index";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

let SignUpForm = props => {
    const {
        signUp,
        email,
        username,
        password,
        classes,
        history,
        errors,
        handleSubmit,
    } = props;

    const onSubmitHandler = e => {
        const user = { email: email, username: username, password: password };
        signUp(user, history);
    };

    return (
        <Container component="main" className={classes.container}>
            <Typography variant="h5" className={classes.title}>Sign Up</Typography>
            <form
                noValidate={true}
                className={classes.form}
                onSubmit={handleSubmit(onSubmitHandler)}>
                <Field
                    name="userName"
                    type="text"
                    label="Username"
                    component={FormInput}
                />
                <Field
                    name="email"
                    type="email"
                    label="Email"
                    component={FormInput}
                />
                <Field
                    name="password"
                    type="password"
                    label="Password"
                    component={FormInput}
                />
                <Field
                    name="confirmPassword"
                    type="password"
                    label="Confirm password"
                    component={FormInput}
                />
                {errors && (
                    <Typography variant="subtitle1" className={classes.error}>
                        {errors}
                    </Typography>
                )}
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className={classes.button}
                    onSubmit={e => handleSubmit(e)}>
                    Sign Up
                </Button>
                <Link
                    href={`${root()}${routes.login}`}
                    variant="body1"
                    className={classes.link}>
                    Already have an account? Login
                </Link>
            </form>
        </Container>
    );
};

SignUpForm = reduxForm({ form: "signUp", validate, destroyOnUnmount: true })(
    withStyles(styles)(SignUpForm)
);

const selector = formValueSelector("signUp");

const mapStateToProps = state => {
    return {
        email: selector(state, "email"),
        username: selector(state, "userName"),
        password: selector(state, "password"),
        confirmPassword: selector(state, "confirmPassword"),
        errors: state.requestReducer.error
    };
};
const mapDispatchToProps = dispatch => {
    return {
        signUp: (user, history) => dispatch(signup(user, history))
    };
};

SignUpForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpForm);

export default withRouter(SignUpForm);