import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

const Title = ({ classes }) => {
    return (
        <Typography variant="h4" className={classes.title}>
            Films Catalog
        </Typography>
    );
};

export default withStyles(styles)(Title);