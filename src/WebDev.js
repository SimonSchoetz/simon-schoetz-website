import React, {useContext, useEffect } from 'react';
import DocumentTitle from 'react-document-title';
import { useLocation  } from "react-router-dom";
import { Context } from './Context';

export default function WebDev() {
    const {setCurrentLocation} = useContext(Context)
    const locations = useLocation();

    useEffect(() => {
        setCurrentLocation(locations.pathname)
    }, [setCurrentLocation, locations.pathname])
    
    return (
        <DocumentTitle title ="Web Developer">
            <div className="web-dev">
                <h2>Web Developer</h2>
                <section className="web-def-intro">
                <h2>Profile</h2>
                    <h3>Professional Experience</h3>
                    <div className="time-line">
                        <div className="code-window">
                            <code>
                            sol ~/germany/berlin (master) <br/>
                            $ life i --save MERN-Stack <br/>
                            {">"} DCI [Digital Career Institute] <br/>
                            {">"} 08/2019 - 08/2020 <br/>
                            Installing: HTML5 CSS3 JavaScript Git, done. <br/>
                            Installing: SASS NPM React.js Node.js Express.js MongoDB, done. <br/>
                            <br/>
                            sol ~/germany/berlin (master) <br/>
                            $ find . -name job-as-web-developer <br/>
                            {">"} Start search for jobs as Web Developer in Berlin. <br/>
                            In progress<span className="dot-1" >.</span><span className="dot-2" >.</span><span className="dot-3" >.</span> <br/>
                            </code>
                        </div>
                    </div>
                

                </section>
                <section className="web-def-ref">
                    <div className="etikett-radio">
                    </div>
                </section>
                
            </div>
        </DocumentTitle>
    )
}
