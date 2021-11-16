import React from 'react';
import { withRouter } from 'react-router-dom';
import LogShow from './log_show';

class Logs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("inside Logs component");
        if (this.props.logs.length === 0) {
            return (<div>There are no logs</div>)
        } else {
            return (
                <div>
                    <h2>All Logs for {this.props.habit.name}</h2>
                    {this.props.logs.map((log, index) => (
                        <LogShow 
                        key={log._id} 
                        desciption={log.desciption}
                        logTime={log.logTime} />
                    ))}
                </div>
            );
        }
    }
}

export default withRouter(Logs);