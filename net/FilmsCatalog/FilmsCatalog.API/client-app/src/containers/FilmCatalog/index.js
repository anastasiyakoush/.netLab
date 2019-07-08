import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { root, routes } from "../../routing//routes";
import { getFilmsList, getFilmDetails } from "../../actions/thunks";
import FilmCard from "../../components/FilmCard";
import Spinner from "../../components/Spinner";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

const FilmsCatalog = props => {
    const { films, loading, getFilms, classes, history } = props;

    const goToDetails = filmId => {
        history.push({ pathname: `${root()}${routes.film}/${filmId}` });
    };

    useEffect(() => getFilms(history), []);

    return (
        <div className={classes.container}>
            {loading && <Spinner />}
            {!loading && films.length < 1 && <Typography variant="h6" className={classes.noResults}>No results found</Typography>}
            {!loading && films.length > 0 &&
                films.map(
                    (x, i) =>
                        films[i].poster && (
                            <FilmCard
                                key={i}
                                title={x.name}
                                year={x.year}
                                src={x.poster}
                                onClick={() => goToDetails(x.id)}
                            />
                        )
                )}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        films: state.filmsCrud.films,
        loading: state.requestReducer.loading,
        failure: state.error
    };
};
const mapDispatcToProps = dispatch => {
    return {
        getFilms: history => {
            dispatch(getFilmsList(history));
        },
        getDetails: filmId => {
            dispatch(getFilmDetails(filmId));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatcToProps
)(withRouter(withStyles(styles)(FilmsCatalog)));