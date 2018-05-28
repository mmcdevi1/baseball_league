import React from 'react';
import { connect } from 'react-redux';

import Team from './Team';

class Teams extends React.Component {
	render () {
		return (
			<div>
				<h1>Teams</h1>
				{
					this.props.teams.map(team => {
						return (
							<Team key={team.id} name={team.name} />
						)
					})
				}
			</div>
		)
	}
}

function mapStateToProps (state) {
	const { teams } = state.Teams;

	return {
		teams,
	}
}

export default connect(mapStateToProps)(Teams);