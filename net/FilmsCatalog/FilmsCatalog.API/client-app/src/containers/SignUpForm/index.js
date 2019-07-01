import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";
import FormInput from "../../components/FormInput/index"
import styles from "./styles";
import { withStyles } from "@material-ui/styles";
import { signup } from "../../actions/actions";

let SignUpForm = props => {
    const { signUp, email, username, password, confirmPassword } = props;

    const handleSubmit = (e) => {
        signUp({ "email": email, "username": username, "password": password });
        e.preventDefault();
    }

    return (
        <form>
            <Field
                name="userName"
                type="text"
                label="UserName"
                variant="outlined"
                component={FormInput}
            />
            <Field
                name="email"
                type="email"
                label="Email"
                variant="outlined"
                component={FormInput}
            />
            <Field
                name="password"
                type="password"
                label="Password"
                variant="outlined"
                component={FormInput}
            />
            <Field
                name="confirmPassword"
                type="password"
                label="Confirm Password"
                variant="outlined"
                component={FormInput}
            />
            <button type="submit" onClick={(e) => handleSubmit(e)}>Sign Up</button>
        </form>
    );
};

SignUpForm = reduxForm({ form: 'signUp' })(withStyles(styles)(SignUpForm));

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