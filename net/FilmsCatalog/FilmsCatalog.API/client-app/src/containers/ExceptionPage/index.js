import React from "react";
import { Typography, Container } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

const ExceptionPage = ({ classes }) => {
    return (
        <Container className={classes.container}>
            <Typography className={classes.status}>Oops..</Typography>
            <Typography className={classes.error}>Please try load page later</Typography>
        </Container>
    );
};
export default withStyles(styles)(ExceptionPage);