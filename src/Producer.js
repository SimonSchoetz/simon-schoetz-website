import React, {useContext, useEffect} from 'react';
import DocumentTitle from 'react-document-title';
import { useLocation  } from "react-router-dom";
import { Context } from './Context';

export default function Producer() {
    const {setCurrentLocation} = useContext(Context)
    const locations = useLocation();
    useEffect(() => {
        setCurrentLocation(locations.pathname)
    }, [setCurrentLocation])

    return (
        <DocumentTitle title ="Busted Fingerz">
            <div className="producer">
                <h2>Busted Fingerz</h2>
            </div>
        </DocumentTitle>
    )
}
