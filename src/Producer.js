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
                <img src={require("./img/busted_fingerz_live.png")} alt="Busted Fingerz playing live in black and white" />
                <img src={require("./img/busted_fingerz_live.png")} alt="Busted Fingerz playing live in black and white" />
            </div>
        </DocumentTitle>
    )
}
