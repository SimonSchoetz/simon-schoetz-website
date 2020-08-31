import React, { Fragment } from 'react'

export default function FaderContainer({navWidth}) {
    const col = Math.floor(navWidth/35) - 1;
    const dummyArray = []

    for (let i = 0; i < col; i++) {
        dummyArray.push(i)
    }
    
    const renderChannels = () => {
           return dummyArray.map(num => (
                <Fragment key={num}>
                    <div className="channel">
                        <svg className="fader-line" width="4" height="300" viewBox="0 0 4 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="4" height="300" rx="2" fill="white"/>
                        </svg>
                        <svg className={`fader-btn ${"btn"+num}`} width="24" height="35" viewBox="0 0 24 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M23.1953 11.9285C24.1697 6.93861 24.998 0 19.9139 0V0H3.9585V0C-0.0628574 0 -0.18424 5.22189 0.661501 9.15331C1.16335 11.4861 1.43221 13.951 1.43221 16.5C1.43221 19.0327 1.16677 21.4824 0.671081 23.802C-0.334512 28.5078 -0.853503 35 3.9585 35V35H19.9139V35C24.5427 35 24.1511 28.8048 23.2343 24.2677C22.8295 22.2648 22.6142 20.1645 22.6142 18C22.6142 15.9061 22.8157 13.8723 23.1953 11.9285Z" fill="white"/>
                        </svg>
                    </div>
                </Fragment>
            ))
    }

    return (
        <div  className="fader-container">
        {renderChannels()}
        </div>
    )
}
