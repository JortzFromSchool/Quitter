import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import LogErrorsReducer from './log_errors_reducer';

export default combineReducers({
  session: SessionErrorsReducer,
  log: LogErrorsReducer
});