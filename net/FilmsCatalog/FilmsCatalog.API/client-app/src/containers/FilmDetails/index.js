import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withStyles, Typography } from "@material-ui/core";
import { getFilmDetails} from "../../actions/thunks";
import ImagesContainer from "../../components/ImagesContainer/index";
import CommentsContainer from "../../components/CommentsContainer/index";
import CommentForm from "../../components/CommentForm/index";
import ProgressBar from "../../components/ProgressBar";
import FilmInfo from "../../components/FilmInfo/index";
import styles from "./styles";

const FilmDetails = props => {
    const filmId = props.match.params.id;
    const {
        loadFilmInfo,
        film,
        classes,
        history,
        loading
    } = props;

    useEffect(() => {
        loadFilmInfo(filmId, history);
    }, [filmId]);

    return (
        <div className={classes.container}>
            {loading && <ProgressBar />}
            {
                film.images.length > 0 && film.poster && filmId == film.id &&
                <>
                    <FilmInfo info={film} />
                    <Typography variant="h4" className={classes.title}>Images</Typography>
                    <ImagesContainer />
                    <Typography variant="h4" className={classes.title}>Comments</Typography>
                    <CommentForm filmId={film.id} />
                    <CommentsContainer comments={film.comments} />
                </>
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        film: { ...state.filmReducer },
        loading: state.requestStateReducer.loading
    };
};
const mapDispatchToProps = dispatch => {
    return {
        loadFilmInfo: (filmId, history) => dispatch(getFilmDetails(filmId, history))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(withStyles(styles)(FilmDetails)));