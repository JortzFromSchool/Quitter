import {RECEIVE_HABITS, RECEIVE_HABIT, REMOVE_HABIT, WIPE_HABITS} from '../actions/habit_actions';

const HabitsReducer = (state = { all: {} }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_HABITS:
            newState.all = action.habitsByKey;
            return newState;
        case RECEIVE_HABIT:
            const newHabit = {[action.habit.data._id]: action.habit.data};
            let newAll = Object.assign({}, state.all, newHabit);
            newState.all = newAll;
            return newState;
        case REMOVE_HABIT:
            delete newState.all[action.habitId];
            return newState;
        case WIPE_HABITS:
            newState.all = {};
            return newState;
        default:
            return state;
    }
};

export default HabitsReducer;