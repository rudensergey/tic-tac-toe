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
    matrix: TypeStatus[][];
    extendField: Function;
    successValue?: number;
}

export interface IAction {
    type: string;
    number?: number;
    coords?: any;
}

export interface IWin {
    type: "tac" | "toe";
}
