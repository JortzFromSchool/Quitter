import { connect } from 'react-redux';
import React from 'react';

import { openModal, closeModal } from '../../actions/modal_actions';
import {createLog} from '../../actions/log_actions';
import LogForm from './log_form';

const mapStateToProps = ({session, errors}, ownProps) => {
  return {
    errors: errors.session,
    user: session.user,
    formType: 'Create Log'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (log) => dispatch(createLog(log)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogForm);