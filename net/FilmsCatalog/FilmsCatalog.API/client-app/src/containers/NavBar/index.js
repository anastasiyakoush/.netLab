import React from "react";
import { withRouter } from "react-router";
import { Tab, Tabs } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import Logout from "../../components/Logout";
import SearchField from "../../components/SearchField";
import HomeLink from "../../components/HomeLink";
import Title from "../../components/Title";

const NavBar = props => {
    const { classes } = props;

    return (
        <Tabs className={classes.tabs} indicatorColor="#4DB6AC" centered={true}>
            <Tab className={classes.tab} component={HomeLink} />
            <Tab className={classes.tab} component={Title} />
            <Tab className={classes.tab} component={SearchField} />
            <Tab className={classes.tab} component={Logout} />
        </Tabs>
    );
};

export default withRouter(withStyles(styles)(NavBar));