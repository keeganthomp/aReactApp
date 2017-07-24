import React, { Component } from "react";
import "../styles/App.css";

class DisplayComponent extends Component {
  render() {
    return (
      <div className="whatYouSaidContainer">
        <div className="whatYouSaid">
          {this.props.sayWhat}
        </div>
      </div>
    );
  }
}

export default DisplayComponent;
