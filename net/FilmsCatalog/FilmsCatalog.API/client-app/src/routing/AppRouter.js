import React from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'

import { root, routes } from "../routing/routes"
import PrivateRoute from "./PrivateRoute"
import HomePage from "../containers/HomePage/index"
import LoginForm from "../containers/LoginForm/index"
import SignUpForm from "../containers/SignUpForm/index"
import NotFound from "../containers/NotFound/index"
import FilmDetails from "../containers/FilmDetails/index"
import FilmCatalog from '../containers/FilmCatalog';


//create account component

const AppRouter = (props) => {
    return (
        <Switch>
            <Route exact path={`${root()}${routes.login}`} component={LoginForm} />
            <Route exact path={`${root()}${routes.signUp}`} component={SignUpForm} />            
            <PrivateRoute path={`${root()}${routes.film}/:id`} component={FilmDetails} />

            <PrivateRoute exact path={`${root()}`} component={FilmCatalog} />        
            <PrivateRoute exact path={`${root()}${routes.account}`} component={HomePage} />

            <Route path={`${root()}${routes.notFound}`} component={NotFound} />
        </Switch>
    )
}

export default withRouter(AppRouter);