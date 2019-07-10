import React from "react";
import { withRouter } from "react-router-dom";
import { Button } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { root, routes } from "../../routing/routes";
import { authHelper } from "../../helpers/authHepler";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

const HomeLink = ({ classes, history }) => {
    const onClickHandler = () => { history.push({ pathname: `${root()}${routes.homePage}` }) }

    return authHelper.isAuthenticated()
        ? (
            <Button onClick={() => onClickHandler()} className={classes.container}>
                <Home />
            </Button>
        )
        : <Home className={classes.icon} />
};
export default withRouter(withStyles(styles)(HomeLink));