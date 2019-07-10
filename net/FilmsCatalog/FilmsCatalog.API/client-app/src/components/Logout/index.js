import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Typography, Button } from "@material-ui/core";
import { ExitToApp } from "@material-ui/icons";
import { deauthenticate } from '../../actions/thunks';
import { root, routes } from '../../routing/routes';
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

const Logout = ({ classes, logout, history, isAuthenticated }) => {
    const onClickHandler = () => isAuthenticated ? logout(history) : history.push(`${root()}${routes.login}`);

    return (
        <Button className={classes.wrapper} onClick={() => onClickHandler()}>
            <Typography variant="body2">{isAuthenticated ? "Log out" : "Log in"}</Typography>
            <ExitToApp className={classes.icon} />
        </Button >
    )
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.requestStateReducer.isAuthenticated
    }
}
const mapDispatchToProps = dispatch => {
    return {
        logout: history => dispatch(deauthenticate(history))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(Logout)));