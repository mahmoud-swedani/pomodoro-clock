import React, { Component } from 'react'
import { BreakLength } from './BreakLength';
import { SessionLength } from './SessionLength';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      breaklength: 5,
      sessionlength: 25,
      
    }
  }
  Upbreak = () =>{
    
    const {breaklength} = this.state
    const res = breaklength + 1
    if(breaklength ===60){
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
    if(sessionlength === 60){
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
  render() {
    const {breaklength, sessionlength} = this.state
    return (
      <section className="section-container">
        <h2 className="titel">25 + 5 Clock</h2>
      <section className="section-length">
        <BreakLength  breaklength={breaklength} Upbreak={this.Upbreak} Downbreak={this.Downbreak}/>
        <SessionLength sessionlength={sessionlength} Upsession={this.Upsession} Downsession={this.Downsession}/>
      </section>
      </section>
    )
  }
}

