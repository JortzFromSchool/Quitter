import React from 'react';

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
            diffs.push((sortedTimes[i-1] - sortedTimes[i]) / 36e5)
        }
        for (let i = 0; i < diffs.length; i++) {
            sumOfDiffs += diffs[i];
        }
        const avgDiff = sumOfDiffs / diffs.length;
        return avgDiff;
    }

    render() {
        console.log(this.props)
        const avgDiff = this.getAvgDiffBetweenLogs(this.props.logs)
        const numHrsBetweenNowAndLastLog = (new Date() - this.mostRecentLog) / 36e5;
        const numHrsToWait = parseInt(avgDiff) + 1 - numHrsBetweenNowAndLastLog;

        if (numHrsToWait < 0) {
            return (
                <div>You may {this.props.habitName}! </div>
            )
        } else {
            return (
                <div>Wait {numHrsToWait} hrs to {this.props.habitName}: </div>
            )
        }
    }
};

export default TimeUntil;