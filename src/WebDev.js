import React, {useContext, useEffect, Fragment } from 'react';
import DocumentTitle from 'react-document-title';
import { useLocation  } from "react-router-dom";
import { Context } from './Context';
import Mailto from 'react-protected-mailto'

export default function WebDev() {
    const {setCurrentLocation, setMouseOverContainer} = useContext(Context)
    const locations = useLocation();

    useEffect(() => {
        setCurrentLocation(locations.pathname)
    }, [setCurrentLocation, locations.pathname])

    const skillSet = [
        {id: 3, name: "HTML5", img: "html5-logo.png"},
        {id: 4, name: "JavaScript", img: "js-logo.png"},
        {id: 0, name: "CSS3", img: "css3-logo.png"},
        {id: 8, name: "SASS", img: "sass-logo.png"},
        {id: 9, name: "React.js", img: "react-logo.png"},
        {id: 6, name: "Node.js", img: "node-logo.png"},
        {id: 1, name: "Express.js", img: "express-logo.png"},
        {id: 5, name: "MongoDB", img: "mongodb-logo.png"},
        {id: 7, name: "npm", img: "npm-logo.png"},
        {id: 2, name: "GitHub", img: "github-logo.png"},
        // {id: 10, name: "Three.js", img: "threejs-logo.png"},
        {id: 11, name: "Vue.js", img: "vuejs-logo.png"},
    ]

    const renderSkillSet = () => (
        skillSet.map(el => {
            const imgSrc = `${process.env.PUBLIC_URL}/assets/images/${el.img}`;
            return <Fragment key={el.id}>
                <li title={el.name}>
                    <div className="img-container">
                        <img alt={`Logo of ${el.name}`} className="tech-icon" src={imgSrc} />
                    </div>
                    <div className="level-container"> {el.name} </div>
                </li>
            </Fragment>
        })
    )
    const handleMouseEnter = (input) => {
        if (input.type === "mouseenter") {setMouseOverContainer(true)}
        else setMouseOverContainer(false)

    }
    
    return (
        <DocumentTitle title ="Web Developer">
            <div className="web-dev">
                <section className="web-dev-intro" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseEnter}>
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
                                {">"} Installing: SASS NPM React.js Node.js Express.js MongoDB, done. <br/>
                                <br/>
                                sol ~/germany/berlin (master) <br/>
                                $ find . -name job-as-web-developer <br/>
                                {">"} Start search for jobs as Web Developer in Berlin. <br/>
                                {">"} Learn new technology (VueJS). <br/>
                                {">"} Work on portfolio. <br/>
                                {">"} Finish VueJS online shop. <br/>
                                {">"} Work on mastering ReactJS. <br/>
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
                    <div class="contact">
                        <h3>CONTACT</h3>
                        <ul className="contact-list">
                            <li>
                                Email: <Mailto email="simonsch.tz@gmail.com"/>
                            </li>
                            <li>
                                linkedIn: <a href="https://www.linkedin.com/in/simon-sch%C3%B6tz-454010166/" >linkedin.com/in/simon-sch%C3%B6tz-454010166/</a>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="web-dev-ref" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseEnter}>
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
                                        <a target="_blank" rel="noopener noreferrer" href={`https://etikett-radio.com/`}>www.etikett-radio.com</a>
                                    </li>
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" href={`https://github.com/SimonSchoetz/etikett-radio`}>GitHub Repo</a>
                                    </li>
                                </ul>
                                <h3>MAIN TECHNOLOGIES</h3>
                                <ul>
                                <li>Frontend: React.js, SASS</li>
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
                                        <a target="_blank" rel="noopener noreferrer" href={`https://vuejs-merch-store.netlify.app/`}>Deployed on Netlify</a>
                                    </li>
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" href={`https://github.com/SimonSchoetz/vuejs-merch-store`}>GitHub Repo</a>
                                    </li>
                                </ul>
                                <h3>MAIN TECHNOLOGIES</h3>
                                <ul>
                                <li>Frontend: Vue.js, SASS</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>
        </DocumentTitle>
    )
}
