import React from 'react';
import './App.scss';
import {HashRouter, Switch, Route} from "react-router-dom";

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
