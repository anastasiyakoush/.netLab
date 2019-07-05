import React from "react";
import { BrowserRouter } from "react-router-dom"
import AppRouter from './routing/AppRouter'
import { connect } from "react-redux";
import NavBar from "./containers/NavBar";

const App = ({ isAuthenticated }) => {
    return (
        <BrowserRouter>
            <NavBar />
            <AppRouter isAuthenticated={isAuthenticated} />
        </BrowserRouter>
    );
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.requestReducer.isAuthenticated
    }
}
export default connect(mapStateToProps)(App);