import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./style/app.css";
import Game from "./components/game/Game";
import Loader from "./components/loader/Loader";

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

/**
 * mapStateToProps - represents FC which leads redux state value to props of react component
 *
 * @param {state} state - redux state
 * @return {object}
 */

export default connect(({ matrix }) => ({ matrix }), null)(App);
