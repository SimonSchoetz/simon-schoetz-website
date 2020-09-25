import React from 'react'

export default function Curser({x, y}) {
    const coordinations = {
        top: `${y-50}px`,
        left: `${x-50}px`,
        // transform: `translate(${x-750}px, ${y+100}px)`
    }
    return (
        <div className="cursor-component" style={coordinations}>
            
        </div>
    )
}
