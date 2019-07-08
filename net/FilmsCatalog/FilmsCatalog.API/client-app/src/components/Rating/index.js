import React, { useState } from "react";
import Rater from "react-rater";
import { connect } from "react-redux";
import { Typography, Button, withStyles } from "@material-ui/core";
import { rateFilm, loadRating } from "../../actions/thunks";
import { getUserName } from "../../helpers";
import "react-rater/lib/react-rater.css";
import styles from "./styles";

const Rating = ({ rating, filmId, postRating, classes }) => {
    const [rate, setRate] = useState(rating || 0);
    const [isRated, setIsRated] = useState(false);

    const onRateHandler = rating => {
        setRate(rating);
        setIsRated(true);
    };
    const rateFilm = () => {
        const userName = getUserName();
        const body = {
            userName,
            filmId,
            rate
        };
        postRating(body);
        setRate(0);
        setIsRated(false);
    };

    return (
        <div className={classes.container}>
            <Rater
                total={5}
                rating={rating}
                onRate={({ rating }) => onRateHandler(rating)}
            />
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
        rating: state.filmReducer.rating
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