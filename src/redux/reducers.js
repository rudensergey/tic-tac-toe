import { MAKE_A_MOVE, SET_SUCCESS_VALUE } from "./actions/types";
import { act } from "react-dom/test-utils";

/**
 * Create matrix - creates new matrix based on the input
 *
 * @param {number} h - pepresents height of the matrix
 * @param {number} w - represent width of the matrix
 * @return {Array}
 */
const createMatrix = (h, w) =>
    new Array(h).fill().map(() => new Array(w).fill([""]));

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
            return Object.assign({}, state, { successValue: action.number });
        default:
            return state;
    }
}
