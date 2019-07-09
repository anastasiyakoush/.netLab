import React from "react";
import { withRouter } from "react-router";
import { Toolbar } from "@material-ui/core";
import Logout from "../../components/Logout";
import SearchField from "../../components/SearchField";
import HomeLink from "../../components/HomeLink";
import Title from "../../components/Title";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import { routes } from "../../routing/routes";

const NavBar = ({ classes, location }) => {
    const isAuthenticated = !(location.pathname.includes(`${routes.login}`) || location.pathname.includes(`${routes.signUp}`))

    return (
        <Toolbar className={classes.tabs} >
            <HomeLink disabled />}
              <Title />
            {isAuthenticated && < SearchField />}
            {isAuthenticated && <Logout />}
        </Toolbar>)
};
export default withRouter(withStyles(styles)(NavBar));