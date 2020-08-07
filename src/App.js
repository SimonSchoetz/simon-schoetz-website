import React, {useState, useRef, useEffect} from 'react';
import './App.scss';
import {HashRouter, Switch, Route, NavLink } from "react-router-dom";
import { Context } from './Context';

import Landing from './Landing';
import WebDev from "./WebDev";
import Producer from "./Producer";
import SoundEngineer from "./SoundEngineer";
import Error404 from './Error404';
import IconSE from './IconSE';
import IconWebDev from './IconWebDev';
import IconProducer from './IconProducer';



function App() {
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
    

  return (

    <Context.Provider value={{
      currentLocation, setCurrentLocation
    }}>

      <HashRouter > 
        <div className="App">
          <div className="component-container">
            <header>
              <nav>
                <h1><NavLink activeClassName="active-nav" className="home-link" exact={true} to="/"> Simon Schötz</NavLink></h1> 
                <div className={`main-nav ${currentLocation !== "/" ? "shrinked-main-nav" : ""}`} onMouseOver={()=> mouseOver()}>
                <NavLink onMouseEnter={()=> setHoverBF(true)} onMouseLeave={()=> setHoverBF(false)} activeClassName="active-nav" className={`nav-link ${shrink} `} to="/bustedfingerz">
                Music Producer
                { hoverBF && currentLocation === "/" ? <IconProducer /> : null }

                </NavLink>
                <NavLink ref={refSoundEngineer} activeClassName="active-nav" className={`nav-link ${shrink} ${currentLocation === "/webdev" ? "right-nav" : ""}`} to="/soundengineer">
                Sound Engineer
                { currentLocation === "/" ? <IconSE navWidth={navWidth}/> : null }
                </NavLink>
                <NavLink activeClassName="active-nav" className={`nav-link ${shrink} `} to="/webdev">Web Developer
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
