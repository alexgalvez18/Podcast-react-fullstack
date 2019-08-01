import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import AdminHome from "./AdminHome";
import LoginHome from "./LoginHome";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
    <Route exact path="/signup" component={AdminHome} />
    <Route exact path="/login" component={LoginHome} />
  </BrowserRouter>
);

export default Router;
