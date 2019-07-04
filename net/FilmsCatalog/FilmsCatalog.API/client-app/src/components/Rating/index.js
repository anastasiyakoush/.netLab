import React, { useState, useEffect } from 'react'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import { rateFilm, loadRating } from "../../actions/actions"
import { connect } from 'react-redux';
import { Typography, Button, withStyles } from '@material-ui/core';
import { getUserName } from '../../helpers';
import styles from "./styles"

const Rating = ({ rating, filmId, postRating, classes, updateRating }) => {
    const [rate, setRate] = useState(0);
    const [isRated, setIsRated] = useState(false);

    const onRateHandler = rating => {
        setRate(rating);
        setIsRated(true)
    }
    const rateFilm = () => {
        const userName = getUserName();
        const body = {
            userName, filmId, rate
        }
        postRating(body);
        setRate(0);
        setIsRated(false);
        updateRating(filmId)
    }

    return (
        (
            <div className={classes.container}>
                <Rater total={5} rating={rating} onRate={({ rating }) => onRateHandler(rating)} />
                {
                    isRated && <div>
                        <Typography variant="body1">{`You rate ${rate} stars. Would you like to vote? `}</Typography>
                        <Button className={classes.button} onClick={() => rateFilm()}>Vote</Button>
                    </div>
                }
            </div>)
    )
}

const mapDispatchToProps = dispatch => {
    return {
        postRating: body => dispatch(rateFilm(body)),
        updateRating: filmId => dispatch(loadRating(filmId))
    }
}
export default connect(null, mapDispatchToProps)(withStyles(styles)(Rating));