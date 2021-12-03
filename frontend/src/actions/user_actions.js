import { getUser, addHabitToCurrentUser, removeHabitFromCurrentUser } from '../util/user_api_util';
import { removeHabit } from './habit_actions';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ADMIN = 'RECEIVE_ADMIN';
export const WIPE_USERS = 'WIPE_USERS';

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const receiveAdmin = admin => ({
  type: RECEIVE_ADMIN,
  admin
});

export const wipeUsers = () => ({
  type: WIPE_USERS
})

export const fetchUser = userId => dispatch => (
  getUser(userId)
    .then(user => dispatch(receiveUser(user)))
    .catch(err => console.log(err))
);

export const fetchAdmin = adminId => dispatch => (
  getUser(adminId)
    .then(admin => dispatch(receiveAdmin(admin)))
    .catch(err => console.log(err))
);

export const addHabitToLoggedInUser = (habitId) => dispatch => (
  addHabitToCurrentUser(habitId)
    .then(user => dispatch(receiveUser(user)))
    .catch(err => console.log(err))
);

export const removeHabitFromLoggedInUser = (habitId) => dispatch => (
  removeHabitFromCurrentUser(habitId)
    .then(user => dispatch(receiveUser(user)))
    .then(() => dispatch(removeHabit(habitId)))
    .catch(err => console.log(err))
);