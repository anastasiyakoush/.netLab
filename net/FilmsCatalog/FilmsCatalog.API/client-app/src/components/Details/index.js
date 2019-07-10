import React from 'react'
import { Typography, withStyles } from '@material-ui/core';
import Rating from '../Rating';
import styles from "./styles"

const Details = props => {
    const { name, year, overview, director, id } = props.info;
    const { classes } = props;

    return (
        <div className={classes.container}>
            <Typography variant="h2">{name}</Typography>
            <Typography variant="subtitle2" className={classes.year}>{year}</Typography>
            <Rating filmId={id}></Rating>
            <Typography variant="subtitle1" className={classes.director}>Director</Typography>
            <Typography variant="h6" className={classes.text}>{director}</Typography>
            <Typography variant="subtitle1" className={classes.content}>{overview}</Typography>
        </div>

    );
}
export default withStyles(styles)(Details);