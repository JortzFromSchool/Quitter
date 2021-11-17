import { getUser } from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

const recieveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const fetchUser = userId => dispatch => (
  getUser(userId)
    .then(user => dispatch(recieveUser(user)))
    .catch(err => console.log(err))
);