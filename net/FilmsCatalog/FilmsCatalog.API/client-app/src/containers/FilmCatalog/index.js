import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import FilmCard from "../../components/FilmCard";
import { getFilmsList } from "../../actions/actions";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

const FilmsCatalog = props => {
    const { films, loading, error, getFilms, classes } = props;
    useEffect(() => {
        getFilms();
    }, [getFilms]);
    return (
        <div className={classes.container}>
            {loading && <div>LOADING!!!!!</div>}
            {error && <div>{error}</div>}
            {!loading &&
                !error &&
                films &&
                films.map(x => (
                    <FilmCard title={x.name} year={x.year} src={x.poster} />
                ))}
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
        getFilms: () => {
            dispatch(getFilmsList());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatcToProps
)(withStyles(styles)(FilmsCatalog));
