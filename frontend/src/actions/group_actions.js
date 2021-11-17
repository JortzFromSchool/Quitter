import { 
  getGroups, getGroup, 
  makeGroup, updateGroup, deleteGroup 
} from '../util/group_api_util';

export const RECEIVE_GROUPS = 'RECEIVE_GROUPS';
export const RECEIVE_GROUP = 'RECEIVE_GROUP';
export const REMOVE_GROUP = 'REMOVE_GROUP';

const receiveGroups = groups => {
  let groupsByGroupId = {};
  groups.data.forEach(group => (
    groupsByGroupId[group._id] = group
  ))
  return {
  type: RECEIVE_GROUPS,
  groupsByGroupId
  }
};

const receiveGroup = group => ({
  type: RECEIVE_GROUP,
  group
});

const removeGroup = groupId => ({
  type: REMOVE_GROUP,
  groupId
});

export const fetchGroups = () => dispatch => (
  getGroups()
    .then(groups => dispatch(receiveGroups(groups)))
    .catch(err => console.log(err))
);

export const fetchGroup = groupId => dispatch => (
  getGroup(groupId)
    .then(group => dispatch(receiveGroup(group)))
    .catch(err => console.log(err))
);

export const createGroup = group => dispatch => (
  makeGroup(group)
    .then(createdGroup => dispatch(receiveGroup(createdGroup)))
    .catch(err => console.log(err))
);

export const reviseGroup = group => dispatch => (
  updateGroup(group)
    .then(revisedGroup => dispatch(receiveGroup(revisedGroup)))
    .catch(err => console.log(err))
);

export const destroyGroup = groupId => dispatch => (
  deleteGroup(groupId)
    .then(() => dispatch(removeGroup(groupId)))
    .catch(err => console.log(err))
);