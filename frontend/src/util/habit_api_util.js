import axios from 'axios';

export const getHabits = () => {
    return axios.get('/api/habits')
};

