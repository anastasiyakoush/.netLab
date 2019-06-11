import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { Tab, Tabs } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

const NavBar = props => {
    const { classes } = props;
    const isNotFound = props.location.pathname !== "/404";

    return isNotFound ? (
        <Tabs className={classes.tabs} centered={true}>
            <Tab className={classes.tab} label="About" component={Link} to={process.env.PUBLIC_URL + '/about'} />
            <Tab
                className={classes.tab}
                label="Counters"
                component={Link}
                to="/counters"
            />
            <Tab className={classes.tab} label="Login" component={Link} to="/login" />
            <Tab
                className={classes.tab}
                label="Login with Redux"
                component={Link}
                to="/login-redux"
            />
        </Tabs>
    ) : null;
};

export default withRouter(withStyles(styles)(NavBar));