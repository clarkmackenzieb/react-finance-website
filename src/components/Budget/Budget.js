import React, { Component } from "react";
import axios from "axios";

import "./Budget.css";

export default class Budget extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    axios
      .get("/api/getTaxes")
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Budget</h1>
      </div>
    );
  }
}
