import { combineReducers } from 'redux';
import LogsReducer from './logs_reducer';

export default combineReducers({
    logs: LogsReducer,
});
