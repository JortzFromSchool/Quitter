import { connect } from 'react-redux';
import { fetchGroups, createGroup } from '../../actions/group_actions';
import GroupsIndex from './groups_index';

const mSTP = state => ({
  groups: state.entities.groups.data
});

const mDTP = dispatch => ({
  fetchGroups: () => dispatch(fetchGroups()),
  createGroup: group => dispatch(createGroup(group))
});

export default connect(mSTP, mDTP)(GroupsIndex)