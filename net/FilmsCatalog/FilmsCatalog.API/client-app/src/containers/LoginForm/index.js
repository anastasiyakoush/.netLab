import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { withRouter, Redirect } from "react-router-dom";
import { Button, Link, Container, Typography } from "@material-ui/core";
import { authenticate } from "../../actions/thunks";
import { root, routes } from "../../routing/routes";
import validate from "../../validation/formValidator";
import FormInput from "../../components/FormInput";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

let LoginForm = props => {
    const {
        login,
        email,
        password,
        classes,
        handleSubmit,
        history,
        errors,
        isAuthenticated
    } = props;

    const onSubmitHandler = () => login({ email, password }, history);

    return (
        <Container component="main" className={classes.container}>

            {isAuthenticated && <Redirect to={`${root()}${routes.homePage}`} />}

            <Typography component="h1" variant="h5">Login</Typography>
            <form
                noValidate={true}
                className={classes.form}
                onSubmit={handleSubmit(onSubmitHandler)}>
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
                    Login
                </Button>
                <Link
                    href={`${root()}${routes.signUp}`}
                    variant="body1"
                    className={classes.link}>
                    Don't have an account? Sign Up
                </Link>
            </form>
        </Container>
    );
};

LoginForm = reduxForm({ form: "login", validate, destroyOnUnmount: true })(
    withStyles(styles)(LoginForm)
);

const selector = formValueSelector("login");

const mapStateToProps = state => {
    return {
        email: selector(state, "email"),
        password: selector(state, "password"),
        errors: state.requestReducer.error,
        isAuthenticated: state.requestReducer.isAuthenticated
    };
};
const mapDispatchToProps = dispatch => {
    return {
        login: (data, history) => dispatch(authenticate(data, history))
    };
};
LoginForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);

export default withRouter(LoginForm);