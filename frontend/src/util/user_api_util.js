import axios from 'axios';

export const getUser = userId => {
  return axios.get(`/api/users/${userId}`)
}

export const addHabitToCurrentUser = habitId => {
  return axios.patch(`/api/habits/add_habit/${habitId}`);
}

export const removeHabitFromCurrentUser = habitId => {
  return axios.patch(`/api/habits/remove_habit/${habitId}`);
}