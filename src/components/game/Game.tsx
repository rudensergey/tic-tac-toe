// REACT
import React, { useEffect, useState } from "react";

// INTERFACES
import { IState, IGame } from "../typescript/interfaces";

// REDUX
import { connect } from "react-redux";

// STORE

// ACTIONS
import { extendField } from "../redux/actions/creators";

// COMPONENTS
import Cell from "../cell/Cell";
import WinWindow from "../win/WinWindow";

// STYLES
import "./--default.css";

/**
 * Game represents main component with cells inside
 *
 * @param {props} props - includes:
 * @param {number} initialHeight - amount rows in this table
 * @param {number} initialWidth - amount columns in this table
 *
 * @return {HTMLElement}
 */
const Game = ({ matrix, extendField, successValue }: IGame) => {
    const [tac, setTac] = useState(false);
    const [toe, setToe] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const limit =
                document.getElementById("game")!.getBoundingClientRect()
                    .height - 400;
            const scroll =
                document.documentElement.clientHeight + window.pageYOffset;

            if (limit < scroll) extendField();
        };

        window.addEventListener("scroll", handleResize);

        return () => {
            window.removeEventListener("scroll", handleResize);
        };
    }, [window.pageYOffset]);

    return (
        <>
            {tac ? <WinWindow type={"tac"} /> : ""}
            {toe ? <WinWindow type={"toe"} /> : ""}
            <div
                id="game"
                className="game game-appearance"
                style={{
                    gridTemplateColumns: `repeat(${matrix[0].length}, 100px)`,
                    gridTemplateRows: `1fr repeat(${matrix.length}, 100px)`,
                }}
            >
                {" "}
                <h1 className="game__text">
                    Количество клеток в ряд, для победы: {successValue}
                </h1>
                {matrix.map((a, aIndex) =>
                    a.map((b, bIndex) => {
                        if (!tac && !toe) {
                            if (b === "success-tac")
                                setTimeout(() => setTac(true), 200);
                            if (b === "success-toe")
                                setTimeout(() => setToe(true), 200);
                        }

                        return (
                            <Cell
                                coords={{ aIndex, bIndex }}
                                key={aIndex + bIndex}
                                status={b}
                            />
                        );
                    })
                )}
            </div>
        </>
    );
};

export default connect(
    ({ matrix, successValue }: IState) => ({ matrix, successValue }),
    { extendField }
)(Game);
