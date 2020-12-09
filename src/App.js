import React, {useState, useRef, useEffect} from 'react';
import {HashRouter, Switch, Route, NavLink } from "react-router-dom";
import { Context } from './Context';
import { BrowserView } from "react-device-detect";

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
import IconSE from './components/nav-components/IconSE';
import IconWebDev from './components/nav-components/IconWebDev';
import IconProducer from './components/nav-components/IconProducer';

// import Noise from "./noise/Noisy";
import Curser from './components/Curser';
import ToTopButton from './components/ToTopButton';



function App() {
    const [currentLocation, setCurrentLocation] = useState("/");
    const shrink = currentLocation !== "/" ? "shrank-nav" : "";
    const refSoundEngineer= useRef(0)

    const [navWidth, setNavWidth] = useState(0);
    const [hoverBF ,setHoverBF] = useState(false);
    const [mouseOnWindow, setMouseOnWindow] = useState(true);
    const [mouseOverContainer, setMouseOverContainer] = useState(true)
    const [mouseOverElement, setMouseOverElement] = useState(false)

    useEffect(() => {
      setNavWidth(refSoundEngineer.current.clientWidth)
    }, [refSoundEngineer.current.clientWidth])

    const mouseOver = () => {
      setNavWidth(refSoundEngineer.current.clientWidth)
    }
    const handleMouseEnter = input => {
         if (input.type === "mouseenter") {setMouseOnWindow(true)}
         else setMouseOnWindow(false)
    }

    ////////////////
    //mouse tracker
    ////////////////
    const [x, setX] = useState(0);
    const [y, setY] = useState(0); 
    const handleMove = e => {
      setX(e.pageX);
      setY(e.pageY);
    } 

  return (

    <Context.Provider value={{
      currentLocation, setCurrentLocation,
      mouseOverContainer, setMouseOverContainer,
      mouseOverElement, setMouseOverElement
    }}>
    

      <HashRouter> 
        <ScrollMemory />
        <div className={`App`} onMouseMove={handleMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseEnter}>

          <ToTopButton setMouseOverElement={setMouseOverElement}/>

          <BrowserView>
            <Curser x={x} y={y} 
            showMouse={mouseOnWindow} 
            overContainer={mouseOverContainer}
            overElement={mouseOverElement}  
            />
          </BrowserView>
          
          <div className="noise">
          {/* <Noise color={"rgb(39, 40, 40)"}/> */}
            {/* {currentLocation === "/" || currentLocation === "/webdev" ? <div className="noise-overlay bright-grey"/> : null}
            {currentLocation === "/bustedfingerz" ? <div className="noise-overlay dark-grey"/> : null} */}
            {/* {currentLocation === "/soundengineer" ? <div className="noise-overlay dark-blue"/> : null} */}
          </div>
        
          <div className="component-container">
            <header>
              <nav>
                <h1>
                  <NavLink 
                    to="/"
                    title="Home" 
                    aria-label="home" 
                    activeClassName="active-nav" 
                    className={`home-link ${shrink}`} 
                    alt="home" 
                    exact={true} 
                    onMouseEnter={()=> setMouseOverElement(true)} 
                    onMouseLeave={()=> setMouseOverElement(false)}
                  > 
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
                  </NavLink>
                </h1> 
                <div>
                  <p className={`${currentLocation === "/" ? "introduction-on" : "introduction-off"}`}>
                  Hello and welcome to my website. I'm a bass music producer and dj, a sound engineer, and a web developer based in Berlin, Germany. Please click on one of the cards below to read more. 
                  </p>
                </div>
                <div className={`main-nav ${currentLocation !== "/" ? "shrank-main-nav" : ""}`} onMouseOver={()=> mouseOver()}>
                  <NavLink 
                    to="/bustedfingerz"
                    title="Busted Fingerz" 
                    aria-label="producer, bustedfingerz" 
                    activeClassName="active-nav" 
                    className={`nav-link ${shrink} `} 
                    onMouseEnter={()=> {
                      setHoverBF(true);
                      setMouseOverElement(true)
                    }} 
                    onMouseLeave={()=> {
                      setHoverBF(false);
                      setMouseOverElement(false)
                    }}
                  >
                    { currentLocation === "/bustedfingerz" ? "BUSTED FINGERZ" : "Music Producer" }
                    { hoverBF && currentLocation === "/" ? <IconProducer /> : null }
                  </NavLink>

                  <NavLink
                    to="/soundengineer"
                    title="Sound Engineer" 
                    aria-label="sound engineer" 
                    ref={refSoundEngineer} 
                    activeClassName="active-nav" 
                    className={`nav-link ${shrink} ${currentLocation === "/webdev" ? "right-nav" : ""}`}
                    onMouseEnter={()=> setMouseOverElement(true)} 
                    onMouseLeave={()=> setMouseOverElement(false)}
                  >
                    { currentLocation === "/soundengineer" ? "SOUND ENGINEER" : "Sound Engineer" }
                    { currentLocation === "/" ? <IconSE navWidth={navWidth}/> : null }
                  </NavLink>

                  <NavLink
                    to="/webdev"
                    title="Web Developer" 
                    aria-label="web developer" 
                    activeClassName="active-nav" 
                    className={`nav-link ${shrink} `} 
                    onMouseEnter={()=> setMouseOverElement(true)} 
                    onMouseLeave={()=> setMouseOverElement(false)}
                  >
                    { currentLocation === "/webdev" ? "WEB DEVELOPER" : "Web Developer" }
                    { currentLocation === "/" ? <IconWebDev /> : null }
                  </NavLink>
                </div>
              </nav>
            </header>
            <Switch>
                <Route exact path="/" render={() => <Landing setMouseOverContainer={setMouseOverContainer} />} />
                <Route exact path="/webdev" render={() => <WebDev setMouseOverContainer={setMouseOverContainer} /> } />
                <Route exact path="/bustedfingerz" render={() => <Producer setMouseOverContainer={setMouseOverContainer} /> } />
                <Route exact path="/soundengineer" render={() => <SoundEngineer setMouseOverContainer={setMouseOverContainer} /> } />
                <Route component={Error404} />
            </Switch>
          </div>
        </div>
      </HashRouter>
    </Context.Provider>
  );
}

export default App;
