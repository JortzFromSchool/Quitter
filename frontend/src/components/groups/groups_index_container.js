import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { fetchGroups, destroyGroup } from '../../actions/group_actions';
import GroupsIndex from './groups_index';

const mSTP = state => ({
  groups: state.entities.groups
});

const mDTP = dispatch => ({
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