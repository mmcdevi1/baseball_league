import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Teams from './'
import NewTeam from './NewTeam'
import EditTeam from './EditTeam'
import SingleTeam from './SingleTeam'

import FetchTeam from '../../hoc/fetchTeam';

class TeamRoutes extends React.Component {
  render () {
    const { path } = this.props.match

    return (
      <Switch>
        <Route exact path={`${path}`}    component={Teams} />
        <Route path={`${path}/new`}      component={NewTeam} />
        <Route path={`${path}/:id/edit`} component={FetchTeam(EditTeam)} />
        <Route path={`${path}/:id`}      component={FetchTeam(SingleTeam)} />
      </Switch>
    )
  }
} 

export default TeamRoutes;

        // <Route path="/teams/new"   component={NewTeam} />
        // <Route path="/teams/edit/:id"   component={EditTeam} />