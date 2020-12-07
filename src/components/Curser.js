import React from 'react'

export default function Curser({x, y, showMouse, overContainer, overElement}) {
    const coordinations = {
        top: `${y-50}px`,
        left: `${x-50}px`,
    }

    const mouseOnWindow = showMouse ? "show-cursor" : "hide-cursor";
    const mouseOverContainer = overContainer ? "over-container" : "";
    const mouseOverElement = overElement ? "over-element" : "";


    return (
        <div className={`cursor-component`} style={coordinations}>
            <div className={`cursor-el-1 ${mouseOnWindow} ${mouseOverElement} ${mouseOverContainer} `}></div>
        </div>
    )
}
