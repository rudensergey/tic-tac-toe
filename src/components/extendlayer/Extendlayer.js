import React, { useState, useEffect } from "react";
import { Game } from "../library";
import "./extendlayer.css";

/**
 * ExtendLayer - represent layer which calculate the screen width, heigth and push it to the props
 * @return {Component}
 */
export const ExtendLayer = () => {
    // const [width, setWidth] = useState(window.innerWidth);
    // const [height, setHeight] = useState(window.innerHeight);

    // useEffect(() => {
    //     const HandleresizeWidth = () => {
    //         setWidth(window.innerWidth);
    //         console.log(width);
    //     };
    //     window.addEventListener("resize", HandleresizeWidth);
    //     console.log(width);
    // });

    // useEffect(() => {
    //     const HandleresizeHeight = () => {
    //         setHeight(window.innerHeight);
    //     };
    //     window.addEventListener("resize", HandleresizeHeight);
    // });

    return (
        <div className="extendlayer">
            <Game initialHeight={10} initialWidth={7} />
        </div>
    );
};
