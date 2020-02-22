import React, { useState, useEffect } from "react";
import Rater from "react-rater";
import { connect } from "react-redux";
import { Typography, Button, withStyles } from "@material-ui/core";
import { rateFilm, loadRating } from "../../actions/thunks";
import { authHelper } from "../../helpers/authHepler";
import "react-rater/lib/react-rater.css";
import styles from "./styles";

const Rating = ({ rating, filmId, postRating, classes, people }) => {
    const [rate, setRate] = useState(rating);
    const [isRated, setIsRated] = useState(false);

    const onRateHandler = rating => {
        setRate(rating);
        setIsRated(true);
    };
    const rateFilm = () => {
        const userName = authHelper.getUserName();
        const body = {
            userName,
            filmId,
            rate
        };
        postRating(body);
        setIsRated(false);
    };

    useEffect(() => {
        setRate(rating)
    }, [rating])

    return (
        <div className={classes.container}>
            <Rater
                total={5}
                rating={rate}
                onRate={({ rating }) => onRateHandler(rating)}
            />
            <Typography variant="subtitle1" className={classes.voted}>{`Voted : ${people} people`}</Typography>
            {isRated && (
                <div>
                    <Typography variant="body1">{`You rate ${rate} stars. Would you like to vote? `}</Typography>
                    <Button
                        className={classes.button}
                        onClick={() => rateFilm()}>
                        Vote
                    </Button>
                </div>
            )}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        rating: state.filmReducer.rating,
        people: state.filmReducer.votedPeopleCount,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        postRating: body => dispatch(rateFilm(body)),
        updateRating: filmId => dispatch(loadRating(filmId))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Rating));