import React, { useState ,useEffect} from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";
import { Input, InputAdornment } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { getFilmsList } from "../../actions/thunks";
import { setFilmsList } from "../../actions/actions";

const SearchField = props => {
 const [query, setQuery] = useState("");
    const {
        classes,
        isAuthenticated,
        getAll,
        filterFilms,
        history,
        films
    } = props;
    const onInputHandler = event => {
        const query = event.target.value;
        setQuery(query)
        const result = films
            .filter(x => x.name.toLowerCase().includes(query.toLowerCase()))
            .slice(0, 5);
        filterFilms(result);
    };
 /*    useEffect(() => {
        getAll(history);
    }, [query]); */

    return (
        <div className={classes.container}>
            <Input
                placeholder="Search for ..."
                disableUnderline={true}
                disabled={!isAuthenticated}
                endAdornment={
                    <InputAdornment position="end">
                        <Search className={classes.icon} />
                    </InputAdornment>
                }
                onChange={e => onInputHandler(e)}
            />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.requestReducer.isAuthenticated,
        films: state.filmsCrud.films
    };
};
const mapDispatcToProps = dispatch => {
    return {
        filterFilms: films => dispatch(setFilmsList(films)),
        getAll: history => dispatch(getFilmsList(history))
    };
};

export default connect(
    mapStateToProps,
    mapDispatcToProps
)(withRouter(withStyles(styles)(SearchField)));
