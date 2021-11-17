import { RECEIVE_ADMIN, RECEIVE_USER } from "../actions/user_actions";

const UsersReducer = (state = {all: {}, admin: {}}, action) => {
Object.freeze(state);
let newState = Object.assign({}, state);

switch (action.type) {
  case RECEIVE_USER:
    const newUser = {[action.user.data._id]: action.user.data};
    let newAll = Object.assign({}, state.all, newUser);
    newState.all = newAll;
    return newState;
  case RECEIVE_ADMIN:
    const newAdmin = {[action.admin.data._id]: action.admin.data}
    newState.admin = newAdmin;
    return newState;
  default:
    return state;
}

};

export default UsersReducer;