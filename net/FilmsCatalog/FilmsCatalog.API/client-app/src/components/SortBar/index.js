import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { sortFilms } from "../../actions/thunks";
import { Typography, Fab } from "@material-ui/core";
import { ArrowDownward, ArrowUpward, Clear, Sort } from "@material-ui/icons";
import { sortParams } from "../../consts";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

const SortBar = ({ films, classes, history, sortFilms }) => {
    const [showSortBar, setShowSortBar] = useState(false);
    const [sortByName, setSortByName] = useState({ sort: false, asc: true });
    const [sortByYear, setSortByYear] = useState({ sort: false, asc: true });
    const [sortByRating, setSortByRating] = useState({
        sort: false,
        asc: true
    });

    const sort = (param, asc = true) => {
        const params = [];

        if (param === sortParams.name || sortByName.sort) {
            setSortByName({ sort: true, asc: asc });
            asc ? params.push("Name") : params.push("Name desc");
        }
        if (param === sortParams.year || sortByYear.sort) {
            setSortByYear({ sort: true, asc: asc });
            asc ? params.push("Year") : params.push("Year desc");
        }
        if (param === sortParams.rating || sortByRating.sort) {
            setSortByRating({ sort: true, asc: asc });
            asc ? params.push("Rating") : params.push("Rating desc");
        }
        
        sortFilms(params, history);
    };

    return (
        <>
            {showSortBar ? (
                <div className={classes.container}>
                    <Typography
                        className={classes.item}
                        onClick={() => sort(sortParams.name, !sortByName.asc)}>
                        Name
                        {sortByName.sort &&
                            (sortByName.asc ? (
                                <ArrowUpward
                                    onClick={() =>
                                        sort(sortParams.name, !sortByName.asc)
                                    }
                                />
                            ) : (
                                <ArrowDownward
                                    onClick={() =>
                                        sort(sortParams.name, !sortByName.asc)
                                    }
                                />
                            ))}
                    </Typography>
                    <Typography
                        className={classes.item}
                        onClick={() => sort(sortParams.year, !sortByYear.asc)}>
                        Year
                        {sortByYear.sort &&
                            (sortByYear.asc ? (
                                <ArrowUpward
                                    onClick={() =>
                                        sort(sortParams.year, !sortByYear.asc)
                                    }
                                />
                            ) : (
                                <ArrowDownward
                                    onClick={() =>
                                        sort(sortParams.year, !sortByYear.asc)
                                    }
                                />
                            ))}
                    </Typography>
                    <Typography
                        className={classes.item}
                        onClick={() =>
                            sort(sortParams.rating, !sortByRating.asc)
                        }>
                        Rating
                        {sortByRating.sort &&
                            (sortByRating.asc ? (
                                <ArrowUpward
                                    onClick={() =>
                                        sort(
                                            sortParams.rating,
                                            !sortByRating.asc
                                        )
                                    }
                                />
                            ) : (
                                <ArrowDownward
                                    onClick={() =>
                                        sort(
                                            sortParams.rating,
                                            !sortByRating.asc
                                        )
                                    }
                                />
                            ))}
                    </Typography>
                    <Clear onClick={() => setShowSortBar(false)} />
                </div>
            ) : (
                <Fab
                    className={classes.button}
                    variant="extended"
                    onClick={() => setShowSortBar(true)}>
                    Sort <Sort />
                </Fab>
            )}
        </>
    );
};

const mapStateToProps = state => {
    return {
        films: state.filmsListReducer.films
    };
};
const mapDispatchToProps = dispatch => {
    return {
        sortFilms: (params, history) => dispatch(sortFilms(params, history))
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(withStyles(styles)(SortBar)));
