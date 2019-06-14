import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

const LoginForm = props => {
    const { classes } = props;
    const tipField = text => {
        return <p className={classes.invalid}>{text}</p>;
    };

    return (
        <div className={classes.container}>     
            {!props.isEmailValid && tipField(`Please use correct email`)}
            <label>Email</label>
            <input
                type="email"
                value={props.email}
                name="email"
                autoComplete="false"
                onInput={props.handleEmailChange}
                onKeyDown={props.onKeyDownSubmitHandler}
                className={classes.input}
                required
            />
            {!props.isPasswordValid &&
                tipField(
                    `Password must be at least ${props.passwordMinLength}`
                )}
            <label>Password</label>
            <input
                type="password"
                value={props.password}
                name="password"
                onInput={props.handlePasswordChange}
                onKeyDown={props.onKeyDownSubmitHandler}
                className={classes.input}
                required
            />
            <button
                type="submit"
                className={classes.button}
                onClick={props.submitHandler}>
                {props.buttonText || "Log in"}
            </button>
        </div>
    );
};

export default withStyles(styles)(LoginForm);