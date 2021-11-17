import axios from 'axios';

export const getGroups = () => {
  return axios.get('/api/groups')
};

export const getGroup = groupId => {
  return axios.get(`/api/groups/${groupId}`)
};

export const makeGroup = group => {
  return axios.post('/api/groups', group)
};

export const updateGroup = group => {
  return axios.put(`/api/groups/${group.id}`)
};

export const deleteGroup = groupId => {
  return axios.delete(`/api/groups/${groupId}`)
}

export const removeUser = (groupId, userId) => {
  return axios.patch(`api/groups/remove_user/${userId}/group/${groupId}`)
}

export const addUser = (groupId, userId) => {
  return axios.patch(`api/groups/add_user/${userId}/group/${groupId}`)
}