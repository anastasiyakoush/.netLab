import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "@material-ui/core";
import { root, routes } from "../../routing/routes";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

const Title = ({ classes, location }) => {
    const isAuthenticated = !(location.pathname.includes(`${routes.login}`) || location.pathname.includes(`${routes.signUp}`));

    const props = {
        className: classes.title,
        disabled: !isAuthenticated,
        variant: "h4",
        underline: "none",
        ...(isAuthenticated && { href: `${root()}${routes.homePage}` })
    }

    return (<Link {...props}> Movie DB</Link >)
};
export default withRouter(withStyles(styles)(Title));