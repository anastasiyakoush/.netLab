import React from "react";
import { aboutCounters } from "../../consts";
import { Container, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

const About = props => {
    const { classes: classNames } = props;
    return (
        <Container>
            <Paper className={classNames.container}>{aboutCounters}</Paper>
        </Container>
    );
};

export default withStyles(styles)(About);