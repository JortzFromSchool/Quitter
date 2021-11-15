import axios from 'axios';

export const getLogs = () => {
    return axios.get('/api/logs')
};

export const getUserLogs = id => {
    return axios.get(`/api/logs/user/${id}`)
};

export const makeLog = data => {
    return axios.post('/api/logs/', data)
};

export const getLogsByUserAndHabit = (userId, habitId) => {
    return axios.get(`/api/logs/user/${userId}/habit/${habitId}`)
}