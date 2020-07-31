import React from 'react';
import './App.scss';
import {HashRouter, Switch, Route} from "react-router-dom";

import Landing from './Landing';
import WebDev from "./WebDev";

function App() {
  return (
    <HashRouter > 
      <div className="App">
        <div className="component-container">
          <Switch>
              <Route exact path="/" render={() => <Landing/>} />
              <Route exact path="/webdev" render={() => <WebDev /> } />
          </Switch>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
