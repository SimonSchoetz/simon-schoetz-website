import React, {useContext, useEffect} from 'react';
import DocumentTitle from 'react-document-title';
import { useLocation  } from "react-router-dom";
import { Context } from './Context';


export default function SoundEngineer() {
    const {setCurrentLocation} = useContext(Context)
    const locations = useLocation();
    useEffect(() => {
        setCurrentLocation(locations.pathname)
    }, [setCurrentLocation, locations.pathname])
    
    return (
        <DocumentTitle title ="Sound Engineer">
            <div className="sound-engineer">
                <div className="se-intro">
                    <section className="se-bio"> 
                        <h2>BIO</h2>
                        <p>
                        From 2015 to 2018, I studied Music Technology at a Munich-based private school in cooperation with the University of West London. Apart of my scientific work in gathering knowledge about film music and post production, room acoustics, streaming and the music industry itself, I had hands-on experience at the famous Dorian Gray Studios in Munich. Here, I recorded bands with professional microphones and analogue outboard processing gear via a SSL console into a DAW. Moreover, I mixed the recordings on the SSL and printed the premaster onto a 2inch 24-track tape.
                        Since I started to make own productions in 2016, I specialized myself in in-the-box workflows, sound design for musical purposes and mixing/mastering electronic produced music. Due to my studies, I'm able to utilize knowledge from the conservative way of producing music while avoiding misconceptions based on superficial YouTube tutorials which too often don't emphasize the differences between the analogue and digital hemisphere. This gives me a huge advantage in my own productions but also allows me to help fellow producers to bring their creations to the next level. 
                        </p>
                    </section>
                    <section>
                        <h2>What I Do</h2>
                        <p>
                        While I'm always open to listen to your music and give you feedback if I have the time, I also offer pay-to-win solutions which guarantee you my full attention:
                        <br/><br/>
                        Mastering:
                        You are confident enough with your mix down to send the premaster over to me In return, you'll not only get a banging master, additionally, you will get in-depth feedback on your work and you can decide if you want to make changes based on it or just keep my advice for your future productions.
                        <br/><br/>
                        Mixing:
                        Give me full control by providing me with the stems of your project and I make it as shiny as it can be. You can fully focus on your creativity while I take care of the technicalities. At the end, you will have a mastered version and a premaster which you can pass on to the mastering engineer of your trust.
                        <br/><br/>
                        Lost Project: 
                        You have a mediocre version of your creatively outstanding tune but you lost the project? Well, I can't guarantee a 100% recovery from that but I promise you: There is much more possible than you think. Give me your version, what sounds or stems you are able to recover and let me do the magic.
                        </p>
                        <p>
                            For references and more information about my services, please check below 
                        </p>
                    </section>
                </div>
                <div className="se-offers">

                </div>
            </div>
        </DocumentTitle>
    )
}
