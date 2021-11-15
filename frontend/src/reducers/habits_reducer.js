import {RECEIVE_HABITS} from '../actions/habit_actions';

const HabitsReducer = (state = { all: {} }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_HABITS:
            newState.all = action.habits.data;
            return newState;
        default:
            return state;
    }
};

export default HabitsReducer;