import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";
// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";
import ContextProvider from "components/context/ContextAPI";

// views without layouts

ReactDOM.render(
  <BrowserRouter>
  <ContextProvider>
    <Switch>
      {/* add routes with layouts */}

      <Route path="/admin" component={Admin} />
      <Route path="/" component={Auth} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
    </ContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
