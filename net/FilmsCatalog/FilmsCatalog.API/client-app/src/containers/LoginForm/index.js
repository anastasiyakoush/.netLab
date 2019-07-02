import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from "redux-form";
import { Link } from 'react-router-dom'
import FormInput from '../../components/FormInput';
import { withStyles } from '@material-ui/styles';
import styles from "./styles"
import { login } from "../../actions/actions"
import { root, routes } from "../../routing/routes"
import validate from "../../validation/formValidator"

let LoginForm = props => {
    const { login, email, password, classes, handleSubmit } = props;

    const onSubmitHandler = (e) => {
        login({ email, password });
    }
    return (
        <form noValidate={true} className={classes.formContainer} onSubmit={handleSubmit(onSubmitHandler)}>
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
            <button type="submit" className={classes.button}>Log In</button>
            <Link to={`${root()}${routes.signUp}`} className={classes.link}>Sign Up</Link>
        </form>)
}

LoginForm = reduxForm({ form: "login", validate })(withStyles(styles)(LoginForm));

const selector = formValueSelector("login");

const mapStateToProps = state => {
    return {
        email: selector(state, "email"),
        password: selector(state, "password")
    }
}
const mapDispatchToProps = dispatch => {
    return {
        login: (data) => {
            dispatch(login(data))
        }
    }
}

LoginForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm)

export default LoginForm