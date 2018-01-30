import React, { Component } from "react";

import "./Footer.css";

export default class Budget extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <footer className="main-footer">
        <a href="http://clarkmackenzieb.com" className="link footer-contents"><p>Mackenzie Clark, 2018</p></a><a href="http://github.com/clarkmackenzieb"><img src="http://www.pvhc.net/img207/krzqzwpfcicyzcrzcmtt.png" className="github-logo footer-contents" /></a>
      </footer>
    );
  }
}
