import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { fetchGroups, destroyGroup } from '../../actions/group_actions';
import { fetchUser, fetchAdmin } from '../../actions/user_actions';
import GroupsIndex from './groups_index';

const mSTP = state => {
  return {
    groups: state.entities.groups,
    admin: state.entities.users.admin,
  }
};

const mDTP = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  fetchGroups: () => dispatch(fetchGroups()),
  destroyGroup: groupId => dispatch(destroyGroup(groupId)),
  groupForm: (
    <button 
      className="create-group-btn" 
      onClick={() => dispatch(openModal('group', null))}
    >
      Create Group
    </button>
  )
});

export default connect(mSTP, mDTP)(GroupsIndex)