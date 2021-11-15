import { getLogs, getUserLogs, createLog } from '../util/log_api_util';

export const RECEIVE_LOGS = "RECEIVE_LOGS";
export const RECEIVE_USER_LOGS = "RECEIVE_USER_LOGS";
export const RECEIVE_NEW_LOG = "RECEIEVE_NEW_LOG";

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

export const createLog = data => dispatch => (
    createLog(data)
    .then(log => dispatch(receiveNewLog(log)))
    .catch(err => console.log(err))
);