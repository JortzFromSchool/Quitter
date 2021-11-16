import { connect } from 'react-redux';
import { createGroup } from '../../actions/group_actions';
import { fetchHabits } from '../../actions/habit_actions';
import { closeModal } from '../../actions/modal_actions';
import GroupForm from './group_form';

const mSTP = state => ({
  group: {
    name: '',
    habitId: ''
  },
  formType: 'Create Group'
});

const mDTP = dispatch => ({
  fetchHabits: () => dispatch(fetchHabits()), 
  processForm: group => dispatch(createGroup(group)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(GroupForm)