import React from 'react';
import { withRouter } from 'react-router-dom';
import LogShow from './log_show';
import CreateLogFormContainer from './create_log_form_container';

class Logs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.logs.data.length === 0) {
            return (<div>There are no logs</div>)
        } else {
            return (
                <div>
                    {/* <h2>All Logs for {this.props.habit.name}</h2> */}
                    {this.props.logs.data.map((log, index) => (
                        <LogShow 
                        key={log._id} 
                        description={log.description}
                        logTime={log.logTime}
                        />
                    ))}
                    {this.props.logForm(this.props.habitId)}
                </div>
            );
        }
    }
}

export default withRouter(Logs);