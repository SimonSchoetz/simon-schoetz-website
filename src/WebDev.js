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
                <section className="web-def-intro">
                <h2>Profile</h2>
                    <h3>Professional Experience</h3>
                    <div className="time-line">
                    <code>08/2018 - 08/2020 DCI /</code>
                    </div>
                

                </section>
                <section className="web-def-ref">
                    <div className="etikett-radio">
                    </div>
                </section>
                
            </div>
        </DocumentTitle>
    )
}
