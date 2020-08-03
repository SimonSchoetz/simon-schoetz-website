import React, {useState} from 'react';
import './App.scss';
import {HashRouter, Switch, Route, NavLink } from "react-router-dom";
import { Context } from './Context';

import Landing from './Landing';
import WebDev from "./WebDev";
import Producer from "./Producer";
import SoundEngineer from "./SoundEngineer";
import Error404 from './Error404';



function App() {
    const [currentLocation, setCurrentLocation] = useState("/");
    const shrink = currentLocation !== "/" ? "shrinked-nav" : "";
    console.log(currentLocation)
  return (

    <Context.Provider value={{
      currentLocation, setCurrentLocation
    }}>

      <HashRouter > 
        <div className="App">
          <div className="component-container">
            <header>
              <nav>
                <h1><NavLink activeClassName="active-nav" className="home-link" exact={true} to="/"> SIMON SCHÖTZ</NavLink></h1> 
                <div className={`main-nav ${currentLocation !== "/" ? "shrinked-main-nav" : ""}`}>
                <NavLink activeClassName="active-nav" className={`nav-link ${shrink} `} to="/bustedfingerz">Busted Fingerz</NavLink>
                <NavLink activeClassName="active-nav" className={`nav-link ${shrink} ${currentLocation === "/webdev" ? "right-nav" : ""}`} to="/soundengineer">Sound Engineer</NavLink>
                <NavLink activeClassName="active-nav" className={`nav-link ${shrink} `} to="/webdev">Web Developer</NavLink>
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
