import React from 'react';

class Team extends React.Component {
	render () {
		return (
			<div>
				{this.props.name}
			</div>
		)
	}
}

export default Team;