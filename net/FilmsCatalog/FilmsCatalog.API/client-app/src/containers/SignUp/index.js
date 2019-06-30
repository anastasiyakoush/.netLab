import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styles from "./styles";
import { TextField } from "@material-ui/core";

const SignUp = props => {
    const { email, setEmail } = useState(props.email);
    const { userName, setUserName } = useState(props.userName);
    const { password, setPassword } = useState(props.password);
    const { confirmPassword, setConfirmPassword } = useState(
        props.confirmPassword
    );



    return (
        <form>
            <TextField
                name="userName"
                type="text"
                label="UserName"
                value={userName}
                variant="outlined"
                onInput={props.onUserNameChanged}
            />
            <TextField
                name="email"
                type="email"
                label="Email"
                value={email}
                variant="outlined"
                onInput={props.onEmailChanged}
            />
            <TextField
                name="password"
                type="password"
                label="Password"
                value={password}
                variant="outlined"
                onInput={props.onPasswordChanged}
            />
            <TextField
                name="confirmPassword"
                type="password"
                label="Confirm Password"
                value={confirmPassword}
                variant="outlined"
                onInput={props.onConfirmPasswordChanged}
            />
        </form>
    );
};

const mapStateToProps = state => {};

const mapDispatchToProps = state => {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);
