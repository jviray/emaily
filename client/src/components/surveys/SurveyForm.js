import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
  { label: 'Survey Title', name: 'title' },
  { label: 'Subject Line', name: 'subject' },
  { label: 'Email Body', name: 'body' },
  { label: 'Recipient List', name: 'emails' }
];

class SurveyForm extends Component {
  renderFields() {
    return (
      <div>
        {FIELDS.map(({ label, name }) => {
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
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Review
            <i className="material-icons right" style={{ marginLeft: '0px' }}>
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
  errors.emails = validateEmails(values.emails || '');

  // Checks if user has input values for each field
  FIELDS.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = '* Required';
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm'
})(SurveyForm);
