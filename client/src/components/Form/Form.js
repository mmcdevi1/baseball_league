import React from 'react';
import { reduxForm, Field } from 'redux-form';

class Form extends React.Component {
	renderField (field) {
		const { label, type, input } = field;

		return (
			<div>
				<label>{ label }</label>
				<input type={type} {...input} />
			</div>
		)
	}

	onFormSubmit (team) {
		this.props.onHandleSubmit(team)
	}

  render () {
  	const { handleSubmit, onHandleSubmit } = this.props;

    return (
      <div>
      	<h1>Form</h1>
      	<form onSubmit={ handleSubmit( this.onFormSubmit.bind(this) ) }>
      		<div>
      			<Field 
      				type="text"
      				component={this.renderField}
      				label="Name"
      				name="name"
      			/>
      		</div>
      		<div>
      			<button type="submit">Submit</button>
      		</div>
      	</form>
      </div>
    )
  }
}

const form = reduxForm({
	form: 'form'
})(Form)

export default form