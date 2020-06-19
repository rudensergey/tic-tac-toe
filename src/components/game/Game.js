import React from "react";
import "./game.css";

export const Game = (props) => {
    const { initialHeigth, initialWidth } = props;

    const createMatrix = (h, w) =>
        new Array(h).fill().map(() => new Array(w).fill(""));

    return (
        <div
            className="game"
            style={{
                gridTemplateColumns: `repeat(${initialHeigth}, 1fr)`,
                gridTemplateRows: `repeat(${initialWidth}, 1fr)`,
            }}
        >
            {createMatrix(initialHeigth, initialWidth).map((a) =>
                a.map((b) => (
                    <div className="game__cell">
                        <p>Cell</p>
                    </div>
                ))
            )}
        </div>
    );
};
