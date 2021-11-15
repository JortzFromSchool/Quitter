import React from 'react';
import { withRouter } from 'react-router-dom';
import LogShow from './log_show';

class Logs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            logs: []
        }
    }

    componentWillMount() {
        this.props.fetchLogs();
    }

    componentWillReceiveProps(newState) {
        this.setState({logs: newState.logs});
    }

    render() {
        if (this.state.logs.length === 0) {
            return (<div>There are no logs</div>)
        } else {
            return (
                <div>
                    <h2>All Logs</h2>
                    {this.state.logs.map((log, index) => (
                        <LogShow 
                        key={index} 
                        desciption={log.desciption}
                        logTime={log.logTime} />
                    ))}
                </div>
            );
        }
    }
}

export default withRouter(Logs);