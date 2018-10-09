import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home';
import Stash from './components/Stash/Stash';
import Admin from './components/Admin/Admin';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/strategy" component={Stash} />
          <Route path="/management" component={Stash} />
          <Route path="/architecture" component={Stash} />
          <Route path="/development" component={Stash} />
          <Route path="/design" component={Stash} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </div>
    );
  }
}

export default App;
