import React from 'react'

export default function Curser({x, y, showMouse}) {
    const coordinations = {
        top: `${y-50}px`,
        left: `${x-50}px`,
    }
    return (
        <div className={`cursor-component ${showMouse ? "show-curser" : "hide-curser"}`} style={coordinations}>
            
        </div>
    )
}
