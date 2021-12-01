import React from 'react';
import Logs from '../logs/logs';
import '../logs/user_show.css';

class Profile extends React.Component {

    componentDidMount() {
        // this.props.fetchHabits()
        // .then((action) => {
        //     Object.values(action.habitsByKey).forEach(habit => {
        //         this.props.fetchUserLogsByHabit(this.props.currentUser.id, habit._id);
        //     });
        // });
        this.props.fetchUser(this.props.currentUser.id)
        .then(() => (
            this.props.users[this.props.currentUser.id].habits.forEach(habit => {
                this.props.fetchHabit(habit._id);
                this.props.fetchUserLogsByHabit(this.props.currentUser.id, habit._id)
            })
        ))
    };

    componentWillUnmount() {
        this.props.wipeLogsByHabit();
        this.props.wipeUsers();
    }

    render() {
        const logsLoaded = Object.keys(this.props.logsByHabit).length > 0;
        if (!logsLoaded) {
            return (<div>
                        <div>This user has no Logs</div>
                        {this.props.habitForm()}
                    </div>)
        } else {
            return (
                <div>
                    <h2 className="profile-header">It's quittin' time, {this.props.currentUser.handle}!</h2>
                    {this.props.habitForm()}
                    {Object.keys(this.props.logsByHabit).map(key => {
                        return (<Logs
                        key={key}
                        currentUser={this.props.currentUser}
                        habit={this.props.habits.all[key]}
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
