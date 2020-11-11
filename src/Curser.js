import React from 'react'

export default function Curser({x, y, showMouse, overContainer}) {
    const coordinations = {
        top: `${y-50}px`,
        left: `${x-50}px`,
    }

    const mouseOnWindow = showMouse ? "show-curser" : "hide-curser";


    return (
        <div className={`cursor-component ${mouseOnWindow}`} style={coordinations}>
            
        </div>
    )
}
