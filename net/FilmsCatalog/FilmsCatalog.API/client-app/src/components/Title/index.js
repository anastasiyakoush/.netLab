import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "@material-ui/core";
import { root, routes } from "../../routing/routes";
import { authHelper } from "../../helpers/authHepler"
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

const Title = ({ classes }) => {
    const props = {
        className: classes.title,
        variant: "h4",
        underline: "none",
        ...(authHelper.isAuthenticated() && { href: `${root()}${routes.homePage}` })
    }

    return (<Link {...props}> Movie DB</Link >)
};
export default withRouter(withStyles(styles)(Title));