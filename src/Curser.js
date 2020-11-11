import React from 'react'

export default function Curser({x, y, showMouse, overContainer}) {
    const coordinations = {
        top: `${y-50}px`,
        left: `${x-50}px`,
    }

    const mouseOnWindow = showMouse ? "show-curser" : "hide-curser";
    const mouseOverContainer = overContainer ? "over-container" : ""


    return (
        <div className={`cursor-component`} style={coordinations}>
            <div className={`curser-el-1 ${mouseOnWindow} ${mouseOverContainer}`}></div>
        </div>
    )
}
