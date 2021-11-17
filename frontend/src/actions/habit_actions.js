import {getHabits} from '../util/habit_api_util';

export const RECEIVE_HABITS = "RECEIVE_HABITS";

export const receiveHabits = habits => {
    let habitsByKey = {};
    habits.data.forEach((value) => (
        habitsByKey[value._id] = value
    ));
    return ({
    type: RECEIVE_HABITS,
    habitsByKey
})};

export const fetchHabits = () => dispatch => (
    getHabits()
    .then(habits => dispatch(receiveHabits(habits)))
    .catch(err => console.log(err))
);