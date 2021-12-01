import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { createGroup, fetchGroups } from '../../actions/group_actions';
import { fetchHabits, fetchHabit } from '../../actions/habit_actions';
import { closeModal } from '../../actions/modal_actions';
import GroupForm from './group_form';

const mSTP = state => ({
  habits: Object.values(state.entities.habits.all),
  group: {
    name: '',
    habitId: ''
  },
  formType: 'Create Group',
  currentUser: state.session.user,
  users: state.entities.users.all
});

const mDTP = dispatch => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchGroups: () => dispatch(fetchGroups()),
  fetchHabit: (habitId) => dispatch(fetchHabit(habitId)),
  fetchHabits: () => dispatch(fetchHabits()), 
  processForm: group => dispatch(createGroup(group)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(GroupForm)