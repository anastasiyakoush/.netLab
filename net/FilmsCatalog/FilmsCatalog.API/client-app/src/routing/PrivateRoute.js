import React from 'react'
import { Route, Redirect } from "react-router-dom"
import { root, routes } from "./routes"

const isAuthenticated = localStorage.getItem("username") && localStorage.getItem("token");

const PrivateRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={props =>
        isAuthenticated
            ? (<Component {...rest} />)
            : (<Redirect to={
                `${routes.login}`}
            />)
    } />
}
export default PrivateRoute;