import { getUser } from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ADMIN = 'RECEIVE_ADMIN';

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const receiveAdmin = admin => ({
  type: RECEIVE_ADMIN,
  admin
});

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