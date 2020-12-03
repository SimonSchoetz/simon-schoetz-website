import React, { useContext, Fragment } from 'react';
import { Context } from '../../Context';

export default function PortFolio() {
    const {
        setMouseOverElement
    } = useContext(Context);


    ////////////////////////////
    // Event handling functions
    ////////////////////////////
    const handleMouseOverElement = (input) => {
        if (input.type === "mouseenter") {setMouseOverElement(true)}
        else setMouseOverElement(false)
    }
    const portfolio = [
        {
            id: 0, 
            name: "Etikett Radio", 
            description: "etikett~radio is a radio station at Catalyst Institute (former dBs Music School Berlin) where students have the chance to gain their first experience as radio hosts. It has a database where admins can create accounts for students. Students can then work on their host profile and list their shows in the archive section, post to the blog section and so on. Moreover, the website has its own chat room where every user of the website can join and interact with each other.", 
            img: "https://i.ibb.co/G5WFDN1/etikett-home.png",
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
            img: "https://i.ibb.co/XV92dxV/merch-store-wip.png",
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
            img: "https://i.ibb.co/BcNt79D/simonschoetz-home.png",
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
    // Component rendering
    ////////////////////////////
    const renderPortfolio = () => (
        portfolio.map(el => {
            
            return <Fragment key={el.id}>

                <li className="portfolio-card">
                    <h3>{el.name}</h3>
                    <div className="ref-container" style={{backgroundImage: `url(${el.img})`}}>
                    <div className="ref-description">
                        <h3>DESCRIPTION</h3>
                        <p>{el.description}</p>
                        <h3>LINKS</h3>
                        <ul>
                            <li>
                                <a target="_blank" rel="noopener noreferrer" href={el.webLink.link} onMouseEnter={handleMouseOverElement} onMouseLeave={handleMouseOverElement}>{el.webLink.alt}</a>

                            </li>
                            <li>
                                <a target="_blank" rel="noopener noreferrer" href={el.gitHub} onMouseEnter={handleMouseOverElement} onMouseLeave={handleMouseOverElement}>GitHub Repo</a>
                            </li>
                        </ul>
                        <h3>MAIN TECHNOLOGIES</h3>
                        <ul>
                            {el.frontend ? <li>Frontend: {el.frontend}</li>: null}
                            {el.backend ? <li>Backend: {el.backend}</li>: null}
                            {el.other ? <li>Other: {el.other}</li>: null}
                        </ul>

                    </div>
                    </div>
                </li>
            </Fragment>
        })
    )

    return (
        <>
            <ul>
                {renderPortfolio()}
            </ul>
        </>
    )
}
