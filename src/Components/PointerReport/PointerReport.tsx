import React, { Component } from "react";
import { Button } from "@material-ui/core";
import ReadOut from '../Readout/ReadOut'

import "./PointerReport.css";

class PointerReport extends Component<{}, { x: number; y: number; warningPlaying: boolean, playingGame: boolean, finalNode: any }> {
  constructor(props: any) {
    super(props);
    this.state = { 
      x: 0,
      y: 0,
      warningPlaying: true,
      playingGame: false,
      finalNode: null,
    };
  }

  audio = new Audio("/Wall.m4a")

  failure = new Audio("/Failure.mp3")

  audioGap = new Audio("/250.ms.mp3")

  _onMouseMove(e: any) {
    this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  }
  pointerPosition = () => {
  };

  silenceGap(x: number) {
    for (let i = 0; i < x; i++) {
      this.audioGap.play()
      console.log("audioplays")
    }
  }

  toggleStart() {
    this.setState({
      playingGame: !this.state.playingGame
    })
    // This should also make the button 
    console.log(this.state.playingGame)
    this.togglePlay()
  }


  togglePlay() {
    this.setState({
      warningPlaying: !this.state.warningPlaying
    })

    this.silenceGap(this.state.x)

    this.state.warningPlaying ? this.audio.play() : this.audio.pause();
    this.audio.loop = true;
  }

  boundryCheck() {
    if (this.state.playingGame === true ) {this.failure.play()}
    return undefined
    // should make alarm sound if this.state.playingGame = true AND goes into the outskirts of the app ?
    // looks like this may have to be a component that wraps the pointer report and passes everything through?
    // then mouse in event? or maybe a mouseout event? - that seems better
  }

  render() {
    return (
      <div className="PointerReport">
        <div className="play-field" onMouseMove={this._onMouseMove.bind(this)}  onMouseLeave={this.boundryCheck()}>
        <Button
          className="begin-button"
          variant="contained"
          color="primary"
          onClick={() => this.toggleStart()}
        >
          Start Game
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
