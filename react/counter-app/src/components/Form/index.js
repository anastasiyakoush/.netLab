import React, { useState } from "react";
import { Container, Button, TextField, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import { tip } from "../../consts";

const LoginForm = props => {
    const { classes } = props;
/*     const isValid = props.isValid;
    const handleEmailChange = props.handleEmailChange;
    const handlePasswordChange = props.handlePasswordChange;
    const submitHadler = props.submitHadler; */
    const tipField = (field, constraint) => {
        return <Typography classes={classes.invalid}>{tip(field, constraint)}</Typography>;
    };

    return (
        <Container className={classes.container}>
            {props.isValid || tipField("Email", props.emailMinLength)}
            <TextField
                label="Email"
                type="email"
                /* autoComplete="true" */
                minlength='5'
                name="email"
                onChange={props.handleEmailChange}
                variant="outlined"
                className={classes.input}
                required
            />            
            <TextField
                label="Password"
                type="password"
                autoComplete="true"
                name="password"
                onChange={props.handlePasswordChange}
                variant="outlined"
                className={classes.input}
                required
            />
            <Button className={classes.button} onClick={props.submitHadler}>
                Log in
            </Button>
        </Container>
    );
};

export default withStyles(styles)(LoginForm);
