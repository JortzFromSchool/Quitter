import { combineReducers } from 'redux';
import LogsReducer from './logs_reducer';
import HabitsReducer from './habits_reducer';

export default combineReducers({
    logs: LogsReducer,
    habits: HabitsReducer
});
