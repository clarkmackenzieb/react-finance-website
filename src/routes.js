import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Income from "./components/Income/Income";
import Budget from "./components/Budget/Budget";
import About from "./components/About/About";
import Resources from "./components/Resources/Resources";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/income" component={Income} />
    <Route path="/budget" component={Budget} />
    <Route path="/about" component={About} />
    <Route path="/resources" component={Resources} />
  </Switch>
);
