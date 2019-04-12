import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../semantic/dist/semantic.min.css";

import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Router path="/login" component={Login} />
      <Router path="/register" component={Register} />
    </Switch>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById("root"));

serviceWorker.unregister();
