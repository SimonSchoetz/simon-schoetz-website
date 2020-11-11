import React from 'react'

export default function Curser({x, y, showMouse, overContainer, overElement}) {
    const coordinations = {
        top: `${y-50}px`,
        left: `${x-50}px`,
    }

    const mouseOnWindow = showMouse ? "show-curser" : "hide-curser";
    const mouseOverContainer = overContainer ? "over-container" : "";
    const mouseOverElement = overElement ? "over-element" : "";


    return (
        <div className={`cursor-component`} style={coordinations}>
            <div className={`curser-el-1 ${mouseOnWindow} ${mouseOverContainer} ${mouseOverElement} `}></div>
        </div>
    )
}
