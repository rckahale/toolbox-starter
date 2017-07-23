import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import cssModules from 'react-css-modules';
import { Button } from 'react-toolbox/lib/button/';
import { reduxForm } from 'redux-form';
import * as LandingActionCreators from './actions';
import styles from './index.module.scss';

export const formFields = [
  'nameInput',
];

class LandingContainer extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    const {
      actions,
      fields,
    } = this.props;
    const name = fields.nameInput.value || 'Unknown';
    actions.closeModal();
    actions.fakeSubmission(name);
  }
  render() {
    return (
      <div>
        <Button label="Like" flat primary type="submit" />
      </div>
    );
  }
}

LandingContainer.propTypes = {
  actions: PropTypes.object.isRequired, // eslint-disable-line
  isLoading: PropTypes.bool.isRequired,
  isShowingModal: PropTypes.bool.isRequired,
  fields: PropTypes.object.isRequired, // eslint-disable-line
  name: PropTypes.string,
  contributors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      github: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = state => ({
  isLoading: state.landing.isLoading,
  name: state.landing.name,
  isShowingModal: state.landing.isShowingModal,
  contributors: state.landing.contributors,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    LandingActionCreators,
    dispatch,
  ),
});

const Container = cssModules(LandingContainer, styles);

const FormContainer = reduxForm({
  form: 'Welcome',
  fields: formFields,
})(Container);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormContainer);
