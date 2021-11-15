import React from 'react';

class LogShow extends React.Component {
    render() {
        return (
            <div>
                <div>Description: {this.props.description}</div>
                <div>logTime: {this.props.logTime}</div>
            </div>
        );
    };
};

export default LogShow;