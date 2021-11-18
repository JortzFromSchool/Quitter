import React from 'react';
import { withRouter } from 'react-router-dom';
import LogShow from './log_show';
import Plot from 'react-plotly.js';
import TimeUntil from './time_until';
import './user_show.css';

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

    formatData(countHash, sortedData) {
        const uniqueDates = [];
        for (let i = 0; i < sortedData.length; i++) {
            let logDate = sortedData[i].logTime.slice(0,10);
            if (!uniqueDates.includes(logDate)) {
                uniqueDates.push(logDate)
            }
        }
        const numOfLogs = Object.values(countHash);

        return [uniqueDates,numOfLogs]
    }

    render() {
        if (this.props.logs.data.length === 0) {
            return (<div className="no-logs-container">
                        <div>There are no logs for {this.props.habit.name}.</div>
                        <div className="log-form-btn">
                            {this.props.logForm(this.props.habit._id)}
                        </div>
                    </div>)
        } else {
            const sortedData = this.props.logs.data.sort((a,b) => (a.logTime > b.logTime) ? 1 : -1)
            const countHash = this.countLogsPerDay(sortedData);
            const data = this.formatData(countHash, sortedData);
            if(!this.props.habit) {
                return null;
            }
            return (
                <div className="habit-log-container">
                    <div className="plot-logs-container">
                        <div className="plot-container">
                        <Plot
                            data={[
                            {
                                x: data[0],
                                y: data[1],
                                type: 'scatter',
                                // mode: 'lines',
                                line: {
                                    color: 'rgb(247,148,28)',
                                    width: 3
                                }
                            },
                            ]}
                            layout={ {
                                width: 500, 
                                height: 400, 
                                title: {
                                    text: `${this.props.habit.name.slice(0,1).toUpperCase() + this.props.habit.name.slice(1)}`,
                                    // text: {habitIcon},
                                    font: {size: 22, family: 'Montserrat, sans-serif'
                                        // color: 'rgb(247,148,28)'
                                    }
                                },
                                xaxis: {tickformat: '%m/%d'},
                                yaxis: {dtick: 1},
                            } }
                        />
                        </div>
                        <div className="log-container">
                            <h2 className="log-container-header">Your most recent {this.props.habit.name} sessions:</h2>
                            {sortedData.slice(-3).map((log, index) => (
                                <LogShow 
                                key={log._id} 
                                description={log.description}
                                logTime={log.logTime}
                                />
                            ))}
                        </div>
                    </div>
                        <div className="log-container-footer">
                            <TimeUntil 
                            logs={this.props.logs.data}
                            habitName={this.props.habit.name} 
                            className="time-until"/>
                            <div className="log-form-btn">
                                {this.props.logForm(this.props.habit._id)}
                            </div>
                    </div>
                </div>
            );
        }
    }
}

export default withRouter(Logs);