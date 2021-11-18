import { connect } from 'react-redux';
import { fetchGroup, removeUserFromGroup, addUserToGroup } from '../../actions/group_actions';
import { fetchAdmin, fetchUser, wipeUsers } from '../../actions/user_actions';
import { fetchUserLogsByHabit, wipeLogsByHabit } from '../../actions/log_actions';
import { fetchHabits } from '../../actions/habit_actions';
import { openModal } from '../../actions/modal_actions';
import GroupShow from './group_show';

const mSTP = state => {
  return {
    group: state.entities.groups.data,
    admin: state.entities.users.admin,
    habits: state.entities.habits.all,
    currentUser: state.session.user,
    logs: state.entities.logs.all,
    users: state.entities.users.all
  }
};

const mDTP = dispatch => ({
  fetchGroup: groupId => dispatch(fetchGroup(groupId)),
  fetchAdmin: adminId => dispatch(fetchAdmin(adminId)),
  fetchHabits: () => dispatch(fetchHabits()),
  removeUserFromGroup: (groupId, userId) => dispatch(removeUserFromGroup(groupId, userId)),
  addUserToGroup: (groupId, userId) => dispatch(addUserToGroup(groupId, userId)),
  fetchUserLogsByHabit: (userId, habitId) => dispatch(fetchUserLogsByHabit(userId, habitId)),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  wipeLogsByHabit: () => dispatch(wipeLogsByHabit()),
  wipeUsers: () => dispatch(wipeUsers()),
  logForm: (habitId) => (
    <button onClick={() => dispatch(openModal('log', habitId))}>
      Log Session
    </button>
  )
});

export default connect(mSTP, mDTP)(GroupShow)