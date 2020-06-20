// REACT
import React, { useEffect } from "react";

// INTERFACES
import { IState, IGame } from "../typescript/interfaces";

// REDUX
import { connect } from "react-redux";

// STORE

// ACTIONS
import { extendField } from "../redux/actions/creators";

// COMPONENTS
import Cell from "../cell/Cell";

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
const Game = (props: IGame) => {
    const { matrix, extendField } = props;

    /**
     * UseEffect is watching for changing scroll
     */
    useEffect(() => {
        /**
         * HandleResize is waiting for user scrolls to the bottom and invokes matrix extend action
         */
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
    });

    return (
        <div
            id="game"
            className="game game-appearance"
            style={{
                gridTemplateColumns: `repeat(${matrix[0].length}, 100px)`,
                gridTemplateRows: `repeat(${matrix.length}, 100px)`,
            }}
        >
            {matrix.map((a, aIndex) =>
                a.map((b, bIndex) => {
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
    );
};

export default connect(({ matrix }: IState) => ({ matrix }), { extendField })(
    Game
);
