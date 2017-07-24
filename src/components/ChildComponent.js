import React, { Component } from 'react';
import '../styles/App.css';



class ChildComponent extends Component {
  render() {
    return (
      <div>Dumb Component receiving Props
        <div>
          <input type="submit" onClick={this.props.onClick}/>
        </div>
      </div>
    );
  }
}

export default ChildComponent;