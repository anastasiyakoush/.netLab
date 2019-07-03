import React from "react";
import { connect } from "react-redux";
import { getFilmDetails } from "../../actions/actions";

const FilmDetails = props => {
    return (
        <div>
            <p>{props.match.params.id}</p>
            
        </div>
    );
};

const mapStateToProps = state => {
    return { ...state };
    /*  id: state.id,
        name: state.id,
        year: state.id,
        director: state.id,
        overview: state.id,
        rating: state.id,
        images: state.id,
        comments: state.id */
};

const mapDispatchToProps = dispatch => {
    return {
        loadFilmInfo: filmId => dispatch(getFilmDetails(filmId))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilmDetails);
