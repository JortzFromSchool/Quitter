import {getHabits, getHabit, makeHabit, deleteHabit} from '../util/habit_api_util';

export const RECEIVE_HABITS = "RECEIVE_HABITS";
export const RECEIVE_HABIT = "RECEIVE_HABIT";
export const REMOVE_HABIT = "REMOVE_HABIT";
export const WIPE_HABITS = "WIPE_HABITS";

const receiveHabit = habit => ({
    type: RECEIVE_HABIT,
    habit
});

export const receiveHabits = habits => {
    let habitsByKey = {};
    habits.data.forEach((value) => (
        habitsByKey[value._id] = value
    ));
    return ({
    type: RECEIVE_HABITS,
    habitsByKey
})};

const removeHabit = (habitId) => ({
    type: REMOVE_HABIT,
    habitId
});

export const wipeHabits = () => ({
    type: WIPE_HABITS
})

export const fetchHabits = () => dispatch => (
    getHabits()
    .then(habits => dispatch(receiveHabits(habits)))
    .catch(err => console.log(err))
);

export const fetchHabit = (habitId) => dispatch => (
    getHabit(habitId)
    .then(habit => dispatch(receiveHabit(habit)))
    .catch(err => console.log(err))
)

export const createHabit = (userId, habit) => dispatch => (
    makeHabit(userId, habit)
    .then(createdHabit => dispatch(receiveHabit(createdHabit)))
    .catch(err => console.log(err))
)

export const destroyHabit = (habitId, userId) => dispatch => (
    deleteHabit(habitId, userId)
    .then(() => dispatch(removeHabit(habitId)))
    .catch(err => console.log(err))
)