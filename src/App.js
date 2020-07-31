import React from 'react';
import './App.scss';
import {HashRouter, Switch, Route} from "react-router-dom";

import Landing from './Landing';
import WebDev from "./WebDev";
import Producer from "./Producer";
import SoundEngineer from "./SoundEngineer";

function App() {
  return (
    <HashRouter > 
      <div className="App">
        <div className="component-container">
          <Switch>
              <Route exact path="/" render={() => <Landing/>} />
              <Route exact path="/webdev" render={() => <WebDev /> } />
              <Route exact path="/bustedfingerz" render={() => <Producer /> } />
              <Route exact path="/soundengineer" render={() => <SoundEngineer /> } />
          </Switch>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
