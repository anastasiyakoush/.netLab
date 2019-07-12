import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Typography, Fab } from "@material-ui/core";
import { ArrowDownward, ArrowUpward, Clear, Sort } from "@material-ui/icons";
import { sortParams } from "../../consts";
import { setqueryableList } from "../../actions/actions/queryableList";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import { getqueryableList } from "../../actions/thunks";

const SortBar = ({ queryable, classes,  history, sortqueryable }) => {
    const [showSortBar, setShowSortBar] = useState(false);
    const [sortByName, setSortByName] = useState({ sort: false, asc: true });
    const [sortByYear, setSortByYear] = useState({ sort: false, asc: true });
    const [sortByRating, setSortByRating] = useState({ sort: false, asc: true });

    const sort = (param, asc = true) => {
        const body = {};

        if (param === sortParams.name ) {
            setSortByName({ sort: true, asc: asc })
            body.sortByName = asc ? 0 : 1;
        }
        if (param === sortParams.year || sortByYear.sort) {
            setSortByYear({ sort: true, asc: asc })
            body.sortByYear = asc ? 0 : 1;
        }
        if (param === sortParams.rating || sortByRating.sort) {
            setSortByRating({ sort: true, asc: asc })
            body.sortByRating = asc ? 0 : 1;
        }

        sortqueryable(history, body);
    }

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
        queryable: state.queryableListReducer.queryable
    }
}
const mapDispatchToProps = dispatch => {
    return {
        updatequeryableList: sortedqueryable => dispatch(setqueryableList(sortedqueryable)),
        sortqueryable: (history, body) => dispatch(getqueryableList(history, body))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(SortBar)));