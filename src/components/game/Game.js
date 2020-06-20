/* eslint-disable require-jsdoc */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import Cell from "../cell/Cell";
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
const Game = (props) => {
    const { matrix } = props;

    useEffect(() => {
        const handleResize = () => {
            const limit =
                document.getElementById("game").getBoundingClientRect().width -
                400;

            const scroll =
                document.documentElement.clientHeight + window.pageYOffset;

            if (limit < scroll) alert("extend the display");
        };

        window.addEventListener("scroll", handleResize);

        return () => {
            window.removeEventListener("scroll", handleResize);
        };
    });

    return (
        <div
            id="game"
            className="game game-appearance"
            style={{
                gridTemplateColumns: `repeat(${matrix.length}, 100px)`,
                gridTemplateRows: `repeat(${matrix.length}, 100px)`,
            }}
        >
            {matrix.map((a, aIndex) =>
                a.map((b, bIndex) => {
                    return (
                        <Cell
                            coords={{ aIndex, bIndex }}
                            key={aIndex + bIndex}
                            status={b}
                        />
                    );
                })
            )}
        </div>
    );
};

/**
 * mapStateToProps - represents FC which leads redux state value to props of react component
 *
 * @param {state} state - redux state
 * @return {object}
 */
const mapStateToProps = (state) => {
    return {
        matrix: state.matrix,
    };
};

export default connect(mapStateToProps, null)(Game);
