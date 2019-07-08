import React from 'react'
import { Route, Redirect } from "react-router-dom"
import { routes } from "./routes"

const PrivateRoute = ({ component: Component, ...rest }, isAuthenticated) => {
    return <Route {...rest} render={() =>
        isAuthenticated
            ? (<Component {...rest} />)
            : (<Redirect to={
                `${routes.login}`}
            />)
    } />
}
export default PrivateRoute;