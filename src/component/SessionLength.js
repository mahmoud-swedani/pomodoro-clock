import React from 'react'

export const SessionLength = (props) => {
    return (
        <section className="length-container">
            <h4 id="session-label" className="titel-length-container">Session Length</h4>
            <section className="session-length">
                <button id="session-decrement" onClick={props.Downsession }>Down</button>
                <span id="session-length" className="span-val">{props.sessionlength}</span>
                <button id="session-increment" onClick={props.Upsession}>Up</button>
            </section>
        </section>
    )
}