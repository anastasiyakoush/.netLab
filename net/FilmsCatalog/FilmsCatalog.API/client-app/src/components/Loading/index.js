import React from 'react'
import { Typography, withStyles, CircularProgress } from '@material-ui/core';
import styles from "./styles"

const Loading = props => {
    const { classes } = props;

    return (
        <div className={classes.container}>
            <CircularProgress value={100} size={24}></CircularProgress>
        </div>

    );
}
export default withStyles(styles)(Loading);