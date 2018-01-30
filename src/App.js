import React, { Component } from "react";
import routes from "./routes";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="app-containing-div">
        <NavBar />
        {routes}
        <Footer />
      </div>
    );
  }
}

export default App;
