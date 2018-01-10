import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import { Link } from "react-router-dom";
import "./Home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const style = {
      margin: 12
    };

    return (
      <div>
        <h1>Budget Buddy</h1>
        <h3>Carpe diem and leave the rest to us.</h3>
        <h4>
          Life moves fast. With Budget Buddy, keeping track of your finances has
          never been easier.
        </h4>
        <Link to="/income">
          <RaisedButton label="Get Started" primary={true} style={style} />
        </Link>
      </div>
    );
  }
}
