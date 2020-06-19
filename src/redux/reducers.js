import { MAKE_A_MOVE, SET_SUCCESS_VALUE } from "./actions/types";
import { act } from "react-dom/test-utils";

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

const initialState = {
    successValue: 3,
    matrix: createMatrix(7, 10),
};

/**
 * ticApp - pepresents reducer of this application
 *
 * @param {object} state - Redux state container
 * @param {object} action - action creator
 * @return {object}
 */
function ticApp(state = initialState, action) {
    switch (action.type) {
        case SET_SUCCESS_VALUE:
            return { ...state, ...{ successValue: action.number } };
        case MAKE_A_MOVE:
            return { ...state, ...{ matrix: matrixReducer(state, action) } };
        default:
            return state;
    }
}

/**
 *
 * @param {object} state - Redux state container
 * @param {object} action - action creator
 * @return {object}
 */
function matrixReducer(state, action) {
    const [x, y] = action.coords.split(",");
    const newMatrix = state.matrix.slice();
    newMatrix[y][x] = true;

    return {
        ...state,
        ...{
            matrix: newMatrix,
        },
    };
}
