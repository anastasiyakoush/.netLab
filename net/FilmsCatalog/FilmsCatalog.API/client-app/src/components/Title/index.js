import React from "react";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

const Title = ({ classes }) => {
    return (<Typography variant="h4" className={classes.title}>Films Catalog</Typography>);
};
export default withStyles(styles)(Title);