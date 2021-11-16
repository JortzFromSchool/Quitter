import { 
  RECEIVE_GROUPS, RECEIVE_GROUP, REMOVE_GROUP
} from "../actions/group_actions";

const GroupsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_GROUPS:
      newState = action.groupsByGroupId;
      return newState;
    case RECEIVE_GROUP:
      newState = action.group;
      return newState;
    case REMOVE_GROUP:
      let nextState = Object.assign({}, state);
      delete nextState[action.groupId]
      return nextState;
    default:
      return state;
  }
};

export default GroupsReducer;