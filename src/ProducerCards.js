import React, { useState, useContext, Fragment } from 'react';
import { Context } from './Context';

export default function ProducerCards({el, i}) {    
    const {setMouseOverElement} = useContext(Context)

    const [imgOffset, setImgOffset] = useState({top: 0, left: 0})

    const handleCoordinates = (input) => {
        setImgOffset({top: -12.5+"%", left: -12.5+"%"})
        const rect = input.target.getBoundingClientRect();
        const positionY  = input.clientY - rect.top;
        const positionX = input.clientX - rect.left;
        const offsetY = (25/ 100)  * (100 / rect.height * positionY) //in Prozent
        const offsetX = (25/ 100)  * (100 / rect.height * positionX) //in Prozent
        if (input.target.tagName === "IMG") {
             setImgOffset({top: (-25+offsetY)+"%", left: (-25+offsetX)+"%"})
        }
        
       
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
