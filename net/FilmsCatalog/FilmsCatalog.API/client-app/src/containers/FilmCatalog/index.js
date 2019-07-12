import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { root, routes } from "../../routing//routes";
import { getqueryableList, getFilmDetails } from "../../actions/thunks";
import FilmCard from "../../components/FilmCard";
import ProgressBar from "../../components/ProgressBar";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

const queryableCatalog = props => {
    const { queryable, loading, getqueryable, classes, history } = props;
    const [isFetching, setIsFetching] = useState(false);

    const goToDetails = filmId => {
        history.push({ pathname: `${root()}${routes.film}/${filmId}` });
    };

    useEffect(() => getqueryable(history, {}, false), []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!isFetching) return;
        getqueryable(history, { start: queryable.length }, true);
        setIsFetching(false)
    }, [isFetching]);

    function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching) return;
        setIsFetching(true);
    }


    return (
        <div className={classes.container}>
            {loading && <ProgressBar />}
            {!loading && (queryable.length > 0 ?
                queryable.map(
                    (x, i) =>
                        queryable[i].poster && (
                            <FilmCard
                                key={i}
                                title={x.name}
                                year={x.year}
                                src={x.poster}
                                onClick={() => goToDetails(x.id)}
                            />
                        )
                ) : <Typography variant="h6" className={classes.noResults}>No results found</Typography>)}
            {isFetching && <Typography variant="h6" className={classes.noResults}>Loading</Typography>}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        queryable: state.queryableListReducer.queryable,
        loading: state.requestStateReducer.loading,
        failure: state.error
    };
};
const mapDispatcToProps = dispatch => {
    return {
        getqueryable: (history, body, isAppend) => dispatch(getqueryableList(history, body, isAppend)),
        getDetails: filmId => dispatch(getFilmDetails(filmId))
    };
};

export default connect(
    mapStateToProps,
    mapDispatcToProps
)(withRouter(withStyles(styles)(queryableCatalog)));
