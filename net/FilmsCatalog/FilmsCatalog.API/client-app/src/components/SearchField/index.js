import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Input, InputAdornment, Typography } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { findFilm, getFilms } from "../../actions/thunks";
import { routes, root } from "../../routing/routes";
import { minSearchRequestLength } from "../../consts";
import { filmsBaseUrl } from "../../api/consts";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

const SearchField = props => {
    const [query, setQuery] = useState("");
    const [suggestedMovies, setMovies] = useState([]);

    const {
        classes,
        search,
        history,
        location,
        getAll,
        films: filmsList
    } = props;

    const onInputHandler = event => {
        const entry = event.target.value;
        setQuery(entry);

        if (location.pathname.includes(`${routes.homePage}`)) {
            entry.length !== 0 &&
                (entry.length > minSearchRequestLength ||
                    entry.length < query.length) &&
                search(entry, history);
            entry.length === 0 && getAll(history, false, filmsBaseUrl);
        }
        else if (location.pathname.includes(`${routes.film}`)) {
            filmsList.length === 0 && getAll(history, false, filmsBaseUrl);

            if (filmsList.length > 0 && entry.length > 0) {
                setMovies(filmsList);
            }

            entry.length === 0 && setMovies([]);
        }
    };

    const onClickHandler = id =>
        history.push({ pathname: `${root()}${routes.film}/${id}` });

    return (
        <div className={classes.container}>
            <div className={classes.input}>
                <Input
                    placeholder="Search for movies..."
                    disableUnderline={true}
                    endAdornment={
                        <InputAdornment position="end">
                            <Search className={classes.icon} />
                        </InputAdornment>
                    }
                    onInput={e => onInputHandler(e)}
                />
            </div>
            {suggestedMovies.length > 0 && (
                <div className={classes.list}>
                    {suggestedMovies.map((x, i) => (
                        <Typography
                            variant="body2"
                            className={classes.link}
                            key={i}
                            onClick={() => onClickHandler(x.Id)}>{`${x.Name} (${x.Year})`}</Typography>
                    ))}
                </div>
            )}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.requestStateReducer.isAuthenticated,
        films: state.filmsListReducer.films,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        search: (query, history) => dispatch(findFilm(query, history)),
        getAll: (history, isAppend, link) =>
            dispatch(getFilms(history, isAppend, link))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(withStyles(styles)(SearchField)));
