import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import TeamRoutes from './components/Teams/TeamRoutes'

class MainRoutes extends React.Component {
  render () {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/teams"  component={TeamRoutes} />
      </Switch>
    )
  }
}

export default MainRoutes;