import React, { Component } from 'react'
import { BreakLength } from './BreakLength';
import { SessionLength } from './SessionLength';
import Timer from './Timer';
export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      breaklength: 5,
      sessionlength: 25,
      timer: 0,
      isplay: false,
      playBreak: undefined,
      playSession:undefined
    }
  }
  Upbreak = () =>{
    
    const {breaklength} = this.state
    const res = breaklength + 1
    if(breaklength === 59){
      return;
    }else{
      this.setState({breaklength:res})
    }

  }

  Downbreak = () =>{
    const {breaklength} = this.state
    const res = breaklength - 1
    if(breaklength === 1){
      return;
    }else{
      this.setState({breaklength:res})
    }
  }

  Upsession = () =>{
    const {sessionlength} = this.state
    const res = sessionlength + 1
    if(sessionlength === 59){
      return;
    }else{
      this.setState({sessionlength:res})
    }

  }

  Downsession = () =>{
    const {sessionlength} = this.state
    const res = sessionlength - 1
    if(sessionlength === 1){
      return;
    }else{
      this.setState({sessionlength:res})
    }

  }
  playtimer = () => {

  }
  stoptimer = () => {
    
  }
  repeattimer = () => {
    this.setState({
      breaklength: 5,
      sessionlength: 25,
      timer: 0,
      isplay: false,
      isstop: false
    })
  }
  render() {
    const {breaklength, sessionlength} = this.state
    return (
      <main className="main">
          <header>
            <h2 className="titel">25 + 5 Clock</h2>
          </header>
        <section className="section-container ">
            <BreakLength  breaklength={breaklength} Upbreak={this.Upbreak} Downbreak={this.Downbreak}/>
            <SessionLength sessionlength={sessionlength} Upsession={this.Upsession} Downsession={this.Downsession}/>
        </section>
        <Timer 
        sessionlength={this.state.sessionlength}
        playtimer={this.playtimer}
        stoptimer={this.stoptimer}
        repeattimer={this.repeattimer}
        timer={this.state.timer}
/>

     </main>

    )
  }
}

