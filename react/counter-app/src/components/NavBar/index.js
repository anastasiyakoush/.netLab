import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { Tab, Tabs } from "@material-ui/core";
import { routes, root } from "../../consts";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

const NavBar = props => {
    const { classes } = props;
    const isNotFound = props.location.pathname !== "/404";

    return isNotFound ? (
        <Tabs className={classes.tabs} indicatorColor="#4DB6AC" centered={true}>
            <Tab
                className={classes.tab}
                label="About"
                component={Link}
                to={`${root()}${routes.about}`}
            />
            <Tab
                className={classes.tab}
                label="Counters"
                component={Link}
                to={`${root()}${routes.counters}`}
            />
            <Tab
                className={classes.tab}
                label="Login"
                component={Link}
                to={`${root()}${routes.login}`}
            />
            <Tab
                className={classes.tab}
                label="Login with Redux"
                component={Link}
                to={`${root()}${routes.loginRedux}`}
            />
            <Tab
                className={classes.tab}
                label="Login with ReduxForm"
                component={Link}
                to={`${root()}${routes.loginReduxForm}`}
            />
        </Tabs>
    ) : null;
};

export default withRouter(withStyles(styles)(NavBar));