import React from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routing/AppRouter";
import NavBar from "./containers/NavBar";

const App = ({ isAuthenticated, loading }) => {
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
        loading: state.requestReducer.loading
    };
};
export default connect(mapStateToProps)(App);