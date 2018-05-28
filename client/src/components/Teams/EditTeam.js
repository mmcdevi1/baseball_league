import React from 'react';
import { connect } from 'react-redux';
import Form from '../Form';
import FormHandler from '../../hoc/FormHandler';

import actions from '../../actions/teams/actions';

const { editTeam } = actions;

class EditTeam extends React.Component {
	render () {
  	const { newTeam, history, selectedTeam } = this.props;

    return (
      <div>
      	<h1>Edit {selectedTeam.name}</h1>
      	<Form onHandleSubmit={(team) => this.props.onHandleSubmit(editTeam, team, history)} />
      </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
	const { selectedTeam } = state.Teams;

	return {
		selectedTeam
	}
}

export default connect(
	mapStateToProps, { 
		editTeam,  
	}
)(FormHandler(EditTeam))