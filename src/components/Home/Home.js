import React, { Component } from "react";
import FlatButton from "material-ui/FlatButton";
import { Link } from "react-router-dom";
import "./Home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const style = {
      backgroundColor: "#FCFD95",
      color: "#A0931B"
    };

    return (
      <div className="container-div" id="animate-area">
        <h1 className="vt-font header-text">Budget Buddy</h1>
        <h3 className="pt-sans-font">Plug in and leave the rest to us.</h3>
        <h4 className="pt-sans-font">
          Life moves fast. With Budget Buddy, keeping track of your finances has
          never been easier.
        </h4>
        <Link to="/income">
          <FlatButton label="Get Started" primary={true} style={style} />
        </Link>
      </div>
    );
  }
}
