import { RECEIVE_USER } from "../actions/user_actions";

const UsersReducer = (state = {}, action) => {
Object.freeze(state);
let newState = Object.assign({}, state);

switch (action.type) {
  case RECEIVE_USER:
    // console.log(action.user)
    return {
      ...state, [action.user.data._id]: action.user.data
    }

  default:
    return state;
}

};

export default UsersReducer;