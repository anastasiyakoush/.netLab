import React, { useState, Fragment } from "react";
import LoginForm from "../../components/Form/index";
import { Box, Typography, Divider } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import { EMAIL_MIN_LENGTH, PASSWORD_MIN_LENGTH } from "../../consts";

const FormContainer = props => {
    const { classes } = props;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isValid, setIsValid] = useState(true);

    const handleEmailChange = event => {
        const [email] = event.target.value;
        setEmail(email);
        setIsValid(email.length>EMAIL_MIN_LENGTH);
        console.log(email.length)
    };
    const handlePasswordChange = event => {
        setPassword(event.target.value);
    };
    const submitHadler = () => {
        console.log(email);
        console.log(password);
    };
    return (
        <>
            <LoginForm
                handleEmailChange={handleEmailChange}
                handlePasswordChange={handlePasswordChange}
                submitHadler={submitHadler}
                emailMinLength={EMAIL_MIN_LENGTH}
                passwordMinLength={PASSWORD_MIN_LENGTH}
            />
            <Box className={classes.labelWrapper}>
                <Typography className={classes.label}>Email:</Typography>
                <Typography className={classes.data}>{email}</Typography>
                <Typography className={classes.label}>Password:</Typography>
                <Typography className={classes.data}>{password}</Typography>
            </Box>
        </>
    );
};
export default withStyles(styles)(FormContainer);
