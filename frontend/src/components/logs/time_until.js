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
        this.sumOfAllDiffs = sumOfDiffs;
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

            return <div className='avg-time-proper'>
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

            return <div className='avg-time-proper'>
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

            return <div className='avg-time-proper'>
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

            return <div className='avg-time-proper'>
                {days} days,&nbsp;
                {hrs} hrs, and&nbsp;
                {remainingMinsAfterHrs.toFixed()} mins
            </div> 
        } else if (avgDiffInMins < 60 * 24 && avgDiffInMins >= 60) {
            let hrs = parseInt(avgDiffInMins / 60)

            let remainingMinsAfterHrs = avgDiffInMins % (60);

            return <div className='avg-time-proper'>
                {hrs} hrs and&nbsp;
                {remainingMinsAfterHrs.toFixed()} mins
            </div>
        } else {
            return <div className='avg-time-proper'>
                {avgDiffInMins.toFixed()} mins
            </div>
        }
        
    }

    render() {
        const delta = 2*60
        const avgDiffInMins = this.getAvgDiffBetweenLogs(this.props.logs)
        let numberOfMinsToAdd = (avgDiffInMins + delta)*this.props.logs.length - this.sumOfAllDiffs;
        const currentDate = new Date()
        let timeUntilLog = new Date(this.mostRecentLog.getTime() + numberOfMinsToAdd*1000*60);
        let stringTimeUntilLog = timeUntilLog.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit',  hour: 'numeric', hour12: true, minute: 'numeric' });
        let oldAvgDiffInMins = this.getOldAvg(this.props.logs)

        if (this.props.logs.length < 2) {
            return <div id='no-logs-stats'>Stats will appear after another log</div>;
        } else if (this.props.logs.length === 2) {
            if (currentDate < timeUntilLog) {
                return (
                    <div className='log-time-msg'>
                        <p>If you hold off until:<br/><span className='time-until-date'>{stringTimeUntilLog}</span><br/> You will be on pace to quitting!</p>
                        <div className='avg-time-disp'>
                            Average time between sessions:
                            {this.displayAvgDiff(avgDiffInMins)}
                        </div>
                    </div>
                )
            } else {
                return (
                        <div className='log-time-msg'>
                            Average time between sessions:
                            {this.displayAvgDiff(avgDiffInMins)}
                        </div>
                )
            }
        } else if (this.props.logs.length > 2) {
            if (avgDiffInMins > oldAvgDiffInMins && currentDate >= timeUntilLog) {
                return (
                    <div className='log-time-msg good'>
                        You are on pace to quitting! Keep it up, quitter!
                        <div className='avg-time-disp'>
                            Average time between sessions: <br/>
                            <div className='avg-time'>
                                <img className='arrow' src={Up} /> {this.displayAvgDiff(avgDiffInMins)}
                            </div>
                        </div>
                    </div>
                )  
            } else if (avgDiffInMins > oldAvgDiffInMins && currentDate < timeUntilLog) {
                return (
                    <div className='log-time-msg good'>
                        You are on pace to quitting! Keep it up, quitter!
                        <p>If you hold off until:<br/><span className='time-until-date'>{stringTimeUntilLog}</span><br/> You will continue to be on pace to quitting!</p>
                        <div className='avg-time-disp'>
                            Average time between sessions: <br/>
                            <div className='avg-time'>
                                <img className='arrow' src={Up} /> {this.displayAvgDiff(avgDiffInMins)}
                            </div>
                        </div>
                    </div> 
                )
            } else if (avgDiffInMins <= oldAvgDiffInMins) {
                return (
                    <div className='log-time-msg bad'>
                        <p>If you hold off until:<br/><span className='time-until-date'>{stringTimeUntilLog}</span><br/> You will be on pace to quitting!</p>
                        <div className='avg-time-disp'>
                            Average time between sessions: <br/>
                            <div className='avg-time'>
                                <img className='arrow' src={Down} />{this.displayAvgDiff(avgDiffInMins)}
                            </div>
                        </div>
                    </div> 
                )
            }
        }
    }
};

export default TimeUntil;