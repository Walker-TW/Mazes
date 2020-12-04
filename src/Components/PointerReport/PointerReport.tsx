import React, { Component } from "react";
import { Button } from "@material-ui/core";
import ReadOut from '../Readout/ReadOut';
import Target from '../Target/Target';
// import useMouseLeave from 'use-mouse-leave';

import "./PointerReport.css";
import ScoreBoard from "../Score/ScoreBoard";

class PointerReport extends Component<{}, { 
    x: number,
    y: number,
    dimensions: any,
    warningPlaying: boolean,
    playingGame: boolean,
    finalNode: any,
    victoryCoordinate: any,
    victoryZone: any,
    playerScore: number
  }> {
  private playField: any
  constructor(props: any) {
    super(props);
    this.playField = React.createRef();
    this.state = { 
      x: 0,
      y: 0,
      dimensions : { height: 0, width: 0},
      warningPlaying: true,
      playingGame: false,
      finalNode: null,
      victoryCoordinate: { x: '?', y: '?' },
      victoryZone: [],
      playerScore: 0
    };
  }

  componentDidMount() {
    const height = this.playField.current.offsetHeight
    const width = this.playField.current.offsetWidth
    if (width != null && height != null) { this.setState({ dimensions: {height: height, width: width }})}
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
    this.checkVictoryZone()
    // this.victoryCheck()
    this.loopMusic()
  }


  silenceGap(x: number) {
    for (let i = 0; i < x; i++) {
      this.audioGap.play()
    }
  }

  checkVictoryZone() {
    let victoryZone = this.state.victoryZone
    if (this.state.playingGame) {
      for (var i = 0; i < victoryZone.length; i++) {
      if ((this.state.x === victoryZone[i][0]) && (this.state.y === victoryZone[i][1])) 
      {
        this.victory.play()
        this.setState({playingGame : false})
        }
      }
    }
  }

  generateVictoryZone() {
    const x: number = this.state.victoryCoordinate.x
    const y: number = this.state.victoryCoordinate.y

    let answerArray = [ 
      [x , y],
      [x , y-1],
      [x , y + 1],
      [x + 1, y],
      [x + 1, y-1],
      [x + 1, y + 1],
      [x - 1, y],
      [x - 1, y-1],
      [x - 1, y + 1],
  ]

    return answerArray
    // the easier wasy to do this is simply do a case check of the citory area but we checking the array can happen
    // not the best implementation of it 
  }
  
  setVictoryZone() {
    let victoryArray = this.generateVictoryZone()
    this.setState({ victoryZone: victoryArray})
    console.log("we have set thye victory array")
  }

  toggleStart() {
    this.setState({
      playingGame: !this.state.playingGame
    })
    // This should also make the button disapear? 
    this.togglePlay()
    this.loopMusic()
    // done to allow state to update
    setTimeout(() => this.setVictoryZone(), 1000 )
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
    // @ts-ignore
    let answer = this.map[distance]
    return answer
  }

  createRandomNumbers() {
     let x: number = Math.floor(Math.random() * this.state.dimensions.height) + 1
     let y: number = Math.floor(Math.random() * this.state.dimensions.width) + 1
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
        <ScoreBoard props={this.state.playerScore}/>
        <div className="play-field" 
        ref={this.playField}
        onMouseMove={this._onMouseMove.bind(this)}  
        onMouseOut={this.boundryCheck()}
        >
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
