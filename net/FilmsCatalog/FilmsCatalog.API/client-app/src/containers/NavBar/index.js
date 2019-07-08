import React from "react";
import { withRouter } from "react-router";
import { Toolbar } from "@material-ui/core";
import Logout from "../../components/Logout";
import SearchField from "../../components/SearchField";
import HomeLink from "../../components/HomeLink";
import Title from "../../components/Title";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

const NavBar = ({classes}) => {
    return (
        <Toolbar className={classes.tabs} >
            <HomeLink />
            <Title />
            <SearchField />
            <Logout />
        </Toolbar>
    );
};
export default withRouter(withStyles(styles)(NavBar));