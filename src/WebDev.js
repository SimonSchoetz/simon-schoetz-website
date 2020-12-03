import React, {useContext, useEffect } from 'react';
import DocumentTitle from 'react-document-title';
import { useLocation  } from "react-router-dom";
import { Context } from './Context';
import Mailto from 'react-protected-mailto'
import SkillSet from './components/SkillSet';
import PortFolio from './components/PortFolio';
import CodeWindow from './components/CodeWindow';

export default function WebDev() {
    const {
        setCurrentLocation, 
        setMouseOverContainer, 
        setMouseOverElement
    } = useContext(Context)
    const locations = useLocation();

    useEffect(() => {
        setCurrentLocation(locations.pathname)
    }, [setCurrentLocation, locations.pathname])


    ////////////////////////////
    // Event handling functions
    ////////////////////////////
    const handleMouseOverContainer = (input) => {
        if (input.type === "mouseenter") {setMouseOverContainer(true)}
        else setMouseOverContainer(false)
    }
    const handleMouseOverElement = (input) => {
        if (input.type === "mouseenter") {setMouseOverElement(true)}
        else setMouseOverElement(false)
    }
    

    
    return (
        <DocumentTitle title ="Web Developer">
            <div className="web-dev">
                <section className="web-dev-intro" onMouseEnter={handleMouseOverContainer} onMouseLeave={handleMouseOverContainer}>
                    <h2>PROFILE</h2>
                    <h3>PROFESSIONAL EXPERIENCE</h3>
                    <div className="content-container" >
                        <div className="time-line">
                            <CodeWindow />
                        </div>
                        <div className="technology-chart">
                            <SkillSet />
                        </div>
                    </div>
                    <div class="contact">
                        <h3>CONTACT</h3>
                        <ul className="contact-list">
                            <li>
                                Email: <Mailto email="simonsch.tz@gmail.com" onMouseEnter={handleMouseOverElement} onMouseLeave={handleMouseOverElement}/>
                            </li>
                            <li>
                                linkedIn: <a href="https://www.linkedin.com/in/simon-sch%C3%B6tz-454010166/" onMouseEnter={handleMouseOverElement} onMouseLeave={handleMouseOverElement}>Simon Schötz</a>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="web-dev-ref" onMouseEnter={handleMouseOverContainer} onMouseLeave={handleMouseOverContainer}>
                    <h2>REFERENCES</h2>
                    <PortFolio />
                </section>
                
            </div>
        </DocumentTitle>
    )
}
