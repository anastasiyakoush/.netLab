import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import styles from "./styles"

const ProgressBar = ({ classes }) => {
    return (
        <div className={classes.root}>
            <Typography variant='h4' className={classes.text}>Loading</Typography>
            <LinearProgress color="secondary" />
        </div>
    );
}
export default withStyles(styles)(ProgressBar)