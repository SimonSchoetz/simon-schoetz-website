import React, {useContext, useEffect, useState} from 'react';
import DocumentTitle from 'react-document-title';
import { useLocation } from "react-router-dom";
import { Context } from './Context';


export default function SoundEngineer() {
    const {setCurrentLocation} = useContext(Context);
    const locations = useLocation();
    useEffect(() => {
        setCurrentLocation(locations.pathname)
    }, [setCurrentLocation, locations.pathname]);


    const [bioActive, setBioActive] = useState(false);
    const [IDoActive, setIDoActive] = useState(true);

    const changeBioNav = (input) => {
        if ((input === "bio" && bioActive === true) || (input === "IDo" && IDoActive === true)) return;
        if (input === "bio") {
            setBioActive(true);
            setIDoActive(false);
        };
        if (input === "IDo") {
            setBioActive(false);
            setIDoActive(true);
        };
    };

    const mixingRef = [
        {id: 0, job: "mixing", artist:"MediCated ft. Fikir Amlak/Rider Shafique", release:"Worse Than Obeah/Jah Bless Me", link:"https://soundcloud.com/medicated830/ft-fikir-amlak-rider-shafique-worser-than-obeahfikir-amlak-jah-bless-merider-shafique"},
        {id: 1, job: "mixing", artist:"Ome", release:"Way To Far EP", link:"https://soundcloud.com/simply-deep/sd021-ome-way-too-far-showreel"},
        {id: 2, job: "mixing", artist:"Bloomfeld", release:"Octagon", link:"https://soundcloud.com/classicaltrax/bloomfeld-octagon"},
        {id: 3, job: "mixing", artist:"Ziek ", release:"Technology", link:"https://soundcloud.com/ziek08/ziek-technology-minitrailermix"},
    ]

    const masterRef = [
        {id: 0, job: "mastering", artist:"Yoofee", release:"Nova/Pandadub", link:"https://codepen.io/ReGGae/pen/bmyYEj"},
        {id: 1, job: "mastering", artist:"Ome", release:"482", link: "https://soundcloud.com/elemental-arts-fm/ome-482-elemental-arts-premiere"},
        {id: 2, job: "mastering", artist:"Oakin", release:"The Teacher EP", link:"https://soundcloud.com/oakin/oakin-the-teacher-ep-free-download"},
        {id: 3, job: "mastering", artist:"Leap", release:"Tell 'Em EP", link:"https://soundcloud.com/silentmotionrec/leap-tell-em-ep-jan-11th"},
        {id: 4, job: "mastering", artist:"Ome", release:"Calavera/Big Fish", link:"https://soundcloud.com/sub_garden/ome-calavera-big-fish-sgdn021-showreel-out-on-may-25th"},

    ]
    
    return (
        <DocumentTitle title ="Sound Engineer">
            <div className="sound-engineer">
                <section className="se-intro">
                    <section className="se-intro-field"> 
                        <div className="se-intro-nav">
                            <a title="What I Do" className={`${IDoActive ? "" : "inactive"}`} onClick={() => changeBioNav("IDo")} >WHAT I DO</a>
                            <a title="Bio" className={`${bioActive ? "" : "inactive"}`} onClick={() => changeBioNav("bio")} >BIO</a>
                        </div>
                        <div className={`se-what-i-do-text ${IDoActive ? "" : "inactive-se-text"}`}>
                            <p>
                            With my professional knowledge and experience (check Bio for more information about that), I'll help you to rise your productions to the highest standards. While I'm always open to listen to your music and to give you feedback, if I have the time, I also offer pay-to-win solutions which guarantee you my full attention.
                            </p>
                            <ul>
                                <li>
                                MASTERING: My masters guarantee full impact on any club PA or Soundsystem while translating transparent on smaller speaker. Additionally, I take notes during the process and provide you with in-depth feedback on your work.
                                </li>
                                <li>
                                MIX DOWN: Give me full control by providing me with the stems of your project and I make it as shiny as it can be. You can fully focus on your creativity while I take care of the technicalities.
                                </li>
                                <li> 
                                OTHERS like: You have a mediocre version of your creatively outstanding tune but you lost the project? Well, I can't guarantee a 100% recovery from that but I promise you: There is much more possible than you think. Give me your version, what sounds or stems you are able to recover and let me do the magic.
                                </li>
                            </ul>
                        </div>
                        <div className={`se-bio-text ${bioActive ? "" : "inactive-se-text"}`}>
                            <p >
                                From 2015 to 2018, I studied Music Technology at a Munich-based private school in cooperation with the University of West London. Apart of my scientific work in gathering knowledge about film music and post production, room acoustics, streaming and the music industry itself, I had hands-on experience at the famous Dorian Gray Studios in Munich. Here, I recorded bands with professional microphones and analogue outboard processing gear via a SSL console into a DAW. Moreover, I mixed the recordings on the SSL and printed the premaster onto a 2inch 24-track tape.
                            </p>
                            <p>
                                Since I started to make own productions in 2016, I specialized myself in in-the-box workflows, sound design for musical purposes and mixing/mastering music made for clubs and Soundsystems. Due to my studies, I'm able to utilize knowledge from the conservative way of producing music while avoiding misconceptions based on superficial YouTube tutorials which too often don't emphasize the differences between the analogue and digital hemisphere. This gives me a huge advantage in my own productions but also allows me to help fellow producers to bring their creations to the next level. 
                            </p>
                        </div>
                    </section>
                </section>
                <section className="se-offers">
                    <h2>OFFERS</h2>
                    <div>
                        <h3>MASTERING</h3>
                        <p>
                            You give me a premaster and 20€, you'll get a master and a list with in-depth feedback in return. If you change the premaster based on my feedback and want a new version, you can get another master for additional 5€. Naturally, if I messed something up, the update will cost you nothing. You'll have the chance to listen to previews via SoundCloud, the download will be enabled as soon as the payment arrived. If you pay in advance, downloads will be enabled during the whole process.
                        </p>
                        <h3>MIX DOWN & OTHERS</h3>
                        <p>
                            Mixing your tune with or without vocals, saving your lost project or a bad recording - you name it, I got you. I charge 20€ per hour. Depending on your project, it usually takes me something between 2-3 hours per tune. Sometimes more, sometimes less. You'll get a mastered version and a premaster in case you want to get it mastered by the mastering engineer of your trust. You'll have the chance to listen to previews via SoundCloud, the download will be enabled as soon as the payment arrived.
                        </p>
                        <h3>CONTACT</h3>
                        <p>
                            Get in touch with me on all of these social media platforms
                            https://www.facebook.com/simon.schotz 
                            https://soundcloud.com/bustedfingerz/ 
                            https://www.instagram.com/bustedfingerz/ 

                            
                             or via email simonsch.tz@gmail.com
                        </p>
                        <p>
                            Not convinced yet? Check out the references below!
                        </p>
                    </div>
                </section>
                <section className="se-ref">
                    <h2>REFERENCES</h2>
                    <div className="se-ref-container">
                        <div>
                            <h3>MASTERING</h3>
                            <p>
                                You give me a premaster and 20€, you'll get a master and a list with in-depth feedback in return. If you change the premaster based on my feedback and want a new version, you can get another master for additional 5€. Naturally, if I messed something up, the update will cost you nothing. You'll have the chance to listen to previews via SoundCloud, the download will be enabled as soon as the payment arrived. If you pay in advance, downloads will be enabled during the whole process.
                            </p>
                        </div>
                        <div>
                            <h3>MIX DOWNS</h3>
                            <p>
                                Mixing your tune, saving your lost project or a bad recording - you name it, I got you. I charge 20€ per hour. Depending on your project, it usually takes me something between 2-3 hours per tune. Sometimes more, sometimes less. You'll get a mastered version and a premaster in case you want to get it mastered by the mastering engineer of your trust. You'll have the chance to listen to previews via SoundCloud, the download will be enabled as soon as the payment arrived.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </DocumentTitle>
    )
}
