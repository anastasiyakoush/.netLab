import React from "react";
import { connect } from "react-redux";
import { formValueSelector } from 'redux-form'
import { routes } from '../../consts'
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

let LoginSuccess = props => {
    const { classes, email, password } = props;
    const isFromForms = props.location.state.from.pathname === routes.loginReduxForm;

    return (
        <div className={classes.container}>
            <p>Entered data:</p>
            <p>Email</p>
            <p className={classes.text}>{isFromForms ? email : props.login.email}</p>
            <p>Password</p>
            <p className={classes.text}>{isFromForms ? password : props.login.password}</p>
        </div>
    );
};

const selector = formValueSelector("loginRedux");
LoginSuccess = connect(state => (
    { email: selector(state, 'email'), password: selector(state, 'password') }
))(LoginSuccess)

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps)(withStyles(styles)(LoginSuccess));