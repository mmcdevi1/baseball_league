import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
	render () {
		return (
			<div>
				Home
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

export default connect(mapStateToProps)(Home);