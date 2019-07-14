import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { root, routes } from "../../routing//routes";
import { getFilms, getFilmDetails } from "../../actions/thunks";
import FilmCard from "../../components/FilmCard";
import ProgressBar from "../../components/ProgressBar";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

const FilmCatalog = props => {
    const { films, loading, getFilms, classes, history } = props;
    const [isFetching, setIsFetching] = useState(false);

    const goToDetails = filmId => {
        history.push({ pathname: `${root()}${routes.film}/${filmId}` });
    };

    useEffect(() => {
        getFilms(history, 0, false);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
      useEffect(() => {
        if (!isFetching) return;
        getFilms(history, films.length, true);
        setIsFetching(false)
      }, [isFetching]);
    
      function handleScroll() {
          console.log(window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight)
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching) return;
        setIsFetching(true);
      }

    return (
        <div className={classes.container}>
            {loading && <ProgressBar />}
            {!loading &&
                (films.length > 0 ? (
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
                    )
                ) : (
                    <Typography variant="h6" className={classes.noResults}>
                        No results found
                    </Typography>
                ))}
            {isFetching && (
                <Typography variant="h6" className={classes.noResults}>
                    Loading
                </Typography>
            )}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        films: state.filmsListReducer.films,
        loading: state.requestStateReducer.loading
    };
};
const mapDispatcToProps = dispatch => {
    return {
        getFilms: (history, skip, isAppend) => dispatch(getFilms(history, skip, isAppend)),
        getDetails: filmId => dispatch(getFilmDetails(filmId))
    };
};

export default connect(
    mapStateToProps,
    mapDispatcToProps
)(withRouter(withStyles(styles)(FilmCatalog)));
