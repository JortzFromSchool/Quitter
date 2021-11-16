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
                console.log(this.props.currentUser.id);
                console.log(habit._id);
                this.props.fetchUserLogsByHabit(this.props.currentUser.id, habit._id);
            });
        }).then(console.log(this.props));
    };

    // componentDidUpdate(prevProps) {
    //     if(this.props != prevProps) {
    //         this.forceUpdate();
    //     }
    // }

    render() {
        if(!this.props.logsByHabit){
            return null;
        }
        if (!this.props.logsByHabit) {
            return (<div>This user has no Logs</div>)
        } else {
            console.log(this.props.logsByHabit);
            return (
                <div>
                    <h2>Logs by Habit</h2>
                    {this.props.logsByHabit.map(habit => (
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