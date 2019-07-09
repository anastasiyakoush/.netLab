import React from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routing/AppRouter";
import NavBar from "./containers/NavBar";

const App = ({ isAuthenticated }) => {
    return (
        <BrowserRouter forceRefresh={true}>
            <NavBar />
            <AppRouter isAuthenticated={isAuthenticated} />
        </BrowserRouter>
    );
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.requestReducer.isAuthenticated,
    };
};
export default connect(mapStateToProps)(App);