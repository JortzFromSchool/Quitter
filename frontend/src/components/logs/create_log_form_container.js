import { connect } from 'react-redux';

import { closeModal } from '../../actions/modal_actions';
import {createLog} from '../../actions/log_actions';
import { fetchUserLogsByHabit } from '../../actions/log_actions';
import LogForm from './log_form';

const mapStateToProps = ({session, errors}, ownProps) => {
  return {
    errors: errors.session,
    user: session.user,
    habit: ownProps.habitId,
    formType: 'Create Log'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserLogsByHabit: (userId, habitId) => dispatch(fetchUserLogsByHabit(userId, habitId)),
    processForm: (log) => dispatch(createLog(log)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogForm);