import React from "react";
import { Typography, Container } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

const NotFound = ({ classes }) => {
    return (
        <Container className={classes.container}>
            <Typography className={classes.status}>404</Typography>
            <Typography className={classes.error}>Page not found</Typography>
        </Container>
    );
};
export default withStyles(styles)(NotFound);