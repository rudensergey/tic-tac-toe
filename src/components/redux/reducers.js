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
    const arr = new Array(h).fill().map(() => new Array(w).fill(null));
    arr[0][0] = true;
    return arr;
};

/**
 * SuccessVelueReducer - changes amount of point to win
 *
 * @param {object} state - amount points
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
 * MatrixReducer - change handler for the matrix, creates copy, edit and return new array
 *
 * @param {object} state - Redux state container
 * @param {object} action - action creator
 * @return {object}
 */
function matrixReducer(state = createMatrix(7, 10), action) {
    switch (action.type) {
        case MAKE_A_MOVE:
            return changeCell();
        default:
            return state;
    }

    /**
     * changeCell - edit certain cell in matrix and return new one
     *
     * @param {number} x - position in row
     * @param {number} y - position in column
     * @return {Array} - return new matrix with a changed cell
     */
    function changeCell() {
        const [x, y] = action.coords.split(",");
        const newMatrix = state.slice();
        if (newMatrix[y][x] !== null) return state;
        newMatrix[y][x] = true;

        return newMatrix;
    }
}

export const ticApp = combineReducers({
    succesValueReducer,
    matrixReducer,
});
