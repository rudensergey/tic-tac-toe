// REACT
import React from "react";

// INTERFACES & TYPES
import { IWin } from "../typescript/interfaces";

// REDUX

// STORE

// ACTIONS

// COMPONENTS

// STYLES
import "./--default.css";

const WinWindow = (props: IWin) => {
    const { type } = props;
    return (
        <div className="win game-appearance">
            <h1>Победили {type === "tac" ? "нолики :)" : "крестики :)"!}</h1>
            <p className="win__me">made by @rudensergey</p>
        </div>
    );
};

export default WinWindow;
