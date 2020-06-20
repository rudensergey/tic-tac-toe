import { TypeStatus } from "./types";

export interface IState {
    turnOrder: boolean;
    matrix: number[][];
    successValue: number;
}

export interface ICell {
    status: TypeStatus;
    coords: {
        aIndex: number;
        bIndex: number;
    };
    move: Function;
}

export interface IGame {
    matrix: number[][];
    extendField: Function;
}
