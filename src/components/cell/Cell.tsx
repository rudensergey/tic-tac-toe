// REACT
import React from "react";

//INTERFACES & TYPES
import { ICell } from "../typescript/interfaces";

// REDUX
import { connect } from "react-redux";

// STORE

// ACTIONS
import { move } from "../redux/actions/creators";

// COMPONENTS

// STYLES
import "./--default.css";

/**
 * Cell - represents one cell of the table
 *
 * @param {props} props - includes:
 * @param {object} coords - coordinates of this cell in the matrix
 * @param {string | boolean} status - current status of this cell: (true = tac / false = toe / success = success / "" = empty)
 * @return {HTMLElement}
 */
const Cell = (props: ICell) => {
    const {
        status,
        coords: { aIndex: y, bIndex: x },
        move,
    } = props;

    let name;
    let classNames;

    switch (status) {
        case true:
            name = "O";
            classNames = "cell-tac";
            break;
        case false:
            name = "X";
            classNames = "cell-toe";
            break;
        case "success-tac":
            name = "O";
            classNames = "cell-success";
            break;
        case "success-toe":
            name = "X";
            classNames = "cell-success";
            break;
        default:
            name = "";
            classNames = "";
    }

    return (
        <div
            className={"cell " + classNames}
            key={x + y}
            onClick={() =>
                status !== null ? alert("Хватит меня нажимать!") : move([y, x])
            }
        >
            <p>{name}</p>
        </div>
    );
};

export default connect(null, { move })(Cell);
