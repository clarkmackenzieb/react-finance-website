import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Income from "./components/Income/Income";
import Budget from "./components/Budget/Budget";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/income" component={Income} />
    <Route path="/budget" component={Budget} />
    <Route path="/about" />
    <Route path="/resources" />
  </Switch>
);
