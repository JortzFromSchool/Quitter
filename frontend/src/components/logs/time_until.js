import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import Up from '../../assets/up.png';
import Down from '../../assets/down.png';
import './time_until.css';

class TimeUntil extends React.Component {

    constructor(props) {
        super(props) 

    }

    getAvgDiffBetweenLogs(logs) {
        const justTimes = [];
        for (let i = 0; i < logs.length; i++) {
            let logTimeIntoDate = new Date(logs[i].logTime)
            justTimes.push(logTimeIntoDate);
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

    getOldAvg(logs) {
        const justTimes = [];
        for (let i = 0; i < logs.length; i++) {
            let logTimeIntoDate = new Date(logs[i].logTime)
            justTimes.push(logTimeIntoDate);
        }
        const sortedTimes = justTimes.sort((a, b) => b - a);
        this.mostRecentLog = sortedTimes[0];
        const diffs = [];
        let sumOfDiffs = 0;
        for (let i = 2; i < sortedTimes.length; i++) {
            diffs.push((sortedTimes[i-1] - sortedTimes[i]) / (1000 * 60))
        }
        for (let i = 0; i < diffs.length; i++) {
            sumOfDiffs += diffs[i];
        }
        const avgDiff = sumOfDiffs / diffs.length;
        return avgDiff;
    }

    displayAvgDiff(avgDiffInMins) {
        if (avgDiffInMins >= 60*24*365.24) {

            let remainingMinsAfterYrs = avgDiffInMins % (60 * 24 * 365.24)
            let remainingMinsAfterMonths = remainingMinsAfterYrs % (60 * 24 * (365.24 / 12));
            let remainingMinsAfterWeeks = remainingMinsAfterMonths % (60 * 24 * 7)
            let remainingMinsAfterDays = remainingMinsAfterWeeks % (60 * 24);
            let remainingMinsAfterHrs = remainingMinsAfterDays % (60);

            let yrs = parseInt(avgDiffInMins / 60 / 24 / 365.24);
            let months = parseInt(remainingMinsAfterYrs / 60 / 24 / (365.24 / 12))
            let weeks = parseInt(remainingMinsAfterMonths / 60 / 24 / 7);
            let days = parseInt(remainingMinsAfterWeeks / 60 / 24)
            let hrs = parseInt(remainingMinsAfterDays / 60)

            return <div>
                {yrs} years,&nbsp;
                {months} months,&nbsp;
                {weeks} weeks,&nbsp;
                {days} days,&nbsp;
                {hrs} hrs, and&nbsp;
                {remainingMinsAfterHrs.toFixed()} mins
            </div>
        } else if (avgDiffInMins < 60*24*365.24 && avgDiffInMins >= 60 * 24 * 365.24 / 12) {
            let remainingMinsAfterMonths = avgDiffInMins % (60 * 24 * (365.24 / 12));
            let remainingMinsAfterWeeks = remainingMinsAfterMonths % (60 * 24 * 7);
            let remainingMinsAfterDays = remainingMinsAfterMonths % (60 * 24);
            let remainingMinsAfterHrs = remainingMinsAfterDays % (60);

            let months = parseInt(avgDiffInMins / 60 / 24 / (365.24 / 12));
            let weeks = parseInt(remainingMinsAfterMonths / 60 / 24 / 7);
            let days = parseInt(remainingMinsAfterWeeks / 60 / 24)
            let hrs = parseInt(remainingMinsAfterDays / 60)

            return <div>
                {months} months,&nbsp;
                {weeks} weeks,&nbsp;
                {days} days,&nbsp;
                {hrs} hrs, and&nbsp;
                {remainingMinsAfterHrs.toFixed()} mins
            </div> 
        } else if (avgDiffInMins < 60 * 24 * 365.24 / 12 && avgDiffInMins >= 60 * 24 * 7) {
            let remainingMinsAfterWeeks = avgDiffInMins % (60 * 24 * 7);
            let remainingMinsAfterDays = remainingMinsAfterWeeks % (60 * 24);
            let remainingMinsAfterHrs = remainingMinsAfterDays % 60;

            let weeks = parseInt(avgDiffInMins / 60 / 24 / 7);
            let days = parseInt(remainingMinsAfterWeeks / 60 / 24)
            let hrs = parseInt(remainingMinsAfterDays / 60);

            return <div>
                {weeks} months,&nbsp;
                {days} days,&nbsp;
                {hrs} hrs, and&nbsp;
                {remainingMinsAfterHrs.toFixed()} mins
            </div>

        }   else if (avgDiffInMins < 60 * 24 * 365.24 / 12 && avgDiffInMins >= 60 * 24) {
            let remainingMinsAfterDays = avgDiffInMins % (60 * 24);
            let remainingMinsAfterHrs = remainingMinsAfterDays % (60);

            let days = parseInt(avgDiffInMins / 60 / 24)
            let hrs = parseInt(remainingMinsAfterDays / 60)

            return <div>
                {days} days,&nbsp;
                {hrs} hrs, and&nbsp;
                {remainingMinsAfterHrs.toFixed()} mins
            </div> 
        } else if (avgDiffInMins < 60 * 24 && avgDiffInMins >= 60) {
            let hrs = parseInt(avgDiffInMins / 60)

            let remainingMinsAfterHrs = avgDiffInMins % (60);

            return <div>
                {hrs} hrs and&nbsp;
                {remainingMinsAfterHrs.toFixed()} mins
            </div>
        } else {
            return <div>
                {avgDiffInMins.toFixed()} mins
            </div>
        }
        
    }

    render() {
        const avgDiffInMins = this.getAvgDiffBetweenLogs(this.props.logs)
        let numberOfMinsToAdd = avgDiffInMins.toFixed(1) + 30;
        const currentDate = new Date()
        let timeUntilLog = new Date(this.mostRecentLog.getTime() + numberOfMinsToAdd*60000);
        let stringTimeUntilLog = timeUntilLog.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit',  hour: 'numeric', hour12: true, minute: 'numeric' });
        let oldAvg = this.getOldAvg(this.props.logs)

        console.log('below is oldAvg')
        console.log(oldAvg)
        console.log('below is current avg')
        console.log(avgDiffInMins)

        if (currentDate < timeUntilLog) {
            return (
                <div className="log-time-msg bad">
                    {avgDiffInMins > oldAvg ?  <div>You are on pace to quitting! Keep it up, quitter!</div> : null}
                    <p>If you hold off until:<br/><span className="time-until-date">{stringTimeUntilLog}</span><br/> You will be on pace to quitting!</p><br/>
                    Average time between sessions: <br/>
                    <div id='average-time'>
                        {avgDiffInMins > oldAvg ?  <img className='arrow' src={Up} /> : <img className='arrow' src={Down} />}
                        {this.displayAvgDiff(avgDiffInMins)}
                    </div>
                </div>
            )
        } else if (this.props.logs.length < 3) {
            return null;
        } else {
            return (
                <div className="log-time-msg good">
                    You are on pace to quitting! Keep it up, quitter!
                    <div id='average-time'>
                        Average time between sessions: <br/>
                        {avgDiffInMins > oldAvg ?  <img className='arrow' src={Up} /> : <img className='arrow' src={Down} />}
                        {this.displayAvgDiff(avgDiffInMins)}
                    </div>
                </div>
            ) 
        }
    }
};

export default TimeUntil;