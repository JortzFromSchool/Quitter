import React from 'react';
import { withRouter } from 'react-router-dom';
import LogShow from './log_show';

class Logs extends React.Component {

    countLogsPerDay(logs) {
        const count = {};
        for (let i = 0; i < logs.length; i++) {
            if (!count[(new Date(logs[i].logTime)).getDate()]) {
                count[(new Date(logs[i].logTime)).getDate()] = 0;
            }
            count[(new Date(logs[i].logTime)).getDate()] += 1;
        }
        return count;
    }

    formatData(countHash) {
        const data = [];
        const uniqueDates = [];
        for (let i = 0; i < this.props.logs.data.length; i++) {
            let logDate = this.props.logs.data[i].logTime.slice(0,10);
            if (!uniqueDates.includes(logDate)) {
                uniqueDates.push(logDate)
            }
        }
        const numOfLogs = Object.values(countHash);
        for (let i = 0; i < numOfLogs.length; i++) {
            data.push({date: new Date(uniqueDates[i].replace(/-/g, '\/')), value: numOfLogs[i]})
        }
        return data;
    }

    render() {
        if (this.props.logs.data.length === 0) {
            return (<div>
                        <div>There are no logs</div>
                        {this.props.logForm(this.props.habitId)}
                    </div>)
        } else {
            const countHash = this.countLogsPerDay(this.props.logs.data)
            const data = this.formatData(countHash);
            return (
                <div>
                    {/* <h2>All Logs for {this.props.habit.name}</h2> */}
                    {this.props.logs.data.map((log, index) => (
                        <LogShow 
                        key={log._id} 
                        description={log.description}
                        logTime={log.logTime}
                        />
                    ))}
                    {this.props.logForm(this.props.habitId)}
                </div>
            );
        }
    }
}

export default withRouter(Logs);