import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { root, routes } from "../routing/routes";
import PrivateRoute from "./PrivateRoute";
import FilmCatalog from "../containers/FilmCatalog";
import LoginForm from "../containers/LoginForm/index";
import SignUpForm from "../containers/SignUpForm/index";
import NotFound from "../containers/NotFound/index";
import FilmDetails from "../containers/FilmDetails/index";

const AppRouter = ({ isAuthenticated }) => {
    return (
        <Switch>
            <Route
                exact
                path={`${root()}${routes.login}`}
                component={LoginForm}
            />
            <Route
                exact
                path={`${root()}${routes.signUp}`}
                component={SignUpForm}
            />

            {!isAuthenticated && <Redirect to={`${root()}${routes.login}`} />}

            <PrivateRoute
                path={`${root()}${routes.film}/:id`}
                component={FilmDetails}
                isAuthenticated
            />
            <PrivateRoute
                exact
                path={`${root()}${routes.homePage}`}
                component={FilmCatalog}
                isAuthenticated
            />
            <Route path={`${root()}${routes.notFound}`} component={NotFound} />
            <Redirect to={`${root()}${routes.notFound}`} />
        </Switch>
    );
};
export default withRouter(AppRouter);