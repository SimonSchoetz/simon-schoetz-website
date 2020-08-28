import React, {useContext, useEffect, Fragment } from 'react';
import DocumentTitle from 'react-document-title';
import { useLocation  } from "react-router-dom";
import { Context } from './Context';

export default function WebDev() {
    const {setCurrentLocation} = useContext(Context)
    const locations = useLocation();

    useEffect(() => {
        setCurrentLocation(locations.pathname)
    }, [setCurrentLocation, locations.pathname])

    const skillSet = [
        {id: 0, name: "CSS3", img: "css3-logo.png", level: 4},
        {id: 1, name: "Express.js", img: "express-logo.png", level: 3},
        {id: 2, name: "GitHub", img: "github-logo.png", level: 4},
        {id: 3, name: "HTML5", img: "html5-logo.png", level: 5},
        {id: 4, name: "JavaScript", img: "js-logo.png", level: 4},
        {id: 5, name: "MongoDB", img: "mongodb-logo.png", level: 3},
        {id: 6, name: "Node.js", img: "node-logo.png", level: 3},
        {id: 7, name: "npm", img: "npm-logo.png", level: 2},
        {id: 8, name: "SASS", img: "sass-logo.png", level: 4},
        {id: 9, name: "React.js", img: "react-logo.png", level: 4},
        {id: 10, name: "Three.js", img: "threejs-logo.png", level: 1},
        {id: 11, name: "Vue.js", img: "vuejs-logo.png", level: 1},
    ]


    const renderSkillSet = () => (
        skillSet.map(el => {
            return <Fragment key={el.id}>
                <li>
                <img alt={`Logo of ${el.name}`} title={el.name} className="tech-icon" src={require("./img/"+el.img)} ></img>
                </li>
            </Fragment>

        }))
    
    return (
        <DocumentTitle title ="Web Developer">
            <div className="web-dev">
                <h2>Web Developer</h2>
                <section className="web-def-intro">
                <h2>Profile</h2>
                    <h3>Professional Experience</h3>
                    <div className="content-container" >
                        <div className="time-line">
                            <div className="code-window">
                                <code>
                                sol ~/germany/berlin (master) <br/>
                                $ life i --save MERN-Stack <br/>
                                {">"} DCI [Digital Career Institute] <br/>
                                {">"} 08/2019 - 08/2020 <br/>
                                {">"} Installing: HTML5 CSS3 JavaScript_ES6 Git, done. <br/>
                                {">"} Installing: SASS NPM React.js Node.js Express.js MongoDB, done. <br/>
                                <br/>
                                sol ~/germany/berlin (master) <br/>
                                $ find . -name job-as-web-developer <br/>
                                {">"} Start search for jobs as Web Developer in Berlin. <br/>
                                {">"} Learn new technologies (Threejs VueJS). <br/>
                                {">"} Work on portfolio. <br/>
                                {">"} In progress<span className="dot-1" >.</span><span className="dot-2" >.</span><span className="dot-3" >.</span> <br/>
                                </code>
                            </div>
                        </div>
                        <div className="technology-chart">
                            <ul>
                                {renderSkillSet()}
                            </ul>
                            

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
