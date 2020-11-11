import React, { useState, useContext, Fragment } from 'react';
import { Context } from './Context';

export default function ProducerCards({el, i}) {    
    const {
    setMouseOverElement
} = useContext(Context)
    const [imgOffset, setImgOffset] = useState({top: 0, left: 0})
    const handleCoordinates = (input) => {
        const rect = input.target.getBoundingClientRect();
        const offsetX = input.clientX - rect.left;
        const offsetY  = input.clientY - rect.top;
        setImgOffset({top: offsetY, left: offsetY})
        console.log(input.type)
        if (input.type === "mouseleave") {
            setImgOffset({top: 0, left: 0})
        }
    }
    const handleMouseOverElement = (input) => {
        if (input.type === "mouseenter") {setMouseOverElement(true)}
        else setMouseOverElement(false)
    }
    return (
        <Fragment key={i}>
            <li title={`${el.name}`} key={el.id} className="ref-card" onMouseMove={handleCoordinates} onMouseLeave={handleCoordinates}>
                <div className="content-container">
                    <a target="_blank" rel="noopener noreferrer" href={el.link} onMouseEnter={handleMouseOverElement} onMouseLeave={handleMouseOverElement}>
                        <div className="blur-layer" />
                        <img style={imgOffset} alt={`Cover Artwork of ${el.release} by ${el.name}`} src={el.artwork === "" ? "https://i1.sndcdn.com/avatars-000456674544-werm3v-t500x500.jpg" : el.artwork} />
                        <div>{el.name}</div>
                        <div>{el.release === "" ? "Single" : el.release}</div>
                        <div>{el.label === "" ? "Self Release" : el.label}</div>
                    </a>
                </div>
            </li>
        </Fragment>
    )
}
