import React from 'react'

export default function CodeWindow() {
    return (
        <>
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
        </>
    )
}
