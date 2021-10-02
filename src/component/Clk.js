import React, { Component } from 'react'
import './Clk.css'
export default class Clk extends Component {
    state ={
        name: "heloo, worled!"
    }

    render() {
        return (
            <div>
                {this.state.name}
            </div>
        )
    }
}
