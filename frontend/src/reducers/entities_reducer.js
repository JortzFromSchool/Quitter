import { combineReducers } from 'redux';
import LogsReducer from './logs_reducer';
import HabitsReducer from './habits_reducer';
import GroupsReducer from './groups_reducer';

export default combineReducers({
    logs: LogsReducer,
    habits: HabitsReducer,
    groups: GroupsReducer
});
