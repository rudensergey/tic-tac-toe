import { MAKE_A_MOVE, SET_SUCCESS_VALUE, EXTEND_FIELD } from "./types";

/**
 * move - return
 *
 * @param {Array} coords - input data which includes x and y coordintates of a cell
 * @return {actionCrea} - action creator
 */
export function move(coords: number[]) {
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
export function setSuccesValue(number:number) {
    return {
        type: SET_SUCCESS_VALUE,
        number,
    };
}

/**
 * Extend field action
 *
 * @return {object} - fires increace field reducer
 */
export function extendField() {
    return {
        type: EXTEND_FIELD,
    };
}
