import React from 'react';
import './user_show.css';
import Moment from 'react-moment';

class LogShow extends React.Component {
    render() {
        let logTimeVariable = new Date(this.props.logTime);
        // let logTimeVariablePlusFive = new Date(logTimeVariable.getTime() + 5*60*60*1000)
    
        return (
            <div className="log-show">
                {this.props.description ? <div><strong>Description:</strong> &nbsp; {this.props.description}</div> : null}
                <div><strong>Date:</strong> &nbsp; {logTimeVariable.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' })}</div>
                <div><strong>Time:</strong> &nbsp; {logTimeVariable.toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })}</div>
            </div>
        );
    };
};

export default LogShow;