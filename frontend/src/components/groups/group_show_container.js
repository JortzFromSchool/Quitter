import { connect } from 'react-redux';
import { fetchGroup, removeUserFromGroup, addUserToGroup } from '../../actions/group_actions';
import { fetchAdmin, fetchUser } from '../../actions/user_actions';
import { fetchHabits } from '../../actions/habit_actions';
import GroupShow from './group_show';

const mSTP = state => {
  return {
    group: state.entities.groups.data,
    admin: state.entities.users.admin,
    habits: state.entities.habits.all,
    currentUser: state.session.user
  }
};

const mDTP = dispatch => ({
  fetchGroup: groupId => dispatch(fetchGroup(groupId)),
  fetchAdmin: adminId => dispatch(fetchAdmin(adminId)),
  fetchHabits: () => dispatch(fetchHabits()),
  removeUserFromGroup: (groupId, userId) => dispatch(removeUserFromGroup(groupId, userId)),
  addUserToGroup: (groupId, userId) => dispatch(addUserToGroup(groupId, userId))
});

export default connect(mSTP, mDTP)(GroupShow)