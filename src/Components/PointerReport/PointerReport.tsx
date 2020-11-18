import React, { Component } from "react";
import { Button } from "@material-ui/core";
import ReadOut from '../Readout/ReadOut'

import "./PointerReport.css";

class PointerReport extends Component<{}, { x: number; y: number }> {
  constructor(props: any) {
    super(props);
    this.state = { x: 0, y: 0 };
  }

  _onMouseMove(e: any) {
    console.log("Im checking where the pointer is")
    this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  }
  pointerPosition = () => {
    console.log("Lookie here");
  };

  render() {
    var audio = new Audio("/Wall.m4a")

    return (
      <div className="PointerReport">
        <div className="play-field" onMouseMove={this._onMouseMove.bind(this)}>
        <Button
          className="begin-button"
          variant="contained"
          color="primary"
          onClick={() => audio.play()}
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
