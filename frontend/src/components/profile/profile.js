import React from 'react';
import Logs from '../logs/logs';

class Profile extends React.Component {

    componentDidMount() {
        this.props.fetchHabits()
        .then((action) => {
            Object.values(action.habitsByKey).forEach(habit => {
                console.log(this.props.currentUser.id);
                this.props.fetchUserLogsByHabit(this.props.currentUser.id, habit._id);
            });
        });
    };

    UNSAFE_componentWillUnmount() {
        this.props.wipeLogsByHabit();
    }

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
                    {Object.keys(this.props.logsByHabit).map(key => {
                        return (<Logs
                        key={key}
                        habit={this.props.habits.all[key]._id}
                        logs={this.props.logsByHabit[key]}
                        logForm={this.props.logForm}
                        fetchUserLogsByHabit={this.props.fetchUserLogsByHabit}/>)
                    })}
                    
                </div>
            );
        }
    }
}

export default Profile;
