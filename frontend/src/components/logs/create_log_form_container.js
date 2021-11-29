import { connect } from 'react-redux';

import { closeModal } from '../../actions/modal_actions';
import {createLog} from '../../actions/log_actions';
import { fetchUserLogsByHabit, wipeLogErrors } from '../../actions/log_actions';
import LogForm from './log_form';

const mapStateToProps = ({session, errors}, ownProps) => {
  return {
    errors: errors.log,
    user: session.user,
    habit: ownProps.habitId,
    formType: 'Log'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserLogsByHabit: (userId, habitId) => dispatch(fetchUserLogsByHabit(userId, habitId)),
    processForm: (log) => dispatch(createLog(log)),
    closeModal: () => dispatch(closeModal()),
    wipeLogErrors: () => dispatch(wipeLogErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogForm);