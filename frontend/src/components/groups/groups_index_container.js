import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { fetchGroups, createGroup } from '../../actions/group_actions';
import GroupsIndex from './groups_index';

const mSTP = state => ({
  groups: state.entities.groups.data
});

const mDTP = dispatch => ({
  fetchGroups: () => dispatch(fetchGroups()),
  groupForm: (
    <button 
      className="create-group-btn" 
      onClick={() => dispatch(openModal('group'))}
    >
      Create Group
    </button>
  )
});

export default connect(mSTP, mDTP)(GroupsIndex)