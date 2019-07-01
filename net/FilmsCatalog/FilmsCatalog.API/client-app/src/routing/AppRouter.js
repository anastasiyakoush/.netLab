import React from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { root, routes } from "../routing/routes"
import PrivateRoute from "./PrivateRoute"
import HomePage from "../containers/HomePage/index"
import LoginForm from "../containers/LoginForm/index"
import SignUpForm from "../containers/SignUpForm/index"
import NotFound from "../containers/NotFound/index"

const AppRouter = () => {
    return (
        <Switch>
            <Route path={`${root()}${routes.login}`} component={LoginForm} />
            <Route path={`${root()}${routes.signUp}`} component={SignUpForm} />
            <PrivateRoute exact path={`${root()}`} component={HomePage} />

            <Route path={`${root()}${routes.notFound}`} component={NotFound} />
            <Redirect to={`${root()}${routes.notFound}`} />
        </Switch>
    )
}

export default withRouter(AppRouter);