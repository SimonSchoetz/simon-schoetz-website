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
                {/* Placeholder Landing Page so we don' t land on Error404 */}
                </div>
        </DocumentTitle>
    )
}
