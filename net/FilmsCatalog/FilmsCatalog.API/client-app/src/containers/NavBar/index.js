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
    const isException = location.pathname.includes(`${routes.oops}`);

    return  !isException
            ? (<Toolbar className={classes.tabs} >
                <HomeLink />
                <Title />
                <SearchField />
                <Logout />
            </Toolbar>)
            : null;
};
export default withRouter(withStyles(styles)(NavBar));