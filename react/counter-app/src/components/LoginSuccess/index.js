import React from "react";
import { connect } from "react-redux";
import { formValueSelector } from 'redux-form'
import { routes } from '../../consts'
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

let LoginSuccess = props => {
    const { classes, email, password, emailForm, passwordForm } = props;
    const isReduxForm = props.location.state.from.pathname === routes.loginReduxForm;

    return (
        <div className={classes.container}>
            <p>Entered data:</p>
            <p>Email</p>
            <p className={classes.text}>{isReduxForm ? emailForm : email}</p>
            <p>Password</p>
            <p className={classes.text}>{isReduxForm ? passwordForm : password}</p>
        </div>
    );
};

const selector = formValueSelector("loginRedux");
const mapStateToForm = state => ({
    emailForm: selector(state, 'email'),
    passwordForm: selector(state, 'password')
});

LoginSuccess = connect(mapStateToForm)(LoginSuccess)

const mapStateToProps = state => ({
    email: state.login.email,
    password: state.login.password
});

export default connect(mapStateToProps)(withStyles(styles)(LoginSuccess));