import React from 'react';
import { connect } from 'react-redux';
import FormHandler from '../../hoc/FormHandler';

class SingleTeam extends React.Component {
	render () {
		const { selectedTeam } = this.props;

		return (
			<div>
				{ selectedTeam.name }
			</div>
		)
	}
}

function mapStateToProps (state) {
	const { selectedTeam } = state.Teams;

	return {
		selectedTeam
	}
}

export default connect(mapStateToProps)(FormHandler(SingleTeam));