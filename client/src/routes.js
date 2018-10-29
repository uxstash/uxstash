import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";

import Home from "./components/Home";
import Category from "./components/Category/Category";
import Admin from "./components/Admin/Admin";
import Stash from "./components/Stash/Stash";

const Routes = () => (
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/admin" component={Admin} />
      <Route path="/stash/:id" component={Stash} />
      <Route path="/:category" component={Category} />
    </Switch>
  </App>
);

export default Routes;
