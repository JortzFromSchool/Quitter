import { getLogs, getUserLogs, makeLog , getLogsByUserAndHabit} from '../util/log_api_util';

export const RECEIVE_LOGS = "RECEIVE_LOGS";
export const RECEIVE_USER_LOGS = "RECEIVE_USER_LOGS";
export const RECEIVE_NEW_LOG = "RECEIVE_NEW_LOG";
export const RECEIVE_USER_LOGS_BY_HABIT = "RECEIVE_USER_LOGS_BY_HABIT";
export const WIPE_LOGS_BY_HABIT = "WIPE_LOGS_BY_HABIT";

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

export const createLog = data => dispatch => (
    makeLog(data)
    .then(log => dispatch(receiveNewLog(log)))
    .catch(err => console.log(err))
);