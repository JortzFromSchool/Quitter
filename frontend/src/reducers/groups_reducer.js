import { 
  RECEIVE_GROUPS, RECEIVE_GROUP, REMOVE_GROUP
} from "../actions/group_actions";

const GroupsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_GROUPS:
      return {
        ...state, ...action.groups
      }

    case RECEIVE_GROUP:
      return {
        ...state, [action.group.id]: action.group
      }

    case REMOVE_GROUP:
      let nextState = Object.assign({}, state);
      delete nextState[action.groupId]
      return nextState;
  
    default:
      return state;
  }
};

export default GroupsReducer;