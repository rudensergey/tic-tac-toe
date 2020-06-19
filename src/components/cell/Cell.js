import React from "react";
import { connect } from "react-redux";
import { move } from "../redux/actions/creators";
import "./--default.css";

/**
 * Cell - represents one cell of the table
 *
 * @param {props} props - includes:
 * @param {object} coords - coordinates of this cell in the matrix
 * @param {string | boolean} status - current status of this cell: (true = tac / false = toe / success = success / "" = empty)
 * @return {HTMLElement}
 */
const Cell = (props) => {
    const {
        status,
        coords: { aIndex: x, bIndex: y },
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
                status !== null
                    ? alert("Хватит меня нажимать!")
                    : move(`${y},${x}`);
            }}
        >
            <p>{name}</p>
        </div>
    );
};

const mapDispatchToProps = {
    move,
};

export default connect(null, mapDispatchToProps)(Cell);
