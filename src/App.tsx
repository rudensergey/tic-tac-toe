// REACT
import React, { useState, useEffect } from "react";

// INTERFACES
import { IState } from "./components/typescript/interfaces";

// REDUX
import { connect } from "react-redux";

// STORE

// ACTIONS

// COMPONENTS
import Game from "./components/game/Game";
import Loader from "./components/loader/Loader";

// STYLES
import "./style/app.css";

/**
 * Main app component
 *
 * @return {Component}
 */
const App = () => {
    const [loaded, setLoader] = useState(false);

    useEffect(() => {
        document.title = "Крестики Нолики";
        setTimeout(() => setLoader(true), 2000);
    });

    return <>{loaded ? <Game /> : <Loader />}</>;
};

export default connect(({ matrix }: IState) => ({ matrix }), null)(App);
