import React, {useContext, useEffect} from 'react';
import DocumentTitle from 'react-document-title';
import { useLocation  } from "react-router-dom";
import { Context } from './Context';

export default function Landing() {
    const {setCurrentLocation} = useContext(Context)
    const locations = useLocation();
    useEffect(() => {
        setCurrentLocation(locations.pathname)
    }, [setCurrentLocation, locations.pathname])
    return (
        <DocumentTitle title ="Simon Schötz">
                <div className="landing"></div>
        </DocumentTitle>
    )
}
