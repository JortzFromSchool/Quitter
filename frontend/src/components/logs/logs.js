import React from 'react';
import { withRouter } from 'react-router-dom';
import LogShow from './log_show';
import Plot from 'react-plotly.js';
import TimeUntil from './time_until';

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
        // for (let i = 0; i < numOfLogs.length; i++) {
        //     dataset.push({time: new Date(uniqueDates[i].replace(/-/g, '\/')), value: numOfLogs[i]})
        // }

        return [uniqueDates,numOfLogs]
    }

    render() {
    
        if (this.props.logs.data.length === 0) {
            return (<div>
                        <div>There are no logs</div>
                        {this.props.logForm(this.props.habit._id)}
                    </div>)
        } else {
            const countHash = this.countLogsPerDay(this.props.logs.data)
            const data = this.formatData(countHash);
            return (
                <div>
                    <h2>All Logs for {this.props.habit.name}</h2>
                    {this.props.logs.data.map((log, index) => (
                        <LogShow 
                        key={log._id} 
                        description={log.description}
                        logTime={log.logTime}
                        />
                    ))}
                    <Plot
                        data={[
                        {
                            x: data[0],
                            y: data[1],
                            type: 'scatter',
                        },
                        ]}
                        layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
                    />
                    {this.props.logForm(this.props.habit._id)}
                    <TimeUntil 
                    logs={this.props.logs.data}
                    habitName={this.props.habit.name}/>
                </div>
            );
        }
    }
}

export default withRouter(Logs);