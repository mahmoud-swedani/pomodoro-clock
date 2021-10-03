import React from 'react'

export const BreakLength = (props) => {
    return (
        <section className="length-container">
            <h4 id="break-label" className="titel-length-container">Break Length</h4>
            <section className="break-length">
                <button id="break-decrement" onClick={props.Downbreak}>Down</button>
                <span id="break-length" className="span-val">{props.breaklength}</span>
                <button id="break-increment" onClick={props.Upbreak}>Up</button>
            </section>
        </section>
    )
}
