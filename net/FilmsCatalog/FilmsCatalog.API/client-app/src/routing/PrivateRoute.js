import React from 'react'
import { Route, Redirect } from "react-router-dom"
import { routes } from "./routes"
import { isAuthenticated } from "../helpers"

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