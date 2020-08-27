import React, {useContext, useEffect, useState} from 'react';
import DocumentTitle from 'react-document-title';
import { useLocation  } from "react-router-dom";
import { Context } from './Context';

export default function WebDev() {
    const {setCurrentLocation} = useContext(Context)
    const locations = useLocation();

    useEffect(() => {
        setCurrentLocation(locations.pathname)
    }, [setCurrentLocation, locations.pathname])
    
    return (
        <DocumentTitle title ="Web Developer">
            <div className="web-dev">
                <h2>Web Developer</h2>
                
            </div>
        </DocumentTitle>
    )
}
