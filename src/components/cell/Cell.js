import React, { useState } from "react";
import "./--default.css";

/**
 * Cell - represents one cell of the table
 *
 * @param {props} props - includes:
 * @param {object} coords - coordinates of this cell in the matrix
 * @param {string | boolean} status - current status of this cell: (true = tac / false = toe / success = success / "" = empty)
 * @return {HTMLElement}
 */
export const Cell = (props) => {
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
            classNames = "cell-tac";
            break;
        case false:
            name = "X";
            classNames = "cell-toe";
            break;
        case "success":
            name = "";
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
