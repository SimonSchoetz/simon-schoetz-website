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

    const discography = [
        {id: 0, name: "OMDHA Duck Trumpet RMX", release: "Let's Cut Some Wood EP", free: true, link: "https://bustedfingerz.bandcamp.com/album/lets-cut-some-wood-ep"},
        {id: 1, name: "Bittersweet", release: "Let's Cut Some Wood EP", free: true, link: "https://bustedfingerz.bandcamp.com/album/lets-cut-some-wood-ep"},
        {id: 2, name: "OMDHA Duck Trumpet RMX", release: "Let's Cut Some Wood EP", free: true, link: "https://bustedfingerz.bandcamp.com/album/lets-cut-some-wood-ep"},

    ]

    const renderDiscography = () => (
        discography.map(el => {
              return  <li key={el.id}>
                    <ul className="release">
                        <li>{el.name}</li>
                        <li>{el.release}</li>
                        <li><a target="_blank" rel="noopener noreferrer" href={el.link}>{el.free ? "Free DL" : "Buy Here"}</a></li>
                    </ul>
                </li>

        }))
 

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
                <ul>
                    {renderDiscography()}
                </ul>
                

                </section>
            </div>
        </DocumentTitle>
    )
}
