import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { routes } from '../consts'
import About from "./About/index";
import FormContainer from "../containers/FormContainer";
import NotFound from "./NotFound/index";
import LoginRedux from "../containers/LoginRedux";
import LoginSuccess from "./LoginSuccess/index";
import ParentContainer from "../containers/ParentContainer";

const AppRouter = props => {
    let root = () => process.env.PUBLIC_URL;
    return (
        <>
            <Switch>
                <Route exact path={`${root()}/`} />
                <Route path={`${root()}${routes.about}`} component={About} />
                <Route path={`${root()}${routes.counters}`} component={ParentContainer} />
                <Route path={`${root()}${routes.login}`} component={FormContainer} />
                <Route exact path={`${root()}${routes.loginRedux}`} component={LoginRedux} />
                <Route path={`${root()}${routes.loginReduxSuccess}`} component={LoginSuccess} />
                <Route path={`${root()}${routes.notFound}`} component={NotFound} />
                <Redirect to={`${root()}${routes.notFound}`} />
            </Switch>
        </>
    )
}

export default withRouter(AppRouter);