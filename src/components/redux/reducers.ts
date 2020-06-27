import { MAKE_A_MOVE, SET_SUCCESS_VALUE, EXTEND_FIELD } from "./actions/types";
import { TypeStatus } from "../typescript/types";
import { IAction } from "../typescript/interfaces";

// FUNCTIONS ======================================================

/**
 * Create matrix - creates new matrix based on the input
 *
 * @param {number} size - pepresents height and width of the matrix
 * @param {boolean} init - represent including the initial value
 * @return {Array}
 */
const createMatrix = (size: number, initValue: boolean) => {
    const arr = new Array(size).fill(0).map(() => new Array(size).fill(null));
    if (initValue) arr[0][0] = true;
    return arr;
};

/**
 * changeCell - edit certain cell in matrix, return new one and show who won
 *
 * @param {Array} coords - x and y position for the matrix
 * @param {boolean} playerTurn - current turn
 * @param {Array} state - origin matrix
 * @param {number} successScore - points needed to win
 * @return {Array} - return new matrix with a changed cell
 */
function changeCell(
    coords: number[],
    playerTurn: boolean,
    state: TypeStatus[][],
    successScore: number
) {
    const [y, x] = coords;
    const newMatrix = state.slice();
    if (newMatrix[y][x] !== null) return state;
    newMatrix[y][x] = playerTurn;

    return checkWin(newMatrix, playerTurn, y, x, successScore);
}

/**
 * CheckWin - represent checking handler for deetermitaion of winner
 *
 * @param {array} matrix - input matrix which will be returned
 * @param {boolean} playerTurn - player turn
 * @param {number} y - initial coordinate of row
 * @param {number} x - initial coordinate of column
 * @param {number} successScore - scores needed to win
 *
 * @return {object} - new matrix
 */
function checkWin(
    matrix: TypeStatus[][],
    playerTurn: boolean,
    y: number,
    x: number,
    successScore: number
) {
    const newMatrix = matrix.slice();
    const matrixHeght = newMatrix.length;
    const matrixWidth = newMatrix[0].length;

    calculateDirection(0, 1);
    calculateDirection(1, 0);
    calculateDirection(1, 1);
    calculateDirection(+1, -1);

    /**
     *
     * @param {*} changeX - direction
     * @param {*} changeY - direction
     */
    function calculateDirection(changeX: number, changeY: number) {
        let initialX = x,
            initialY = y,
            reverseX = x,
            reverseY = y;

        let sum = 1;
        const successCells = [[y, x]];

        for (let i = 0; i < successScore - 1; i++) {
            initialX += changeX;
            initialY += changeY;

            if (
                initialX < 0 ||
                initialX > matrixWidth - 1 ||
                initialY < 0 ||
                initialY > matrixHeght - 1
            )
                break;

            if (newMatrix[initialY][initialX] === playerTurn) {
                sum++ && successCells.push([initialY, initialX]);
            } else {
                break;
            }
        }

        for (let i = 0; i < successScore - 1; i++) {
            reverseX -= changeX;
            reverseY -= changeY;

            if (
                reverseX < 0 ||
                reverseX > matrixWidth - 1 ||
                reverseY < 0 ||
                reverseY > matrixHeght - 1
            )
                break;

            if (newMatrix[reverseY][reverseX] === playerTurn) {
                sum++ && successCells.push([reverseY, reverseX]);
            } else {
                break;
            }
        }

        if (sum === successScore) {
            successCells.map(
                (a) =>
                    (newMatrix[a[0]][a[1]] = playerTurn
                        ? "success-tac"
                        : "success-toe")
            );
        }
    }

    return newMatrix;
}

const initialState = {
    turnOrder: false,
    matrix: createMatrix(10, true),
    successValue: 5,
};

// REDUCERS ======================================================

/**
 * app - represent reduce component
 *
 * @param {object} state - redux state container
 * @param {object} action - action creator
 * @return {object}
 */
export function app(state = initialState, action: IAction) {
    switch (action.type) {
        case MAKE_A_MOVE:
            return {
                ...state,
                turnOrder: !state.turnOrder,
                matrix: changeCell(
                    action.coords,
                    state.turnOrder,
                    state.matrix,
                    state.successValue
                ),
            };
        case SET_SUCCESS_VALUE:
            return { ...state, ...{ successValue: action.number } };
        case EXTEND_FIELD:
            return {
                ...state,
                matrix: [...state.matrix, ...createMatrix(10, false)],
            };
        default:
            return state;
    }
}
