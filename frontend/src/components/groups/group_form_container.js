import { connect } from 'react-redux';
import { createGroup, fetchGroups } from '../../actions/group_actions';
import { fetchHabits } from '../../actions/habit_actions';
import { closeModal } from '../../actions/modal_actions';
import GroupForm from './group_form';

const mSTP = state => ({
  habits: Object.values(state.entities.habits.all),
  group: {
    name: '',
    habitId: ''
  },
  formType: 'Create Group'
});

const mDTP = dispatch => ({
  fetchGroups: () => dispatch(fetchGroups()),
  fetchHabits: () => dispatch(fetchHabits()), 
  processForm: group => dispatch(createGroup(group)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(GroupForm)