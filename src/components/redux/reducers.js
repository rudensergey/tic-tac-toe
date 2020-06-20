/* eslint-disable valid-jsdoc */
/* eslint-disable require-jsdoc */
import { MAKE_A_MOVE, SET_SUCCESS_VALUE } from "./actions/types";

// FUNCTIONS ======================================================

/**
 * Create matrix - creates new matrix based on the input
 *
 * @param {number} h - pepresents height of the matrix
 * @param {number} w - represent width of the matrix
 * @return {Array}
 */
const createMatrix = (s) => {
    const arr = new Array(s).fill().map(() => new Array(s).fill(null));
    arr[0][0] = true;
    return arr;
};

/**
 * changeCell - edit certain cell in matrix, return new one and show who won
 *
 * @param {Array} coords - x and y position for the matrix
 * @param {boolean} turn
 * @param {Array} state - origin matrix
 * @return {Array} - return new matrix with a changed cell
 */
function changeCell(coords, turn, state, successVal) {
    const [y, x] = coords;
    const newMatrix = state.slice();
    if (newMatrix[y][x] !== null) return state;
    newMatrix[y][x] = turn;

    return checkWin(newMatrix, turn, y, x, successVal);
}

function checkWin(matrix, turn, y, x, val) {
    const newMatrix = matrix.slice();

    calculateDirection(y, x, 0, 1);
    calculateDirection(y, x, 1, 0);
    calculateDirection(y, x, 1, 1);
    calculateDirection(y, x, +1, -1);

    function calculateDirection(y, x, changeX, changeY) {
        let initX = x;
        let initY = y;
        let reverseX = x;
        let reverseY = y;

        let sum = 1;
        const arr = [[y, x]];

        for (let i = 0; i < val - 1; i++) {
            initX += changeX;
            initY += changeY;

            if (initX < 0 || initX > newMatrix[0][0].length - 1) break;
            if (initY < 0 || initY > newMatrix[0].length - 1) break;

            if (newMatrix[initY][initX] === turn) {
                sum++;
                arr.push([initY, initX]);

                if (sum === 3) {
                    arr.map(
                        (a) =>
                            (newMatrix[a[0]][a[1]] = turn
                                ? "success-tac"
                                : "success-toe")
                    );
                }
            } else {
                break;
            }
        }

        for (let i = 0; i < val - 1; i++) {
            reverseX -= changeX;
            reverseY -= changeY;

            if (reverseX < 0 || reverseX > newMatrix[0][0].length - 1) break;
            if (reverseY < 0 || reverseY > newMatrix[0].length - 1) break;

            if (newMatrix[reverseY][reverseX] === turn) {
                sum++;
                arr.push([reverseY, reverseX]);

                if (sum === 3) {
                    arr.map(
                        (a) =>
                            (newMatrix[a[0]][a[1]] = turn
                                ? "success-tac"
                                : "success-toe")
                    );
                }
            } else {
                break;
            }
        }
    }

    return newMatrix;
}

const initialState = {
    turnOrder: false,
    matrix: createMatrix(30),
    successValue: 3,
};

// REDUCERS ======================================================

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
                        state.matrix,
                        state.successValue
                    ),
                },
            };
        case SET_SUCCESS_VALUE:
            return { ...state, ...{ successValue: action.number } };
        default:
            return state;
    }
}
