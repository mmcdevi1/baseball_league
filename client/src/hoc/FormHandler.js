import React from 'react';

export default function (ComposedComponent) {

	class FormHandler extends React.Component {
		onHandleSubmit = (callback, data, history) => {
			callback(data, history);
		}

		render () {
			return (
				<div>
					<ComposedComponent onHandleSubmit={this.onHandleSubmit} {...this.props} />
				</div>
			)
		}
	}

	return FormHandler;
}