import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

class TimeUntil extends React.Component {

    constructor(props) {
        super(props) 

    }

    getAvgDiffBetweenLogs(logs) {
        const justTimes = [];
        for (let i = 0; i < logs.length; i++) {
            let logTimeIntoDate = new Date(logs[i].logTime)
            let logTimeIntoDatePlusFive = new Date(logTimeIntoDate.getTime() + 5*60*60*1000)
            justTimes.push(logTimeIntoDatePlusFive);
        }
        const sortedTimes = justTimes.sort((a, b) => b - a);
        this.mostRecentLog = sortedTimes[0];
        const diffs = [];
        let sumOfDiffs = 0;
        for (let i = 1; i < sortedTimes.length; i++) {
            diffs.push((sortedTimes[i-1] - sortedTimes[i]) / (1000 * 60))
        }
        for (let i = 0; i < diffs.length; i++) {
            sumOfDiffs += diffs[i];
        }
        const avgDiff = sumOfDiffs / diffs.length;
        return avgDiff;
    }

    render() {
        const avgDiffInMins = this.getAvgDiffBetweenLogs(this.props.logs)
        let numberOfMinsToAdd = avgDiffInMins.toFixed(1) + 30;
        const currentDate = new Date()
        let timeUntilLog = new Date(this.mostRecentLog.getTime() + numberOfMinsToAdd*60000);
        let stringTimeUntilLog = timeUntilLog.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit',  hour: 'numeric', hour12: true, minute: 'numeric' })
        let avgDiffDisplay = null;
        if (avgDiffInMins > 60) {
            avgDiffDisplay = <div>Average time between sessions:<br/>{parseInt(avgDiffInMins / 60)} hrs and {(avgDiffInMins % 60).toFixed()} mins </div>
        } else {
            avgDiffDisplay = <div>Average time between sessions: {avgDiffInMins.toFixed()} </div>
        }
        
        if (currentDate < timeUntilLog) {
            return (
                <div className="log-time-msg bad">
                    <p>If you hold off until:<br/><span className="time-until-date">{stringTimeUntilLog}</span><br/> You will be on pace to quitting!</p><br/>
                    {avgDiffDisplay}
                </div>
            )
        } else {
            return (
                <div className="log-time-msg good">You are on pace to quitting! Keep it up, quitter!</div>
            ) 
        }
    }
};

export default TimeUntil;