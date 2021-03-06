import { 
  getLogs, getUserLogs, 
  makeLog , getLogsByUserAndHabit
} from '../util/log_api_util';

export const RECEIVE_LOGS = "RECEIVE_LOGS";
export const RECEIVE_USER_LOGS = "RECEIVE_USER_LOGS";
export const RECEIVE_NEW_LOG = "RECEIVE_NEW_LOG";
export const RECEIVE_USER_LOGS_BY_HABIT = "RECEIVE_USER_LOGS_BY_HABIT";
export const RECEIVE_USER_LOGS_BY_USER = "RECEIVE_USER_LOGS_BY_USER";
export const WIPE_LOGS_BY_HABIT = "WIPE_LOGS_BY_HABIT";
export const RECEIVE_LOG_ERRORS = "RECEIVE_LOG_ERRORS";
export const WIPE_LOG_ERRORS = "WIPE_LOG_ERRORS";

export const receiveLogs = logs => ({
    type: RECEIVE_LOGS,
    logs
});

export const receiveUserLogs = logs => ({
    type: RECEIVE_USER_LOGS,
    logs
});

export const receiveNewLog = log => ({
    type: RECEIVE_NEW_LOG,
    log
});

export const wipeLogsByHabit = () => ({
    type: WIPE_LOGS_BY_HABIT
})

export const receiveUserLogsByHabit = (habitId, logs) => ({
    type: RECEIVE_USER_LOGS_BY_HABIT,
    habitLogs: {habitId: habitId, logsByHabit: logs}
})

export const receiveUserLogsByUser = (userId, logs) => ({
    type: RECEIVE_USER_LOGS_BY_USER,
    userLogs: {userId: userId, logsByHabit: logs}
})

export const receiveLogErrors = err => ({
    type: RECEIVE_LOG_ERRORS,
    err
})

export const wipeLogErrors = () => ({
    type: WIPE_LOG_ERRORS
})

export const fetchLogs = () => dispatch => (
    getLogs()
    .then(logs => dispatch(receiveLogs(logs)))
    .catch(err => console.log(err))
);

export const fetchUserLogs = id => dispatch => (
    getUserLogs(id)
    .then(logs => dispatch(receiveUserLogs(logs)))
    .catch(err => console.log(err))
);

export const fetchUserLogsByHabit = (userId, habitId) => dispatch => (
    getLogsByUserAndHabit(userId, habitId)
    .then(logs => dispatch(receiveUserLogsByHabit(habitId, logs)))
    .catch(err => console.log(err)) 
);

export const fetchUserLogsByUser = (userId, habitId) => dispatch => (
    getLogsByUserAndHabit(userId, habitId)
    .then(logs => dispatch(receiveUserLogsByUser(userId, logs)))
    .catch(err => console.log(err))
)

export const createLog = data => dispatch => (
    makeLog(data)
    .then(log => dispatch(receiveNewLog(log)))
    .catch(err => dispatch(receiveLogErrors(err)))
);