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
            justTimes.push(new Date(logs[i].logTime));
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
        const currentDate = new Date();
        let newDateObj = new Date(currentDate.getTime() + numberOfMinsToAdd*60000);
        const timeSinceLastLog = (currentDate - this.mostRecentLog) / (1000 * 60)
        
        if (timeSinceLastLog < avgDiffInMins) {
            return (
                <div>
                    <div>If you hold off until </div><Moment date={newDateObj} /><div>you will be on pace to quitting!</div>
                </div>
            )
        } else {
            return (
                <div>You are on pace to quitting!</div>
            ) 
        }
    }
};

export default TimeUntil;