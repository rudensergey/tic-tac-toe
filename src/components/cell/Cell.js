import React from "react";
import { connect } from "react-redux";
import { move, changeTurn } from "../redux/actions/creators";
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
        turn,
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

    /**
     * onClickHandler - does two actions:
     * - puting the cell coordinates and move turn into the redux
     * - changing the turn order
     */
    const onClickHandler = () => {
        if (status !== null) {
            alert("Хватит меня нажимать!");
        } else {
            move({ coords: [y, x], moveTurn: turn });
            changeTurn();
        }
    };

    return (
        <div
            className={"cell " + classNames}
            key={x + y}
            onClick={onClickHandler}
        >
            <p>{name}</p>
        </div>
    );
};

const mapDispatchToProps = {
    move,
    changeTurn,
};

/**
 * mapStateToProps - represents FC which leads redux state value to props of react component
 *
 * @param {state} state - redux state
 * @return {object}
 */
const mapStateToProps = (state) => {
    return {
        turn: state.turnReducer,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
