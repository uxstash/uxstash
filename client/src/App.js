import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home";
import Category from "./components/Category/Category";
import Admin from "./components/Admin/Admin";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/strategy" component={Category} />
          <Route path="/management" component={Category} />
          <Route path="/architecture" component={Category} />
          <Route path="/development" component={Category} />
          <Route path="/design" component={Category} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </div>
    );
  }
}

export default App;
