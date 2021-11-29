import {
    RECEIVE_LOG_ERRORS,
    WIPE_LOG_ERRORS
  } from '../actions/log_actions';
  
  const _nullErrors = {};
  
  const LogErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch(action.type) {
      case RECEIVE_LOG_ERRORS:
        return action.err;
      case WIPE_LOG_ERRORS:
        return _nullErrors;
      default:
        return state;
    }
  };
  
  export default LogErrorsReducer;