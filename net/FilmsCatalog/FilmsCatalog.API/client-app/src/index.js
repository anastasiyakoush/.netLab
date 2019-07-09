import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router } from "react-router-dom";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers/rootReducers"
import { isAuthenticated } from './helpers';
import AppRouter from "./routing/AppRouter";
import NavBar from "./containers/NavBar";
import { root, routes } from "./routing/routes";
import { createBrowserHistory } from 'history';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const history = createBrowserHistory();

!isAuthenticated && !history.location.pathname.includes(`${root()}${routes.signUp}`) && history.push({ pathname: `${root()}${routes.login}` });
isAuthenticated && history.location.pathname.includes(`${root()}${routes.login}`) && history.push({ pathname: `${root()}${routes.login}` });

ReactDOM.render(
    <Provider store={store}>
        <Router forceRefresh={true} history={history}>
            <NavBar />
            <AppRouter />
        </Router>
    </Provider>, document.getElementById('root')
);