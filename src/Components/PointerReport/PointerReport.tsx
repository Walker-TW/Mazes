import React, { Component } from "react";
import { Button } from "@material-ui/core";

import "./PointerReport.css";

class PointerReport extends Component<{}, { x: number; y: number }> {
  constructor(props: any) {
    super(props);
    this.state = { x: 0, y: 0 };
  }
  _onMouseMove(e: any) {
    this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  }


  render() {
    const { x, y } = this.state;
    return (
      <div className="PointerReport" onMouseMove={this._onMouseMove.bind(this)}> 
        {/* <Button 
          variant="contained" 
          color="primary" 
          onClick={() => this.pointerPosition()} 
        >
          Begin 
        </Button> */}
        <div> 
          <h1> 
            {x} {y}
          </h1>
        </div>
      </div>
    );
  }
}

export default PointerReport;
