import React from "react";
import PropTypes from "prop-types";
import PlatformPage from "../PlatformPage";
import PlanPage from "../PlanPage";
import FormPage from "../FormPage";
import ReactDOM from "react-dom";
import { Switch, Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={"/"} component={PlatformPage} />
        <Route exact path={"/planos"} component={PlanPage} />
        <Route exact path={"/formulario"} component={FormPage} />
      </Switch>
    </Router>
  );
}

export default App;

