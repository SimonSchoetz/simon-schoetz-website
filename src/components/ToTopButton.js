import React, { Fragment } from 'react'

export default function ToTopButton() {
    return (
        <Fragment>
            <button className="to-top">
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
