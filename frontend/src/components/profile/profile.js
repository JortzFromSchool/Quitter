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

    componentWillMount() {
        this.props.fetchHabits()
        .then((action) => {
            action.habits.data.forEach(habit => {
                console.log(this.props.currentUser.id);
                console.log(habit._id);
                this.props.fetchUserLogsByHabit(this.props.currentUser.id, habit._id);
            });
        });
    };

    render() {
        debugger;
        if(!this.props.logs){
            return null;
        }
        if (this.props.logs.length === 0) {
            return (<div>This user has no Logs</div>)
        } else {
            return (
                <div>
                    <h2>Logs by Habit</h2>
                    {this.props.logs.map(habit => (
                        <Logs
                        key={habit.id}
                        habit={this.props.habits[habit.id]}
                        logs={habit.logs} />
                    ))}
                    {this.props.logForm}
                </div>
            );
        }
    }
}

export default Profile;