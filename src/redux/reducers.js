import { combineReducers } from "redux";
import { MAKE_A_MOVE, SET_SUCCESS_VALUE } from "./actions/types";

/**
 * Create matrix - creates new matrix based on the input
 *
 * @param {number} h - pepresents height of the matrix
 * @param {number} w - represent width of the matrix
 * @return {Array}
 */
const createMatrix = (h, w) => {
    const arr = new Array(h).fill().map(() => new Array(w).fill([""]));
    arr[0][0] = true;
    return arr;
};

/**
 * ticApp - pepresents reducer of this application
 *
 * @param {object} state - Redux state container
 * @param {object} action - action creator
 * @return {object}
 */
function succesValueReducer(state = 3, action) {
    switch (action.type) {
        case SET_SUCCESS_VALUE:
            return { ...state, ...{ successValue: action.number } };
        default:
            return state;
    }
}

/**
 * MetrixReducer - change handler for the matrix, creates copy, edit and return new array
 *
 * @param {object} state - Redux state container
 * @param {object} action - action creator
 * @return {object}
 */
function matrixReducer(state = createMatrix(7, 10), action) {
    const [x, y] = action.coords.split(",");
    const newMatrix = state.matrix.slice();
    if (newMatrix[y][x] !== "") return state;
    newMatrix[y][x] = true;

    switch (action.type) {
        case MAKE_A_MOVE:
            return {
                ...state,
                ...{
                    matrix: newMatrix,
                },
            };
        default:
            return state;
    }
}
