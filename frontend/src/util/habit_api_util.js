import axios from 'axios';

export const getHabits = () => {
    return axios.get('/api/habits')
};

export const getHabit = (habitId) => {
    return axios.get(`api/habits/${habitId}`)
};

export const makeHabit = (userId, habit) => {
    return axios.post(`/api/habits/user/${userId}`, habit)
};

export const deleteHabit = (habitId, userId) => {
    return axios.post(`api/habits/${habitId}/user/${userId}`)
};

