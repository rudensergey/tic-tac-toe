import React from "react";
import { Cell } from "../library";
import "./--default.css";

/**
 * Game represents main component with cells inside
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
        new Array(h).fill().map(() => new Array(w).fill([""]));

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
                        status={b[0]}
                    />
                ))
            )}
        </div>
    );
};
