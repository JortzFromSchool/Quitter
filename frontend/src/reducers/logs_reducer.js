import { RECEIVE_LOGS, 
    RECEIVE_USER_LOGS, 
    RECEIVE_NEW_LOG, 
    RECEIVE_USER_LOGS_BY_HABIT,
    RECEIVE_USER_LOGS_BY_USER,
    WIPE_LOGS_BY_HABIT } from '../actions/log_actions';

const LogsReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_LOGS:
            newState.all = action.logs.data;
            return newState;
        case RECEIVE_USER_LOGS:
            newState.user = action.logs.data;
            return newState;
        case RECEIVE_NEW_LOG:
            newState.new = action.log.data;
            return newState;
        case RECEIVE_USER_LOGS_BY_HABIT:
            if(action.habitLogs) {
                const newLogsByHabit = { [action.habitLogs.habitId]: action.habitLogs.logsByHabit};
                let newAll = Object.assign({}, state.all, newLogsByHabit);
                newState.all = newAll;
            }
            return newState;
        case RECEIVE_USER_LOGS_BY_USER:
            if(action.userLogs){
                const newLogsByUser = {[action.userLogs.userId]: action.userLogs.logsByHabit}
                let newAll = Object.assign({},state.all, newLogsByUser)
                newState.all = newAll;
            }
            return newState;
        case WIPE_LOGS_BY_HABIT:
            newState.all = {};
            return newState;
        default:
            return state;
    }
};

export default LogsReducer;