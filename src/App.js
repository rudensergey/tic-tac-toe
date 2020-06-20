import React, { useState, useEffect } from "react";
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
        setTimeout(() => setLoader(true), 2000);
    });
    return <>{loaded ? <Game /> : <Loader />}</>;
};

export default App;
