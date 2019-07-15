import React from "react";
import { withRouter } from "react-router";
import { Toolbar } from "@material-ui/core";
import Logout from "../../components/Logout";
import SearchField from "../../components/SearchField";
import HomeLink from "../../components/HomeLink";
import Title from "../../components/Title";
import { authHelper } from "../../helpers/authHepler"
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import SortBar from "../../components/SortBar";

const NavBar = ({ classes }) => {
  return (
    <Toolbar className={classes.tabs} >
      <HomeLink disabled />}
              <Title />
      {authHelper.isAuthenticated() && <SortBar />}
      {authHelper.isAuthenticated() && <SearchField />}
      {authHelper.isAuthenticated() && <Logout />}
    </Toolbar>)
};
export default withRouter(withStyles(styles)(NavBar));