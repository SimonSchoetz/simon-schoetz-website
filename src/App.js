import React from 'react';
import './App.scss';
import {HashRouter, Switch, Route, NavLink} from "react-router-dom";

import Landing from './Landing';
import WebDev from "./WebDev";
import Producer from "./Producer";
import SoundEngineer from "./SoundEngineer";
import Error404 from './Error404';

function App() {
  return (
    <HashRouter > 
      <div className="App">
        <div className="component-container">
            <header>
          <nav>
            <NavLink activeClassName="active-nav" className ="nav-link"  exact={true} to="/"><h1> SIMON SCHÖTZ</h1></NavLink> 
            <div className="main-nav">
            <NavLink activeClassName="active-nav" className ="nav-link" to="/webdev">Web Developer</NavLink>
            <NavLink activeClassName="active-nav" className ="nav-link" to="/bustedfingerz">Busted Fingerz</NavLink>
            <NavLink activeClassName="active-nav" className ="nav-link" to="/soundengineer">Sound Engineer</NavLink>
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
  );
}

export default App;
