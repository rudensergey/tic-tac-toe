import React from "react";
import "./--default.css";

/**
 * Loader - componet hold user while interface isn't downloaded
 *
 * @param {props} props
 * @return {HTMLElement}
 */
const Loader = (props) => {
    return (
        <div className="loader">
            <h1 className="loader__text game-appearance">Привет :)</h1>
        </div>
    );
};

export default Loader;
