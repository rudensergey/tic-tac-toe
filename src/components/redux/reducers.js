import { MAKE_A_MOVE, SET_SUCCESS_VALUE } from "./actions/types";

// FUNCTIONS

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
 * changeCell - edit certain cell in matrix and return new one
 *
 * @param {Array} coords - x and y position for the matrix
 * @param {boolean} turn
 * @param {Array} state - origin matrix
 * @return {Array} - return new matrix with a changed cell
 */
function changeCell(coords, turn, state) {
    const [y, x] = coords;
    const newMatrix = state.slice();
    if (newMatrix[y][x] !== null) return state;
    newMatrix[y][x] = turn;

    return newMatrix;
}

const initialState = {
    turnOrder: false,
    matrix: createMatrix(7, 10),
    successValue: 3,
};

// REDUCERS

/**
 * app - represent reduce component
 *
 * @param {object} state - redux state container
 * @param {object} action - action creator
 * @return {object}
 */
export function app(state = initialState, action) {
    switch (action.type) {
        case MAKE_A_MOVE:
            return {
                ...state,
                ...{
                    turnOrder: !state.turnOrder,
                    matrix: changeCell(
                        action.coords,
                        state.turnOrder,
                        state.matrix
                    ),
                },
            };
        case SET_SUCCESS_VALUE:
            return { ...state, ...{ successValue: action.number } };
        default:
            return state;
    }
}
