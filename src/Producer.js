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
                <section className="banner-bio">
                    <article>
                        <h2>BIO</h2>
                        <p>With a remarkably quick start, Busted Fingerz was discovered and supported by dubstep legend The Widdler only a couple months after his first few steps in music production in 2016. Shortly after he was signed by Version Collective. While having grown up in the rural south of Germany, he is now an inherent part of the Berlin scene since mid 2018. His carefully crafted sounds and powerful mixes state an innovative and creative mind and with his latest release on the iconic Artikal label, he proves once more to be a bass music heavy weight.</p>
                    </article>
                </section>
                <section className="discography">
                <h2>DISCOGRAPHY</h2>
                

                </section>
            </div>
        </DocumentTitle>
    )
}
