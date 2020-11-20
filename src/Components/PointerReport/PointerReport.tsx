import React, { Component } from "react";
import { Button } from "@material-ui/core";
import ReadOut from '../Readout/ReadOut';
import Target from '../Target/Target';
// import useMouseLeave from 'use-mouse-leave';

import "./PointerReport.css";

class PointerReport extends Component<{}, { x: number; y: number; warningPlaying: boolean, playingGame: boolean, finalNode: any, victoryCoordinate: any }> {
  constructor(props: any) {
    super(props);
    this.state = { 
      x: 0,
      y: 0,
      warningPlaying: true,
      playingGame: false,
      finalNode: null,
      victoryCoordinate: { x: '?', y: '?' }
    };
  }

  // [mouseLeft, ref] = useMouseLeave()

  map = {
    0 : 3,
    1 : 1.5,
    2 : 1.5,
    3 : 1,
    4 : 1,
    5 : 0.9,
    6 : 0.8,
    7 : 0.7,
    8 : 0.6,
    9 : 0.5,
    10 : 0.4
  }

  audio = new Audio("/Wall.m4a")

  failure = new Audio("/Failure.mp3")

  audioGap = new Audio("/250-ms.mp3")

  victory = new Audio("/Victory.m4a")


  victoryCheck() {
    if (this.state.playingGame) {
      if ((this.state.x === this.state.victoryCoordinate.x) && (this.state.y === this.state.victoryCoordinate.y)) 
      {
        this.victory.play()
        this.setState({playingGame : false})
      }
    }
  }

  _onMouseMove(e: any) {
    this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    this.victoryCheck()
    this.loopMusic()
  }


  silenceGap(x: number) {
    for (let i = 0; i < x; i++) {
      this.audioGap.play()
    }
  }


  toggleStart() {
    this.setState({
      playingGame: !this.state.playingGame
    })
    // This should also make the button disapear? 
    this.togglePlay()
  }


  togglePlay() {
    this.setState({
      warningPlaying: !this.state.warningPlaying
    })
    this.setState({victoryCoordinate: this.createRandomNumbers()})
    // this.silenceGap(this.state.x)
  }

  loopMusic() {
    let playBackRate = this.determinePlayBackSpeed()
    this.audio.playbackRate = playBackRate
    this.state.playingGame ? this.audio.play() : this.audio.pause();
  }

  getDistance() {
    let x = Math.abs(this.state.victoryCoordinate.x - this.state.x)
    let y = Math.abs(this.state.victoryCoordinate.y - this.state.y)
    if (isNaN(x) || isNaN(y)) return 4
    return Math.floor((x+y)/100)
  }

  determinePlayBackSpeed() {
    let distance: number = this.getDistance()
    console.log(distance)
    // @ts-ignore
    let answer = this.map[distance]
    return answer
  }

  createRandomNumbers() {
     let x: number = Math.floor(Math.random() * 630) + 100
     let y: number = Math.floor(Math.random() * 630) + 100
     return { x , y } 
  }



  boundryCheck() {
    // if (this.state.playingGame === true ) {this.failure.play()}
    return undefined
    // should make alarm sound if this.state.playingGame = true AND goes into the outskirts of the app ?
    // looks like this may have to be a component that wraps the pointer report and passes everything through?
    // then mouse in event? or maybe a mouseout event? - that seems better
  }

  render() {
    return (
      <div className="PointerReport">
        <div className="play-field" onMouseMove={this._onMouseMove.bind(this)}  onMouseOut={this.boundryCheck()}>
        <Button
          className="begin-button"
          variant="contained"
          color="primary"
          onClick={() => this.toggleStart()}
        >
          Start
        </Button>
        </div>
        <div className="postion-readout">
        <ReadOut props={this.state}/>
        </div>
        <div className="target-readout">
        <Target props={this.state.victoryCoordinate}/>
        </div>
      </div>
    );
  }
}

export default PointerReport;


// Game start function 
//  - which then hides button AND turns game.state => on
// can then do conditional rendering? AND use useContext to always grab game state?
// - can be done but need to pass a load of props which is not what this is about
// - Need to show exit place (maybe in first iteration have goal displayed at the bottom?)
// 
// - can also do highscore based off time to exit very easily.....
// - - just do ratio creation? - maybe even use the toasts 
// 
