import React, { Component } from "react";
import "../styles/App.css";
import ChildComponent from "./ChildComponent";
import DisplayComponent from "./DisplayComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    //state lives here
    this.state = {
      whatToSay: "",
      whatWasSaid: ""
    };
  }
  handleInput(e) {
    e.preventDefault();
    //set the state on input change
    let inputValue = e.target.value;
    this.setState({ whatToSay: inputValue });
  }

  handleSubmit(e) {
    e.preventDefault();
    //check console to see if firing
    console.log("fired");
    //set the state for props and for value (prevents output from appearing when typing)
    if (this.state.whatToSay.length < 5) {
      alert("Please type 5 or more characters");
    } else {
      this.setState({
        whatToSay: this.state.whatToSay,
        whatWasSaid: this.state.whatToSay
      });
      //clear our input by resetting state
      this.setState({ whatToSay: "" });
      let whatToSayInput = document.querySelector("#whatToSay");
      whatToSayInput.value = "";
    }
  }

  render() {
    return (
      <div>
        <div className="subTitle">Say what you feel</div>
        <div>
          <input
            id="whatToSay"
            onChange={this.handleInput}
            type="text"
            placeholder="Say It!"
          />
        </div>
        <div>
          <ChildComponent onClick={this.handleSubmit} />
          <DisplayComponent sayWhat={this.state.whatWasSaid} />
        </div>
      </div>
    );
  }
}

export default ParentComponent;
