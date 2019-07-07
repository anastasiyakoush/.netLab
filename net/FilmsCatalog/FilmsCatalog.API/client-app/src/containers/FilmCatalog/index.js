import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import FilmCard from "../../components/FilmCard";
import { getFilmsList, getFilmDetails } from "../../actions/thunks";
import { withStyles } from "@material-ui/styles";
import { root, routes } from "../../routing//routes";
import styles from "./styles";

const FilmsCatalog = props => {
    const { films, loading, getFilms, classes, history } = props;

    const goToDetails = filmId => {
        history.push({
            pathname: `${root()}${routes.film}/${filmId}`
        });
    };

    useEffect(() => {
        getFilms(history);
    },[]);

    return (
        <div className={classes.container}>
            {!loading &&
                films.length > 0 &&
                films.map(
                    (x, i) =>
                        films[i].poster && (
                            <FilmCard
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
        loading: state.loading,
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