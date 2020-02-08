import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Routes from "./Routes";

const App = () => {
  return (
    <Switch>
      {Routes.map(route => (
        <Route path to={route.path} component={route.component} />
      ))}
    </Switch>
  );
};

export default App;
