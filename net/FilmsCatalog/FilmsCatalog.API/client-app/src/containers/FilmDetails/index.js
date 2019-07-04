import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getFilmDetails } from "../../actions/actions";
import NavBar from "../NavBar";
import FilmInfo from "../../components/FilmInfo/index";
import ImagesContainer from "../../components/ImagesContainer/index";
import CommentsContainer from "../../components/CommentsContainer/index";

const FilmDetails = props => {
    const { match, loadFilmInfo, film } = props;
    const filmId = match.params.id;

    useEffect(() => {
        loadFilmInfo(filmId)
    }, [])

    return (
        <div>
            <FilmInfo info={film} />
            <ImagesContainer images={film.images} />
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
        loadFilmInfo: filmId => dispatch(getFilmDetails(filmId))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(FilmDetails));
