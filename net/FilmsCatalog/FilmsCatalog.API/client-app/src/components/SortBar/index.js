import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { sortFilms } from "../../actions/thunks";
import { Typography, Fab } from "@material-ui/core";
import { ArrowDownward, ArrowUpward, Clear, Sort } from "@material-ui/icons";
import { sortParams } from "../../consts";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

const SortBar = ({ classes, history, sortFilms }) => {
    const [showSortBar, setShowSortBar] = useState(false);
    const [sortByName, setSortByName] = useState(null);
    const [sortByYear, setSortByYear] = useState(null);
    const [sortByRating, setSortByRating] = useState(null);

    const sort = (param, direction) => {
        const params = [];

        if (param === sortParams.name) {
            setSortByName(!sortByName);
            direction ? params.push("Name") : params.push("Name desc");
        }
        else if (sortByName !== null) {
            sortByName ? params.push("Name") : params.push("Name desc");
        };

        if (param === sortParams.year) {
            setSortByYear(!sortByYear);
            direction ? params.push("Year") : params.push("Year desc");
        }
        else if (sortByYear !== null) {
            sortByYear ? params.push("Year") : params.push("Year desc");
        };

        if (param === sortParams.rating) {
            setSortByRating(!sortByRating);
            direction ? params.push("Rating") : params.push("Rating desc")
        }
        else if (sortByRating !== null) {
            sortByRating ? params.push("Rating") : params.push("Rating desc");
        }

        params.length > 0 && sortFilms(params, history);
    };

    return (
        <>
            {showSortBar ?
                <div className={classes.container}>
                    <Typography
                        className={classes.item}
                        onClick={() => sort(sortParams.name, !sortByName)}>
                        Name
                        {sortByName !== null && (sortByName
                            ? <ArrowUpward />
                            : <ArrowDownward />)
                        }
                    </Typography>
                    <Typography
                        className={classes.item}
                        onClick={() => sort(sortParams.year, !sortByYear)}>
                        Year
                        {sortByYear !== null && (sortByYear
                            ? <ArrowUpward />
                            : <ArrowDownward />
                        )}
                    </Typography>
                    <Typography
                        className={classes.item}
                        onClick={() => sort(sortParams.rating, !sortByRating)}>
                        Rating
                        {sortByRating !== null && (sortByRating
                            ? <ArrowUpward />
                            : <ArrowDownward />
                        )}
                    </Typography>
                    <Clear onClick={() => setShowSortBar(false)} />
                </div>
                :
                <Fab
                    className={classes.button}
                    variant="extended"
                    onClick={() => setShowSortBar(true)}>
                    Sort <Sort />
                </Fab>
            }
        </>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        sortFilms: (params, history) => dispatch(sortFilms(params, history))
    };
};
export default connect(
    null,
    mapDispatchToProps
)(withRouter(withStyles(styles)(SortBar)));