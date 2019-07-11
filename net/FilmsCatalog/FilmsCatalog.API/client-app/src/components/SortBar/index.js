import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Typography, Fab } from "@material-ui/core";
import { ArrowDownward, ArrowUpward, Clear, Sort } from "@material-ui/icons";
import { sortParams } from "../../consts";
import { setFilmsList } from "../../actions/actions/filmsList";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

const SortBar = ({ films, classes, updateFilmsList }) => {
    const [showSortBar, setShowSortBar] = useState(false);
    const [sortedList, setSortedList] = useState(films);
    const [sortByName, setSortByName] = useState({ parameter: sortParams.name, sort: false, asc: true });
    const [sortByYear, setSortByYear] = useState({ parameter: sortParams.name, sort: false, asc: true });
    const [sortByRating, setSortByRating] = useState({ parameter: sortParams.name, sort: false, asc: true });

    const sort = (param, asc = true) => {

        if (param === sortParams.name) {
            setSortByName({ ...sortByName, sort: true, asc: asc })
            const sorted = [...films].sort((a, b) => lexicalSort(a.name, b.name));
            setSortedList(asc ? sorted : sorted.reverse());
        }
        if (param === sortParams.year) {
            setSortByYear({ ...sortByYear, sort: true, asc: asc })
            const sorted = [...films].sort((a, b) => numericSort(a.year, b.year));
            setSortedList(asc ? sorted : sorted.reverse());
        }
        if (param === sortParams.rating) {
            setSortByRating({ ...sortByRating, sort: true, asc: asc })
            const sorted = [...films].sort((a, b) => numericSort(a.rating.rate, b.rating.rate));
            setSortedList(asc ? sorted : sorted.reverse());
        }
    }

    const lexicalSort = (a, b) => a.toLowerCase().localeCompare(b.toLowerCase());

    const numericSort = (a, b) => a - b;

    useEffect(() => {
        updateFilmsList(sortedList)
    }, [sortedList])

    return (
        <>
            {showSortBar
                ? <div className={classes.container}>
                    <Typography className={classes.item} onClick={() => sort(sortParams.name, !sortByName.asc)}>Name
                    {
                            (sortByName.sort)
                            && (sortByName.asc
                                ? <ArrowUpward onClick={() => sort(sortParams.name, !sortByName.asc)} />
                                : <ArrowDownward onClick={() => sort(sortParams.name, !sortByName.asc)} />)
                        }
                    </Typography>
                    <Typography className={classes.item} onClick={() => sort(sortParams.year, !sortByYear.asc)}>Year
                    {
                            (sortByYear.sort)
                            && (sortByYear.asc
                                ? <ArrowUpward onClick={() => sort(sortParams.year, !sortByYear.asc)} />
                                : <ArrowDownward onClick={() => sort(sortParams.year, !sortByYear.asc)} />)
                        }
                    </Typography>
                    <Typography className={classes.item} onClick={() => sort(sortParams.rating, !sortByRating.asc)}>Rating
                    {(sortByRating.sort)
                            && (sortByRating.asc
                                ? <ArrowUpward onClick={() => sort(sortParams.rating, !sortByRating.asc)} />
                                : <ArrowDownward onClick={() => sort(sortParams.rating, !sortByRating.asc)} />)
                        }
                    </Typography>
                    <Clear onClick={() => setShowSortBar(false)} />
                </div>
                : <Fab className={classes.button} variant="extended" onClick={() => setShowSortBar(true)} >
                    Sort <Sort />
                </Fab>}
        </>
    );
};

const mapStateToProps = state => {
    return {
        films: state.filmsListReducer.films
    }
}
const mapDispatchToProps = dispatch => {
    return {
        updateFilmsList: sortedFilms => dispatch(setFilmsList(sortedFilms))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SortBar));