import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import AdminHome from "./AdminHome";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
    <Route exact path="/signup" component={AdminHome} />
  </BrowserRouter>
);

export default Router;
