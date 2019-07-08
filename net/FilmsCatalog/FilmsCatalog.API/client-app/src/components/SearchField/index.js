import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Input, InputAdornment, Typography } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { findFilm, getFilmsList } from "../../actions/thunks";
import { routes, root } from "../../routing/routes";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

const SearchField = props => {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const {
        classes,
        isAuthenticated,
        search,
        history,
        location,
        getAll,
        films
    } = props;

    const onInputHandler = event => {
        const entry = event.target.value;
        setQuery(entry);

        if (location.pathname.includes(`${routes.homePage}`)) {
            entry.length !== 0 && (entry.length > 2 || entry.length < query.length) && search(entry, history);
            entry.length === 0 && getAll(history);
        }
        else if (location.pathname.includes(`${routes.film}`)) {
            films.length < 1 && getAll(history);

            if (films.length > 0 && entry.length > 0) {
                setSuggestions(films.filter(x => x.name.toLowerCase().includes(entry)))
            }
            entry.length === 0 && setSuggestions([]);
        }
    };

    const onClickHandler = id => history.push({ pathname: `${root()}${routes.film}/${id}` });

    return (
        <div className={classes.container}>
            <div className={classes.input}>
                <Input
                    placeholder="Search for ..."
                    disableUnderline={true}
                    disabled={!isAuthenticated}
                    endAdornment={
                        <InputAdornment position="end">
                            <Search className={classes.icon} />
                        </InputAdornment>
                    }
                    onInput={e => onInputHandler(e)}
                />
            </div>
            {
                suggestions.length > 0 && <div className={classes.list}>
                    {suggestions.map(x => <Typography variant="body2" className={classes.link} onClick={() => onClickHandler(x.id)}>{x.name}</Typography>)}
                </div>
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.requestReducer.isAuthenticated,
        films: state.filmsCrud.films,
    };
};
const mapDispatcToProps = dispatch => {
    return {
        search: (query, history) => dispatch(findFilm(query, history)),
        getAll: (history) => dispatch(getFilmsList(history)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatcToProps
)(withRouter(withStyles(styles)(SearchField)));