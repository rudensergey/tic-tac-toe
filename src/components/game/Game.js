import React, { useState } from "react";
import "./game.css";

/**
 *
 * @param {props} props - includes:
 * @param {number} initialHeight - amount rows in this table
 * @param {number} initialWidth - amount columns in this table
 *
 * @return {HTMLElement}
 */
export const Game = (props) => {
    const { initialHeight, initialWidth } = props;

    /**
     * Create matrix - creates new matrix based on the input
     *
     * @param {number} h - pepresents height of the matrix
     * @param {number} w - represent width of the matrix
     * @return {Array}
     */
    const createMatrix = (h, w) =>
        new Array(h).fill().map(() => new Array(w).fill(["", ""]));

    console.log(createMatrix(initialHeight, initialWidth));

    return (
        <div
            className="game"
            style={{
                gridTemplateColumns: `repeat(${initialWidth}, 100px)`,
                gridTemplateRows: `repeat(${initialHeight}, 100px)`,
            }}
        >
            {createMatrix(initialHeight, initialWidth).map((a, aIndex) =>
                a.map((b, bIndex) => (
                    <Cell
                        coords={{ aIndex, bIndex }}
                        key={aIndex + bIndex}
                        status={b[1]}
                    />
                ))
            )}
        </div>
    );
};

/**
 * Cell - represents one cell of the table
 *
 * @param {props} props - includes:
 * @param {object} coords - coordinates of that cell in the matrix
 * @param {string | boolean} status - current value of this cell
 * @return {HTMLElement}
 */
const Cell = (props) => {
    const {
        status,
        coords: { aIndex: x, bIndex: y },
    } = props;

    const [stat, setStat] = useState(status);
    let name;
    let classNames;

    switch (stat) {
        case true:
            name = "O";
            classNames = "game__cell-tac";
            break;
        case false:
            name = "X";
            classNames = "game__cell-toe";
            break;
        case "success":
            name = "";
            classNames = "game__cell-success";
            break;
    }

    return (
        <div
            className={"game__cell " + classNames}
            key={x + y}
            onClick={() => {
                stat === true || stat === false
                    ? alert("Хватит меня нажимать!")
                    : setStat(false);
            }}
        >
            <p>{name}</p>
        </div>
    );
};
