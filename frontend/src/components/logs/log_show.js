import React from 'react';
import './user_show.css';
import Moment from 'react-moment';

class LogShow extends React.Component {
    render() {
        let logTimeVariable = new Date(this.props.logTime);
    
        return (
            <div className="log-show">
                {this.props.description ? <div><strong className="log-show-label">Description:</strong> &nbsp; <strong>{this.props.description}</strong></div> : null}
                <div><strong className="log-show-label">Date:</strong> &nbsp; <strong>{logTimeVariable.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' })}</strong></div>
                <div><strong className="log-show-label">Time:</strong> &nbsp; <strong>{logTimeVariable.toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })}</strong></div>
            </div>
        );
    };
};

export default LogShow;