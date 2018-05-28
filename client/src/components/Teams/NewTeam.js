import React from 'react';
import { connect } from 'react-redux';
import Form from '../Form';
import FormHandler from '../../hoc/FormHandler';

import actions from '../../actions/teams/actions';

const { newTeam } = actions;

class NewTeam extends React.Component {
	render () {
  	const { newTeam, history } = this.props;

    return (
      <div>
      	<h1>New Team {this.props.test}</h1>
      	<Form onHandleSubmit={(team) => this.props.onHandleSubmit(newTeam, team, history)} />
      </div>
    )
  }
}

export default connect(null, { newTeam })(FormHandler(NewTeam))