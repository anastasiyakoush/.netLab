import React from 'react'
import { Typography, Button } from "@material-ui/core";
import { ExitToApp } from "@material-ui/icons";
import { withStyles } from "@material-ui/styles";
import styles from "./styles"
import { deAuthenticate } from '../../actions/thunks';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { root, routes } from '../../routing/routes';

const Logout = ({ classes, logout, history, isAuthenticated }) => {
    const onClickHandler = () => {
        if (isAuthenticated) {
            logout(history)
        }
        else {
            history.push(`${root()}${routes.login}`)
        }
    }

    return (
        <Button className={classes.wrapper} onClick={() => onClickHandler()}>
            <Typography variant="body2">{isAuthenticated ? "Log out" : "Log in"}</Typography>
            <ExitToApp className={classes.icon} />
        </Button >
    )
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.requestReducer.isAuthenticated
    }
}
const mapDispatchToProps = dispatch => {
    return {
        logout: history => dispatch(deAuthenticate(history))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(Logout)));