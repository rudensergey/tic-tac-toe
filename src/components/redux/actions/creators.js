import { MAKE_A_MOVE, SET_SUCCESS_VALUE, CHANGE_TURN } from "./types";

/**
 * move - return
 *
 * @param {coords} data - input data which includes x and y coordintates of a cell in the matrix + move turn
 * @return {actionCrea} - action creator
 */
export function move(data) {
    return {
        type: MAKE_A_MOVE,
        data,
    };
}

/**
 * setSuccessValue - set win amount of point
 *
 * P.S - I need this action for setting an amount of score to win :)
 *
 * @param {number} number - the number off cells that bring the success
 * @return {object} - action creator
 */
export function setSuccesValue(number) {
    return {
        type: SET_SUCCESS_VALUE,
        number,
    };
}

/**
 * MoveTurn - set turn for next player
 *
 * P.S - I can change this turn-order with using only React and remove this action, but if we're gonna follow the Redux guidelines -
 * we need to put all logic inside
 *
 * @param {boolean} value - current order turn
 * @return {object} - action creator
 */
export function changeTurn(value) {
    return {
        type: CHANGE_TURN,
        value,
    };
}
