import React, { Component } from 'react';
import '../styles/App.css';



class DisplayComponent extends Component {
  render() {
    return (
      <div>{this.props.sayWhat}</div>
    );
  }
}

export default DisplayComponent;
