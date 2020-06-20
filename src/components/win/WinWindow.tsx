import React from "react";
import './--default.css'
import { IWin } from "../typescript/interfaces";

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
