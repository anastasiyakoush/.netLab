import React from "react";
import { BrowserRouter } from "react-router-dom"
import AppRouter from './routing/AppRouter'
import NavBar from "./containers/NavBar";
import { isAuthenticated } from "./helpers";

function App() {
    return (
        <BrowserRouter>
            {isAuthenticated && <NavBar />}
            <AppRouter />
        </BrowserRouter>
    );
}

export default App;
