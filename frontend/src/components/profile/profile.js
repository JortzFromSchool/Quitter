import React from 'react';
import Logs from '../logs/logs';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     logs: this.props.logs,
        //     habits: this.props.habits
        // }
    }

    componentDidMount() {
        this.props.fetchHabits()
        .then((action) => {
            action.habits.data.forEach(habit => {
                // console.log(this.props.currentUser.id);
                // console.log(habit._id);
                this.props.fetchUserLogsByHabit(this.props.currentUser.id, habit._id);
            });
        });
    };

    render() {
        if(!this.props.logsByHabit){
            return null;
        }
        if (Object.values(this.props.logsByHabit).length === 0) {
            return (<div>This user has no Logs</div>)
        } else {
            return (
                <div>
                    <h2>Logs by Habit</h2>
                    {Object.keys(this.props.logsByHabit).map(key => (
                        <Logs
                        key={key}
                        logs={this.props.logsByHabit[key]} />
                    ))}
                    {this.props.logForm}
                </div>
            );
        }
    }
}

export default Profile;