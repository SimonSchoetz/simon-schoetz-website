import React, {useState, useRef, useEffect} from 'react';
import {HashRouter, Switch, Route, NavLink } from "react-router-dom";
import { Context } from './Context';
///////////////////////////////
//Animate elements in on scroll
///////////////////////////////
import AOS from 'aos';
import 'aos/dist/aos.css';

///////////////////////////////
//Scroll to top
///////////////////////////////
import ScrollMemory from 'react-router-scroll-memory';

///////////////////////////////
//Components
///////////////////////////////
import './App.scss';
import Landing from './Landing';
import WebDev from "./WebDev";
import Producer from "./Producer";
import SoundEngineer from "./SoundEngineer";
import Error404 from './Error404';
import IconSE from './IconSE';
import IconWebDev from './IconWebDev';
import IconProducer from './IconProducer';

import Noise from "./noise/Noisy";
import Curser from './Curser';



function App() {
    AOS.init()
    const [currentLocation, setCurrentLocation] = useState("/");
    const shrink = currentLocation !== "/" ? "shrinked-nav" : "";
    const refSoundEngineer= useRef(0)

    const [navWidth, setNavWidth] = useState(0);
    const [hoverBF ,setHoverBF] = useState(false);

    useEffect(() => {
      setNavWidth(refSoundEngineer.current.clientWidth)
    }, [refSoundEngineer.current.clientWidth])

    const mouseOver = () => {
      setNavWidth(refSoundEngineer.current.clientWidth)
    }

    ////////////////
    //mouse tracker
    ////////////////
    let [x, setX] = useState(0);
    let [y, setY] = useState(0); 
    const handleMove = e => {
      setX(e.pageX);
      setY(e.pageY);
    } 
  return (

    <Context.Provider value={{
      currentLocation, setCurrentLocation
    }}>

      <HashRouter> 
        <ScrollMemory />
        <div className={`App`}  onMouseMove={handleMove}>

          <Curser x={x} y={y} />

          <div className="noise">
          <Noise color={"rgb(209, 213, 214)"}/>
            {currentLocation === "/" || currentLocation === "/webdev" ? <div className="noise-overlay bright-grey"/> : null}
            {currentLocation === "/bustedfingerz" ? <div className="noise-overlay dark-grey"/> : null}
            {currentLocation === "/soundengineer" ? <div className="noise-overlay dark-blue"/> : null}
          </div>
        
          <div className="component-container">
            <header>
              <nav>
                <h1><NavLink title="Home" aria-label="home" alt="home" activeClassName="active-nav" className={`home-link ${shrink} `} exact={true} to="/"> 
                <span className="simon-s">S</span>
                <span className="simon-i">i</span>
                <span className="simon-m">m</span>
                <span className="simon-o">o</span>
                <span className="simon-n">n</span> <span className="schoetz-s">S</span>
                <span className="schoetz-c">c</span>
                <span className="schoetz-h">h</span>
                <span className="schoetz-ö">ö</span>
                <span className="schoetz-t">t</span>
                <span className="schoetz-z">z</span>
                </NavLink></h1> 
                <div className={`${currentLocation === "/" ? "introduction-on" : "introduction-off"}`}>
                  <p>
                  Hello and welcome to my website. I'm a bass music producer and dj, a sound engineer, and a web developer based in Berlin, Germany. Please click on one of the cards below to read more. 
                  </p>
                </div>
                <div className={`main-nav ${currentLocation !== "/" ? "shrinked-main-nav" : ""}`} onMouseOver={()=> mouseOver()}>
                <NavLink title="Busted Fingerz" aria-label="producer, bustedfingerz" onMouseEnter={()=> setHoverBF(true)} onMouseLeave={()=> setHoverBF(false)} activeClassName="active-nav" className={`nav-link ${shrink} `} to="/bustedfingerz">
                { currentLocation === "/bustedfingerz" ? "BUSTED FINGERZ" : "Music Producer" }
                { hoverBF && currentLocation === "/" ? <IconProducer /> : null }
                </NavLink>

                <NavLink title="Sound Engineer" aria-label="sound engineer" ref={refSoundEngineer} activeClassName="active-nav" className={`nav-link ${shrink} ${currentLocation === "/webdev" ? "right-nav" : ""}`} to="/soundengineer">
                { currentLocation === "/soundengineer" ? "SOUND ENGINEER" : "Sound Engineer" }
                { currentLocation === "/" ? <IconSE navWidth={navWidth}/> : null }
                </NavLink>

                <NavLink title="Web Developer" aria-label="web developer" activeClassName="active-nav" className={`nav-link ${shrink} `} to="/webdev">
                { currentLocation === "/webdev" ? "WEB DEVELOPER" : "Web Developer" }
                { currentLocation === "/" ? <IconWebDev /> : null }
                </NavLink>
                </div>
              </nav>
            </header>
            <Switch>
                <Route exact path="/" render={() => <Landing/>} />
                <Route exact path="/webdev" render={() => <WebDev /> } />
                <Route exact path="/bustedfingerz" render={() => <Producer /> } />
                <Route exact path="/soundengineer" render={() => <SoundEngineer /> } />
                <Route component={Error404} />
            </Switch>
          </div>
        </div>
      </HashRouter>
    </Context.Provider>
  );
}

export default App;
