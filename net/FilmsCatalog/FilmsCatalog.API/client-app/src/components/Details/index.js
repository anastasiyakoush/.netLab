import React from 'react'
import { Typography, withStyles } from '@material-ui/core';
import Rating from '../Rating';
import styles from "./styles"

const Details = props => {
    const { Name, Year, Overview, Director, Id } = props.info;
    const { classes } = props;

    return (
        <div className={classes.container}>
            <Typography variant="h2">{Name}</Typography>
            <Typography variant="subtitle2" className={classes.year}>{Year}</Typography>
            <Rating filmId={Id}></Rating>
            <Typography variant="subtitle1" className={classes.director}>Director</Typography>
            <Typography variant="h6" className={classes.text}>{Director}</Typography>
            <Typography variant="subtitle1" className={classes.content}>{Overview}</Typography>
        </div>

    );
}
export default withStyles(styles)(Details);