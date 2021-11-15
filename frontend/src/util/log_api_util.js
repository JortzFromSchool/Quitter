import axios from 'axios';

export const getLogs = () => {
    return axios.get('/api/logs')
};

export const getUserLogs = id => {
    return axios.get('/api/logs/user/${id}')
};

export const createLog = data => {
    return axios.post('/api/logs/', data)
};