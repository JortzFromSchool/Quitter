import {getHabits} from '../util/habit_api_util';

export const RECEIVE_HABITS = "RECEIVE_HABITS";

export const receiveHabits = habits => ({
    type: RECEIVE_HABITS,
    habits
});

export const fetchHabits = () => dispatch => (
    getHabits()
    .then(habits => dispatch(receiveHabits(habits)))
    .catch(err => console.log(err))
);