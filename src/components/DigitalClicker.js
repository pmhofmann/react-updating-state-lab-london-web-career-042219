// Code DigitalClicker Component Here
import React, { Component } from "react";

class DigitalClicker extends Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0
    };
  }

  handleClick = () => {
    this.setState(countValue => ({
      timesClicked: countValue.timesClicked + 1
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    );
  }
}

export default DigitalClicker;
