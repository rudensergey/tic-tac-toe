import { MAKE_A_MOVE, SET_SUCCESS_VALUE, EXTEND_FIELD } from "./actions/types";

// FUNCTIONS ======================================================

/**
 * Create matrix - creates new matrix based on the input
 *
 * @param {number} s - pepresents height and width of the matrix
 * @param {boolean} init - represent including the initial value
 * @return {Array}
 */
const createMatrix = (s, init) => {
    const arr = new Array(s).fill().map(() => new Array(s).fill(null));
    if (init) arr[0][0] = true;
    return arr;
};

/**
 * changeCell - edit certain cell in matrix, return new one and show who won
 *
 * @param {Array} coords - x and y position for the matrix
 * @param {boolean} turn - current turn
 * @param {Array} state - origin matrix
 * @param {number} successVal - points needed to win
 * @return {Array} - return new matrix with a changed cell
 */
function changeCell(coords, turn, state, successVal) {
    const [y, x] = coords;
    const newMatrix = state.slice();
    if (newMatrix[y][x] !== null) return state;
    newMatrix[y][x] = turn;

    return checkWin(newMatrix, turn, y, x, successVal);
}

/**
 * CheckWin - represent checking handler for deetermitaion of winner
 *
 * @param {array} matrix - input matrix which will be returned
 * @param {boolean} turn - player turn
 * @param {number} y - initial coordinate of row
 * @param {number} x - initial coordinate of column
 * @param {number} val - scores needed to win
 *
 * @return {object} - new matrix
 */
function checkWin(matrix, turn, y, x, val) {
    const newMatrix = matrix.slice();
    const matrixHeght = newMatrix.length;

    calculateDirection(y, x, 0, 1, matrixHeght);
    calculateDirection(y, x, 1, 0, matrixHeght);
    calculateDirection(y, x, 1, 1, matrixHeght);
    calculateDirection(y, x, +1, -1, matrixHeght);

    /**
     *
     * @param {number} y - initial coordinate of row
     * @param {*} x - initial coordinate of column
     * @param {*} changeX - direction
     * @param {*} changeY - direction
     * @param {*} mHight - height of the matrix (needed to determine limit)
     */
    function calculateDirection(y, x, changeX, changeY, mHight) {
        let initX = x;
        let initY = y;
        let reverseX = x;
        let reverseY = y;

        let sum = 1;
        const arr = [[y, x]];

        for (let i = 0; i < val - 1; i++) {
            initX += changeX;
            initY += changeY;

            // console.log(newMatrix[0][0].length);
            // console.log(newMatrix[0].length);

            if (initX < 0 || initX > newMatrix[0][0].length - 1) break;
            if (initY < 0 || initY > mHight - 1) break;

            if (newMatrix[initY][initX] === turn) {
                sum++;
                arr.push([initY, initX]);

                if (sum === val) {
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

            // console.log(newMatrix[0][0].length);
            // console.log(newMatrix[0].length);

            if (reverseX < 0 || reverseX > newMatrix[0][0].length - 1) break;
            if (reverseY < 0 || reverseY > mHight - 1) break;

            if (newMatrix[reverseY][reverseX] === turn) {
                sum++;
                arr.push([reverseY, reverseX]);

                if (sum === val) {
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
export function app(state = initialState, action) {
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
