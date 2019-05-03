import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
  renderFields() {
    return (
      <div>
        {formFields.map(({ label, name }) => {
          return (
            <Field
              key={name}
              name={name}
              label={label}
              type="text"
              component={SurveyField}
            />
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <div style={{ marginTop: '50px' }}>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Review
            <i
              className="material-icons right"
              style={{ marginLeft: '0px', marginRight: '-5px' }}
            >
              navigate_next
            </i>
          </button>
        </form>
      </div>
    );
  }
}

// Runs automatically when app boots up
function validate(values) {
  const errors = {};

  // Passes empty string if values is undefined
  errors.recipients = validateEmails(values.recipients || '');

  // Checks if user has input values for each field
  formFields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = '* Required';
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
