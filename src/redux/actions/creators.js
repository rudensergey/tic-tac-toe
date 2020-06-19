import { MAKE_A_MOVE, SET_SUCCESS_VALUE } from "./types";

/**
 * move - return
 *
 * @param {coords} coords - input data which includes x and y coordintates of a cell in the matrix
 * @return {actionCrea} - action creator
 */
export function move(coords) {
    return {
        type: MAKE_A_MOVE,
        coords,
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
