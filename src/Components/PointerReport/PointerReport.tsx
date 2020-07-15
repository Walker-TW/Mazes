import React, { Component } from "react";
import { Button } from "@material-ui/core";

import "./PointerReport.css";

class PointerReport extends Component {
  pointerPosition = () => {
    console.log("Lookie here");
  };

  render() {
    return (
      <div className="PointerReport">
        Look Here Mama
        <Button
          variant="contained"
          color="primary"
          onClick={() => this.pointerPosition()}
        >
          Primary
        </Button>
      </div>
    );
  }
}

export default PointerReport;
