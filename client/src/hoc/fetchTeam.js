import React from 'react';
import { connect } from 'react-redux';

import actions from '../actions/teams/actions';

const { fetchTeam } = actions;

export default function (ComposedComponent) {

	class FetchTeam extends React.Component {
		componentDidMount () {
			const { fetchTeam, match: { params } } = this.props;

			fetchTeam(params.id)
		}

		render () {
			return (
				<div>
					<ComposedComponent {...this.props} />
				</div>
			)
		}
	}

	return connect(null, { fetchTeam })(FetchTeam);
}