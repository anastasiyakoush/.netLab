import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { Link } from 'react-router-dom'
import FormInput from "../../components/FormInput/index"
import styles from "./styles";
import { withStyles } from "@material-ui/styles";
import { signup } from "../../actions/actions";
import { root, routes } from "../../routing/routes"
import validate from "../../validation/formValidator"

let SignUpForm = props => {
    const { signUp, email, username, password, classes } = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        signUp({ "email": email, "username": username, "password": password });
    }

    return (
        <form className={classes.formContainer}>
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
            <button className={classes.button} type="submit" onClick={(e) => handleSubmit(e)}>Sign Up</button>
            <Link to={`${root()}${routes.login}`} className={classes.link}>Log in</Link>
        </form>
    );
};

SignUpForm = reduxForm({ form: 'signUp', validate })(withStyles(styles)(SignUpForm));

const selector = formValueSelector("signUp");

const mapStateToProps = state => {
    return {
        email: selector(state, "email"),
        username: selector(state, "userName"),
        password: selector(state, "password"),
        confirmPassword: selector(state, "confirmPassword"),
    }
};
const mapDispatchToProps = dispatch => {
    return {
        signUp: user => {
            dispatch(signup(user));
        }
    }
}

SignUpForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpForm);

export default SignUpForm;