import React from 'react';
import {  CircularProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import styles from "./styles"

const Loading = ({ classes }) => {
    return (
        <div className={classes.root} >
            <CircularProgress color="secondary" />
        </div>
    );
}
export default withStyles(styles)(Loading)