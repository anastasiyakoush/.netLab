import React from "react";
import { BrowserRouter } from "react-router-dom"
import AppRouter from './routing/AppRouter'
import { connect } from "react-redux";
import NavBar from "./containers/NavBar";
import Spinner from "./components/Spinner/index"

const App = ({ isAuthenticated,loading }) => {
    return (
        <BrowserRouter>
            <NavBar />
            {loading && <Spinner />}
            <AppRouter isAuthenticated={isAuthenticated} />
        </BrowserRouter>
    );
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.requestReducer.isAuthenticated,
        loading: state.requestReducer.loading
    }
}
export default connect(mapStateToProps)(App);