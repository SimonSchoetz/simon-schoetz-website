import React, {useContext, useEffect } from 'react';
import DocumentTitle from 'react-document-title';
import { useLocation } from "react-router-dom";
import { Context } from './Context';
import SoundEngineerCards from './components/se-components/SoundEngineerCards';
import Mailto from 'react-protected-mailto'


export default function SoundEngineer() {
    const {
        setCurrentLocation, 
        setMouseOverContainer, 
        setMouseOverElement
    } = useContext(Context);
    const locations = useLocation();
    useEffect(() => {
        setCurrentLocation(locations.pathname)
    }, [setCurrentLocation, locations.pathname]);

    
    const mixingRefs = [
        {id: 0, job: "mixing", artist:"MediCated ft. Fikir Amlak/Rider Shafique", release:"Worse Than Obeah/Jah Bless Me", artwork:"https://i1.sndcdn.com/artworks-000541356045-frrj4q-t500x500.jpg", link:"https://soundcloud.com/medicated830/ft-fikir-amlak-rider-shafique-worser-than-obeahfikir-amlak-jah-bless-merider-shafique"},
        {id: 1, job: "mixing", artist:"Ome", release:"Way To Far EP", artwork:"https://f4.bcbits.com/img/a2599026224_10.jpg", link:"https://simplydeepuk.bandcamp.com/album/way-too-far"},
        {id: 2, job: "mixing", artist:"Bloomfeld", release:"Octagon", artwork:"https://i1.sndcdn.com/artworks-PeU4Q7JuO9WStshA-WVRNyA-t500x500.jpg", link:"https://soundcloud.com/classicaltrax/bloomfeld-octagon"},
        {id: 3, job: "mixing", artist:"Ziek", release:"Technology", artwork:"https://f4.bcbits.com/img/a4099032707_10.jpg", link:"https://ziek08.bandcamp.com/album/technology"},
    ].sort((entryA, entryB) => entryB.id - entryA.id);

    const masterRefs = [
        {id: 0, job: "mastering", artist:"Yoofee", release:"Nova/Pandadub", artwork:"https://f4.bcbits.com/img/a3874970530_10.jpg", link:"https://subgarden.bandcamp.com/album/nova-pandadub-sgdn023"},
        {id: 1, job: "mastering", artist:"Ome", release:"482", artwork:"https://f4.bcbits.com/img/a4016380146_10.jpg", link: "https://fortheheadsrecords.bandcamp.com/track/482"},
        {id: 2, job: "mastering", artist:"Oakin", release:"The Teacher EP", artwork:"https://f4.bcbits.com/img/a3225695983_10.jpg", link:"https://oakin.bandcamp.com/album/oakin-the-teacher-ep"},
        {id: 3, job: "mastering", artist:"Leap", release:"Tell 'Em EP", artwork:"https://f4.bcbits.com/img/a2294412287_10.jpg", link:"https://silentmotionrecords.bandcamp.com/album/tell-em-ep"},
        {id: 4, job: "mastering", artist:"Ome", release:"Calavera/Big Fish", artwork:"https://f4.bcbits.com/img/a2405176158_10.jpg", link:"https://subgarden.bandcamp.com/album/calavera-big-fish-sgdn021"},

    ].sort((entryA, entryB) => entryB.artist - entryA.artist);

    ////////////////////////////
    // Event handling functions
    ////////////////////////////
    const handleMouseOverContainer = (input) => {
        if (input.type === "mouseenter") {setMouseOverContainer(true)}
        else setMouseOverContainer(false)
    }
    const handleMouseOverElement = (input) => {
        if (input.type === "mouseenter") {setMouseOverElement(true)}
        else setMouseOverElement(false)
    }

    ////////////////////////////
    // Component rendering
    ////////////////////////////
    const renderRefs = array => array.map((el, i) => {

            return  (
                <SoundEngineerCards el={el} i={i} />
            )
        })
    
    
    return (
        <DocumentTitle title ="Sound Engineer">
            <div className="sound-engineer">
                <section className="se-intro" 
                    onMouseEnter={handleMouseOverContainer} 
                    onMouseLeave={handleMouseOverContainer}
                >
                    <div className="intro-top">
                        <div className="img-container">
                            <div className="img-holder"></div>
                        </div>
                        <article>
                            <h2>WHAT I DO</h2>
                            <p>
                            With my professional knowledge and experience, I'll help you to rise your productions to the highest standards. While I'm always open to listen to your music and to give you feedback, if I have the time, I also offer pay-to-win solutions which guarantee you my full attention.
                            </p>
                        </article>
                        
                    </div>
                    <div className="intro-bottom">
                        <p>
                        My services guarantee full impact on any club PA or Soundsystem while translating transparent on smaller speaker. Additionally, I take notes during the process and provide you with in-depth feedback on your work.
                        </p>
                        <p>
                        Give me full control by providing me with the stems of your project and I make it as shiny as it can be. You can fully focus on your creativity while I take care of the technicalities.
                        </p>
                        <p>
                        You have a mediocre version of your creatively outstanding tune but you lost the project? Well, I can't guarantee a 100% recovery from that but I promise you: There is much more possible than you think. Give me your version, what sounds or stems you are able to recover and let me do the magic.
                        </p>
                    </div>
                </section>
                <section className="se-offers" onMouseEnter={handleMouseOverContainer} onMouseLeave={handleMouseOverContainer}>
                    <h2>OFFERS</h2>
                    <div>
                        <h3>MASTERING</h3>
                        <p>
                            You give me a premaster and 20€, you'll get a master and a list with in-depth feedback in return. If you change the premaster based on my feedback and want a new version, you can get another master for additional 5€. Naturally, if I messed something up, the update will cost you nothing. You'll have the chance to listen to previews via SoundCloud, the download will be enabled as soon as the payment arrived. If you pay in advance, downloads will be enabled during the whole process.
                        </p>
                        <h3>MIXDOWN & CUSTOM SOLUTIONS</h3>
                        <p>
                            Mixing your tune with or without vocals, saving your lost project or a bad recording - you name it, I got you. I charge 20€ per hour. Depending on your project, it usually takes me something between 2-3 hours per tune. Sometimes more, sometimes less. You'll get a mastered version and a premaster in case you want to get it mastered by the mastering engineer of your trust. You'll have the chance to listen to previews via SoundCloud, the download will be enabled as soon as the payment arrived.
                        </p>
                        <h3>CONTACT</h3>
                        <p className="no-border">
                            Get in touch with me with either of these platforms:
                        </p>
                        <ul className="sm-container">
                            <li>
                                <a href={`https://soundcloud.com/bustedfingerz/`} target="_blank" rel="noopener noreferrer" onMouseEnter={handleMouseOverElement} onMouseLeave={handleMouseOverElement}>
                                    <i className="fab fa-soundcloud"></i>
                                    SoundCloud
                                </a>
                            </li>
                            <li>
                                <a href={`https://www.facebook.com/simon.schotz`} target="_blank" rel="noopener noreferrer" onMouseEnter={handleMouseOverElement} onMouseLeave={handleMouseOverElement}>
                                    <i className="fab fa-facebook"></i>
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href={`https://www.instagram.com/bustedfingerz/`} target="_blank" rel="noopener noreferrer" onMouseEnter={handleMouseOverElement} onMouseLeave={handleMouseOverElement}>
                                    <i className="fab fa-instagram"></i>
                                    Instagram
                                </a>
                            </li>
                            <li>
                                or via email at <Mailto email="simonsch.tz@gmail.com" onMouseEnter={handleMouseOverElement} onMouseLeave={handleMouseOverElement}/>
                            </li>
                        </ul>
                        <h3 className="not-convinced">
                            Not convinced yet? Check out some of the references below!
                        </h3>
                    </div>
                </section>
                <section className="se-ref" onMouseEnter={handleMouseOverContainer} onMouseLeave={handleMouseOverContainer}>
                    <h2>REFERENCES</h2>
                    <div className="se-ref-container">
                        <div className="ref-master-container">
                            <h3>MASTERING</h3>
                            <ul className="ref-card-container">
                                {renderRefs(masterRefs)}
                            </ul>
                        </div>
                        <div>
                            <h3>MIXDOWNS</h3>
                            <ul className="ref-card-container">
                                {renderRefs(mixingRefs)}
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="se-bio" onMouseEnter={handleMouseOverContainer} onMouseLeave={handleMouseOverContainer}>
                    <div className={`se-bio-text}`}>
                    <h2>WHERE I COME FROM</h2>
                        <p>
                            I studied Music Technology at a Munich-based private school in cooperation with the University of West London. Apart from my academic career in film music and post production, room acoustics, streaming and the music industry itself, I had hands-on experience at the famous Dorian Gray Studios in Munich - involving  professional microphones, analogue outboard processing gear, a SSL console and a 2inch 24-track tape.
                        </p>
                        <p>
                            Since I started working on own productions in 2016, I specialized in in-the-box workflows, sound design for musical purposes and mixing/mastering music made for clubs and Soundsystems. Due to my studies, I'm able to utilize knowledge from the conservative ideas of production while avoiding misconceptions based on superficial YouTube tutorials which too often don't emphasize the differences between the analogue and digital hemisphere enough. This gives me a huge advantage in my own productions but also allows me to help fellow producers to bring their creations to the next level. 
                        </p>
                    </div>

                </section>
            </div>
        </DocumentTitle>
    )
}
