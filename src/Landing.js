import React from 'react'
import DocumentTitle from 'react-document-title';
import {HashRouter, Switch, Route} from "react-router-dom";

import WebDev from "./WebDev";

export default function Landing() {
    return (
        <DocumentTitle title ="Simon Schötz">
            <HashRouter > 
                <div className="landing">
                    <header>
                        <h1>SIMON SCHÖTZ</h1>
                    </header>
                </div>
                <Switch>
                    <Route exact path="/" render={() => <Landing/>} />
                    <Route exact path="/webdev" render={() => <WebDev /> } />
                </Switch>
            </HashRouter>
        </DocumentTitle>
    )
}
