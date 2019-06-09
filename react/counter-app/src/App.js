import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar/index";
import About from "./components/About/index";
import FormContainer from "./containers/FormContainer/index";
import NoMatch from "./components/NoMatch/index";
import ParentContainer from "./containers/ParentContainer";

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route exact path="/" />
                <Route path="/about" component={About} />
                <Route path="/counters" component={ParentContainer} />
                <Route path="/login" component={FormContainer} />
                <Route path="/404" component={NoMatch} />
                <Redirect to="/404" />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
