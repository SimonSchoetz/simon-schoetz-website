import React, {useContext, useEffect} from 'react';
import DocumentTitle from 'react-document-title';
import { useLocation  } from "react-router-dom";
import { Context } from './Context';

export default function Landing() {
    const {currentLocation, setCurrentLocation} = useContext(Context)
    const locations = useLocation();
    useEffect(() => {
        setCurrentLocation(locations.pathname)
    }, [setCurrentLocation])
    return (
        <DocumentTitle title ="Simon Schötz">
                <div className="landing">
                {/* <h2>Welcome to my web page!</h2>
                <p>Click on one of the cards above to get more information about me as a music producer,</p> */}
                </div>
        </DocumentTitle>
    )
}
