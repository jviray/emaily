// This component shows users their form inputs for review
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = formFields.map(({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries!</h5>
      {reviewFields}
      <button
        className="yellow white-text darken-2 btn-flat"
        onClick={onCancel}
      >
        Back
        <i
          className="material-icons left"
          style={{ marginLeft: '-5px', marginRight: '0px' }}
        >
          navigate_before
        </i>
      </button>
      <button
        onClick={() => submitSurvey(formValues, history)}
        className="green white-text btn-flat right"
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

// Takes state from Redux store and transforms it into props to send down to component
function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(SurveyFormReview));
