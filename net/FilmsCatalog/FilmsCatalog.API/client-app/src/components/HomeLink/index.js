import React from "react";
import { withRouter } from "react-router-dom";
import { Button } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { root, routes } from "../../routing/routes";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

const HomeLink = ({ classes, location, history }) => {
    const isAuthenticated = !(location.pathname.includes(`${routes.login}`) || location.pathname.includes(`${routes.signUp}`));
    const onClickHandler = () => { history.push({ pathname: `${root()}${routes.homePage}` }) }

    return isAuthenticated
        ? (
            <Button onClick={() => onClickHandler()} className={classes.container} disabled={!isAuthenticated}>
                <Home />
            </Button>
        )
        : <Home className={classes.icon} />
};
export default withRouter(withStyles(styles)(HomeLink));