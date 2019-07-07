import React from "react";
import { Link } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import { withRouter } from "react-router-dom";
import { root, routes } from "../../routing/routes";

const HomeLink = ({classes}) => {
    return (
        <Link href={`${root()}${routes.homePage}`} className={classes.container}>
            <Home />
        </Link>
    );
};

export default withRouter(withStyles(styles)(HomeLink));
