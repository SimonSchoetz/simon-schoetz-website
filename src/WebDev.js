import React, {useContext, useEffect } from 'react';
import DocumentTitle from 'react-document-title';
import { useLocation  } from "react-router-dom";
import { Context } from './Context';
import Mailto from 'react-protected-mailto'
import SkillSet from './components/SkillSet';

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
    // DB Portfolio
    ////////////////////////////

    const portfolio = [
        {
            id: 0, 
            name: "Etikett Radio", 
            description: "etikett~radio is a radio station at Catalyst Institute (former dBs Music School Berlin) where students have the chance to gain their first experience as radio hosts. It has a database where admins can create accounts for students. Students can then work on their host profile and list their shows in the archive section, post to the blog section and so on. Moreover, the website has its own chat room where every user of the website can join and interact with each other.", 
            webLink: {
                link: "https://www.etikett-radio.com/",
                alt: "www.etikett-radio.com"
            },
            gitHub: "https://github.com/SimonSchoetz/etikett-radio",
            frontend: "React.js, SCSS",
            backend: "MongoDB, Mongoose, Express.js, JWT",
            other: "Sockit,io, Three.js"
        },
        {
            id: 1, 
            name: "Merchandice Online Shop", 
            description: "This website is an online shop with fictitious products. It exists solely for the purpose of being my personal playground for learning and experimenting with VueJS. The design focuses on mobile devices but functionalities also consider desktop users who interact with the page via mouse. You can change products by hovering/pressing the color discs, add them to the cart if the chosen product is in stock and check out as soon as you filled out the form with your contact details.", 
            webLink: {
                link: "https://vuejs-merch-store.netlify.app/",
                alt: "Deployed on Netlify"
            },
            gitHub: "https://github.com/SimonSchoetz/vuejs-merch-store",
            frontend: "Vue.js, SCSS",
            backend: "",
            other: ""
        },
        {
            id: 2, 
            name: "Simon Schötz", 
            description: "The current website you are browsing is built with React.js and is my playground to try all sorts of animation which I build on my own with SCSS and interesting npm packages I find during my researches. Where possible, I stored data in a json-like structure to display it on the website like dynamic data coming from an actual server. Examples are the cards which are showcasing my music on other parts of this website or this portfolio.", 
            webLink: {
                link: "",
                alt: ""
            },
            gitHub: "https://github.com/SimonSchoetz/simon-schoetz-website",
            frontend: "React.js, SCSS",
            backend: "",
            other: ""
        }
                
    ]



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
                            <div className="code-window">
                                <code>
                                sol ~/germany/berlin (master) <br/>
                                $ life i --save MERN-Stack <br/>
                                {">"} DCI [Digital Career Institute] <br/>
                                {">"} 08/2019 - 08/2020 <br/>
                                {">"} Installing: HTML5 CSS3 JavaScript_ES6 Git, done. <br/>
                                {">"} Installing: SCSS NPM React.js Node.js Express.js MongoDB, done. <br/>
                                <br/>
                                sol ~/germany/berlin (master) <br/>
                                $ find . -name job-as-web-developer <br/>
                                {">"} Start search for jobs as Web Developer in Berlin. <br/>
                                {">"} Learn new technology (VueJS). <br/>
                                {">"} Work on portfolio. <br/>
                                {">"} Installing: VueJS, done. <br/>
                                {">"} Installing: WordPress PHP <br/>
                                {">"} In progress<span className="dot-1" >.</span><span className="dot-2" >.</span><span className="dot-3" >.</span> <br/>
                                </code>
                            </div>
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
                    <div>
                        <h3>etikett~radio</h3>
                        <div className="ref-container etikett-radio">
                            <div className="ref-description">
                                <h3>DESCRIPTION</h3>
                                <p>
                                    etikett~radio is a radio station at Catalyst Institute (former dBs Music School Berlin) where students have the chance to gain their first experience as radio hosts. It has a database where admins can create accounts for students. Students can then work on their host profile and list their shows in the archive section, post to the blog section and so on. Moreover, the website has its own chat room where every user of the website can join and interact with each other.
                                </p>
                                <h3>LINKS</h3>
                                <ul>
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" href={`https://www.etikett-radio.com/`} onMouseEnter={handleMouseOverElement} onMouseLeave={handleMouseOverElement}>www.etikett-radio.com</a>
                                    </li>
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" href={`https://github.com/SimonSchoetz/etikett-radio`} onMouseEnter={handleMouseOverElement} onMouseLeave={handleMouseOverElement}>GitHub Repo</a>
                                    </li>
                                </ul>
                                <h3>MAIN TECHNOLOGIES</h3>
                                <ul>
                                    <li>Frontend: React.js, SCSS</li>
                                    <li>Backend: MongoDB, Mongoose, Express.js, JWT</li>
                                    <li>Other: Sockit.io, Three.js</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>MERCHANDISE ONLINE SHOP</h3>
                        <div className="ref-container merch-store">
                            <div className="ref-description">
                                <h3>DESCRIPTION</h3>
                                <p>
                                    This website is an online shop with fictitious products. It exists solely for the purpose of being my personal playground for learning and experimenting with VueJS. The design focuses on mobile devices but functionalities also consider desktop users who interact with the page via mouse. You can change products by hovering/pressing the color discs, add them to the cart if the chosen product is in stock and check out as soon as you filled out the form with your contact details.
                                </p>
                                <h3>LINKS</h3>
                                <ul>
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" href={`https://vuejs-merch-store.netlify.app/`} onMouseEnter={handleMouseOverElement} onMouseLeave={handleMouseOverElement}>Deployed on Netlify</a>
                                    </li>
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" href={`https://github.com/SimonSchoetz/vuejs-merch-store`} onMouseEnter={handleMouseOverElement} onMouseLeave={handleMouseOverElement}>GitHub Repo</a>
                                    </li>
                                </ul>
                                <h3>MAIN TECHNOLOGIES</h3>
                                <ul>
                                <li>Frontend: Vue.js, SCSS</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>www.simonschoetz.de</h3>
                        <div className="ref-container simonschoetz-de">
                            <div className="ref-description">
                                <h3>DESCRIPTION</h3>
                                <p>
                                    The current website you are browsing is built with React.js and is my playground to try all sorts of animation which I build on my own with SCSS.
                                </p>
                                <h3>LINKS</h3>
                                <ul>
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" href={`https://github.com/SimonSchoetz/simon-schoetz-website`} onMouseEnter={handleMouseOverElement} onMouseLeave={handleMouseOverElement}>GitHub Repo</a>
                                    </li>
                                </ul>
                                <h3>MAIN TECHNOLOGIES</h3>
                                <ul>
                                <li>Frontend: React.js, SCSS</li>
                                <li>Other: Three.js</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>
        </DocumentTitle>
    )
}
