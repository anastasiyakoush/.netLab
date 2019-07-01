import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { Tab, Tabs } from "@material-ui/core";
import { routes, root } from "../../routing/routes";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

const NavBar = props => {
    const { classes } = props;
    const isNotFound = props.location.pathname !== "/404";

    return isNotFound ? (
        <Tabs className={classes.tabs} indicatorColor="#4DB6AC" centered={true}>
            <Tab
                className={classes.tab}
                label="Home"
                component={Link}
                to={`${root()}${routes.homePage}`}
            />
            <Tab
                className={classes.tab}
                label="Account"
                component={Link}
                to={`${root()}${routes.account}`}
            />
        </Tabs>
    ) : null;
};

export default withRouter(withStyles(styles)(NavBar));