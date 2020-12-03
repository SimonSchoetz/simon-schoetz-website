import React, { Fragment } from 'react'

export default function SkillSet() {
    ////////////////////////////
    //     DB Skill Set
    ////////////////////////////
    const skillSet = [
        {id: 0, name: "CSS3", img: "css3-logo.png"},
        {id: 1, name: "Express.js", img: "express-logo.png"},
        {id: 2, name: "GitHub", img: "github-logo.png"},
        {id: 3, name: "HTML5", img: "html5-logo.png"},
        {id: 4, name: "JavaScript", img: "js-logo.png"},
        {id: 5, name: "MongoDB", img: "mongodb-logo.png"},
        {id: 6, name: "Node.js", img: "node-logo.png"},
        {id: 7, name: "npm", img: "npm-logo.png"},
        {id: 8, name: "SASS", img: "sass-logo.png"},
        {id: 9, name: "React.js", img: "react-logo.png"},
        // {id: 10, name: "Three.js", img: "threejs-logo.png"},
        {id: 11, name: "Vue.js", img: "vuejs-logo.png"},
    ]
    ////////////////////////////
    // Component rendering
    ////////////////////////////
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

    return (
        <>
            <ul>
                {renderSkillSet()}
            </ul>
        </>
    )
}
