import React, { Component } from "react";
import { Button } from "@material-ui/core";
import ReadOut from '../Readout/ReadOut'

import "./PointerReport.css";

class PointerReport extends Component<{}, { x: number; y: number; play: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { x: 0, y: 0, play: true };
  }

  audio = new Audio("/Wall.m4a")

  audioGap = new Audio("/1-second-of-silence.mp3")

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
          onClick={() => this.togglePlay()}
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
