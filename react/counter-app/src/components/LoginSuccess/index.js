import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

const LoginSuccess = props => {
    const { classes, email, password } = props;

    return (
        <div className={classes.container}>
            {() => console.log(props)}
            <p>Entered data:</p>
            <p>Email</p>
            <p className={classes.text}>{email}</p>
            <p>Password</p>
            <p className={classes.text}>{password}</p>
        </div>
    );
};

const mapStateToProps = state => ({
    email: state.loginReducer.email,
    password: state.loginReducer.password
});

export default connect(mapStateToProps)(withStyles(styles)(LoginSuccess));