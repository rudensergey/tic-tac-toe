import React from "react";
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

    console.log(matrix);

    return (
        <div
            className="game"
            style={{
                gridTemplateColumns: `repeat(${matrix.length}, 100px)`,
                gridTemplateRows: `repeat(${matrix[0].length}, 100px)`,
            }}
        >
            {matrix.map((a, aIndex) =>
                a.map((b, bIndex) => (
                    <Cell
                        coords={{ aIndex, bIndex }}
                        key={aIndex + bIndex}
                        status={b}
                    />
                ))
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
        matrix: state.matrixReducer,
    };
};

export default connect(mapStateToProps, null)(Game);
