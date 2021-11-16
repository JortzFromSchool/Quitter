import React from 'react';
import Logs from '../logs/logs';

class Profile extends React.Component {

    componentDidMount() {
        this.props.fetchHabits()
        .then((action) => {
            action.habits.data.forEach(habit => {
                console.log(this.props.currentUser.id);
                this.props.fetchUserLogsByHabit(this.props.currentUser.id, habit._id);
            });
        });
    };

<<<<<<< HEAD
    UNSAFE_componentWillUnmount() {
        this.props.wipeLogsByHabit();
    }
=======
//     componentDidUpdate(prevProps) {
//         console.log(prevProps);
//         if (prevProps.currentUser !== this.props.currentUser) {
//             console.log("I hit this")
//             this.props.fetchHabits()
//                 .then((action) => {
//                     action.habits.data.forEach(habit => {
//                         this.props.fetchUserLogsByHabit(this.props.currentUser.id, habit._id);
//                     });
//                 });
//         }
//     }
>>>>>>> eb4546c6759d6e69fc8e11c9a2a98daa4f387b94

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
                        habitId={key}
                        logs={this.props.logsByHabit[key]}
                        logForm={this.props.logForm}
                        fetchUserLogsByHabit={this.props.fetchUserLogsByHabit}/>
                    ))}
                    
                </div>
            );
        }
    }
}

export default Profile;
