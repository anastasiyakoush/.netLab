import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getFilmDetails, loadComments, loadRating } from "../../actions/actions";
import FilmInfo from "../../components/FilmInfo/index";
import ImagesContainer from "../../components/ImagesContainer/index";
import CommentsContainer from "../../components/CommentsContainer/index";
import CommentForm from "../../components/CommentForm/index";
import styles from "./styles";
import { withStyles, Typography } from "@material-ui/core";

const FilmDetails = props => {
    const { match, loadFilmInfo, film, classes, loadComments, updateRating } = props;
    const filmId = match.params.id;

    useEffect(() => {
        loadFilmInfo(filmId)
    }, [])

/*     useEffect(() => {
        loadComments(filmId)
    }, [film.comments]) */

    useEffect(() => {
        updateRating(filmId)
    }, [film.rating])

    return (
        <div className={classes.container}>
            <FilmInfo info={film} />
            <Typography variant="h4" className={classes.title}>Images</Typography>
            <ImagesContainer images={film.images} />
            <Typography variant="h4" className={classes.title}>Comments</Typography>
            <CommentForm filmId={film.id} />
            <CommentsContainer comments={film.comments} />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        ...state,
        film: { ...state.filmReducer }
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadFilmInfo: filmId => dispatch(getFilmDetails(filmId)),
        loadComments: filmid => dispatch(loadComments(filmid)),
        updateRating: filmId => dispatch(loadRating(filmId))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(withStyles(styles)(FilmDetails)));
