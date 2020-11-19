import React, { Component } from "react";
import { Button } from "@material-ui/core";
import ReadOut from '../Readout/ReadOut'

import "./PointerReport.css";

class PointerReport extends Component<{}, { x: number; y: number; play: boolean, nowPlaying: boolean, finalNode: any }> {
  constructor(props: any) {
    super(props);
    this.state = { 
      x: 0,
      y: 0,
      play: true,
      nowPlaying: false,
      finalNode: null,
    };
  }

  audio = new Audio("/Wall.m4a")

  audioGap = new Audio("/250.ms.mp3")

  _onMouseMove(e: any) {
    console.log("Im checking where the pointer is")
    this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  }
  pointerPosition = () => {
    console.log("Lookie here");
  };

  silenceGap(x: number) {
    for (let i = 0; i < x; i++) {
      this.audioGap.play()
      console.log("audioplays")
    }
  }

  toggleStart() {
    this.setState({
      nowPlaying: !this.state.nowPlaying
    })
    console.log(this.state.nowPlaying)
    this.togglePlay()
  }


  togglePlay() {
    this.setState({
      play: !this.state.play
    })

    this.silenceGap(this.state.x)

    this.state.play ? this.audio.play() : this.audio.pause();
    this.audio.loop = true;
  }

  render() {
    return (
      <div className="PointerReport">
        <div className="play-field" onMouseMove={this._onMouseMove.bind(this)}>
        <Button
          className="begin-button"
          variant="contained"
          color="primary"
          onClick={() => this.toggleStart()}
        >
          Begin
        </Button>
        </div>
        <div className="postion-readout">
        <ReadOut props={this.state}/>
        </div>
      </div>
    );
  }
}

export default PointerReport;


// Game start function 
//  - which then hides button AND turns game.state => on
// can then do conditional rendering? AND use useContext to always grab game state?
// 
// - Need to show exit place (maybe in first iteration have goal displayed at the bottom?)
// 
// - can also do highscore based off time to exit very easily.....
// - - just do ratio creation? - maybe even use the toasts 
// 
