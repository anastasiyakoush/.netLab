import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { routes, root } from "../consts";
import About from "./About/index";
import NotFound from "./NotFound/index";
import LoginSuccess from "./LoginSuccess/index";
import LoginRedux from "../containers/LoginRedux";
import LoginReduxForm from "../containers/LoginReduxForm";
import ParentContainer from "../containers/ParentContainer";
import FormContainer from "../containers/FormContainer";

const AppRouter = props => {
    return (
        <>
            <Switch>
                <Route exact path={`${root()}/`} />
                <Route path={`${root()}${routes.about}`} component={About} />
                <Route path={`${root()}${routes.counters}`} component={ParentContainer} />
                <Route path={`${root()}${routes.login}`} component={FormContainer} />
                <Route exact path={`${root()}${routes.loginRedux}`} component={LoginRedux} />
                <Route path={`${root()}${routes.loginReduxSuccess}`} component={LoginSuccess} />
                <Route exact path={`${root()}${routes.loginReduxForm}`} component={LoginReduxForm} />
                <Route path={`${root()}${routes.loginReduxFormSuccess}`} component={LoginSuccess} />
                <Route path={`${root()}${routes.notFound}`} component={NotFound} />
                <Redirect to={`${root()}${routes.notFound}`} />
            </Switch>
        </>
    );
};

export default withRouter(AppRouter);