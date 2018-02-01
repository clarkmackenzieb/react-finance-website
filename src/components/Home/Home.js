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
      backgroundColor: "#FFF200",
      color: "black",
      margin: "10px 10px",
      fontFamily: "VT323",
      fontSize: "35px",
    };

    return (
      <div className="container-div" id="animate-area">
        <h1 className="vt-font header-text home-page-text">Budget Buddy</h1>
        <h2 className="pt-sans-font home-page-text">Plug in and leave the rest to us.</h2>
        <h3 className="pt-sans-font home-page-text">
          Life moves fast. With Budget Buddy, keeping track of your finances has
          never been easier.
        </h3>
        <Link to="/income">
          <FlatButton label="Get Started" primary={true} style={style} />
        </Link>
      </div>
    );
  }
}
