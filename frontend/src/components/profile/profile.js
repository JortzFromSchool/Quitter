import React from 'react';
import LogShow from '../logs/log_show';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            logs: []
        }
    }

    componentWillMount() {
        this.props.fetchUserLogs(this.props.currentUser.id);
    }

    render() {
        if (this.state.logs.length === 0) {
            return (<div>This user has no Logs</div>)
        } else {
            return (
                <div>
                    <h2>All of This User's Logs</h2>
                    {this.state.logs.map(log => (
                        <LogShow 
                        key={log._id}
                        description={log.description}
                        logTime={log.logTime} />
                    ))}
                </div>
            );
        }
    }
}

export default Profile;