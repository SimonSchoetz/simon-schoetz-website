import React, { Fragment, useEffect, useState } from 'react'

export default function ToTopButton({setMouseOverElement}) {

    const [hiddenToTop, setHiddenToTop] = useState(" hidden-to-top");

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        // window.removeEventListener("scroll", listenToScroll)
    }, [])

    const listenToScroll = (e) =>{
        if (window.pageYOffset > 500) {setHiddenToTop("")}
        else {setHiddenToTop(" hidden-to-top")}
    }

    return (
        <Fragment>
            <button className={`to-top${hiddenToTop}`} onMouseEnter={()=> setMouseOverElement(true)} onMouseLeave={()=> setMouseOverElement(false)}>
                <div className="t-roof-l"/>
                <div className="t-roof-r"/>
                <div className="t-neck"/>
                <div className="o-body"/>  
                <p className="word-to">TO</p>
                <p className="word-top">TOP</p>
            </button>
        </Fragment>
    )
}
