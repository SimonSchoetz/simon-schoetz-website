import React, {useContext, useEffect} from 'react';
import DocumentTitle from 'react-document-title';
import { useLocation  } from "react-router-dom";
import { Context } from './Context';


export default function SoundEngineer() {
    const {setCurrentLocation} = useContext(Context)
    const locations = useLocation();
    useEffect(() => {
        setCurrentLocation(locations.pathname)
    }, [setCurrentLocation])
    
    return (
        <DocumentTitle title ="Sound Engineer">
            <div className="sound-engineer">
                <h2>Sound Engineer</h2>
            </div>
        </DocumentTitle>
    )
}
