import { connect } from 'react-redux';
import { fetchHabit, createHabit } from '../../actions/habit_actions';
import { closeModal } from '../../actions/modal_actions';
import {fetchUserLogsByHabit} from '../../actions/log_actions';
import HabitForm from './habit_form';

const mSTP = state => ({
    currentUser: state.session.user,
    formType: 'Create Habit'
  });

const mDTP = dispatch => ({
    fetchHabit: (habitId) => dispatch(fetchHabit(habitId)),
    fetchUserLogsByHabit: (userId, habitId) => dispatch(fetchUserLogsByHabit(userId, habitId)),
    processForm: (userId, habit) => dispatch(createHabit(userId, habit)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(HabitForm)