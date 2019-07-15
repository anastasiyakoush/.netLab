import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { root, routes } from "../../routing//routes";
import { getFilms, getFilmDetails } from "../../actions/thunks";
import { filmsBaseUrl } from "../../api/consts";
import FilmCard from "../../components/FilmCard";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

const FilmCatalog = props => {
    const { films, getFilms, loading, classes, history, nextLink } = props;
    const [isFetching, setIsFetching] = useState(false);

    const goToDetails = filmId => {
        history.push({ pathname: `${root()}${routes.film}/${filmId}` });
    };

    useEffect(() => {
        getFilms(history, false, filmsBaseUrl);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!isFetching) return;
        nextLink && getFilms(history, true, nextLink);
        setIsFetching(false);
    }, [isFetching]);

    function handleScroll() {
        if ((window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching)) return;
        setIsFetching(true);
    }

    return (
        <div className={classes.container}>
            {!loading && (films.length > 0
                ? (
                    films.map(
                        (x, i) =>
                            films[i].Poster && (
                                <FilmCard
                                    key={i}
                                    title={x.Name}
                                    year={x.Year}
                                    src={x.Poster}
                                    onClick={() => goToDetails(x.Id)}
                                />
                            )
                    ))
                : (
                    <Typography variant="h6" className={classes.noResults}>
                        No results found
                    </Typography>
                ))}
            {isFetching && nextLink && (
                <Typography variant="h6" className={classes.noResults}>
                    Loading
                </Typography>
            )}
            {films.length > 0 && !nextLink && (
                <Typography variant="h6" className={classes.noResults}>
                    No more results
                </Typography>
            )}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        films: state.filmsListReducer.films,
        loading: state.requestStateReducer.loading,
        nextLink: state.filmsListReducer.nextLink
    };
};
const mapDispatchToProps = dispatch => {
    return {
        getFilms: (history, isAppend, link) => dispatch(getFilms(history, isAppend, link)),
        getDetails: filmId => dispatch(getFilmDetails(filmId))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(withStyles(styles)(FilmCatalog)));