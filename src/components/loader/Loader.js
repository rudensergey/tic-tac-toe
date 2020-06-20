// REACT
import React from "react";

// REDUX

// STORE

// ACTIONS

// COMPONENTS

// STYLES
import "./--default.css";

/**
 * Loader - componet hold user while interface isn't downloaded
 *
 * @param {props} props
 * @return {JSX}
 */
const Loader = (props) => {
    return (
        <div className="loader">
            <h1 className="loader__text game-appearance">Привет :)</h1>
        </div>
    );
};

export default Loader;
