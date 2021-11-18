import React from 'react';
import Logs from '../logs/logs';

class GroupShow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchGroup(this.props.match.params.groupId)
            .then(() => (this.props.fetchAdmin(this.props.group.admin)))
            .then(() => this.props.fetchHabits())
            .then(() =>(
                this.props.group.users.forEach(user => {
                this.props.fetchUserLogsByHabit(user._id, this.props.group.habitId);
                this.props.fetchUser(user._id);
            })
        ));
    }

    componentWillUnmount() {
        this.props.wipeLogsByHabit();
        this.props.wipeUsers();
    }

    leaveGroup(groupId, currentUserId) {
        this.props.removeUserFromGroup(groupId, currentUserId)
        .then(() => (this.props.fetchGroup(this.props.match.params.groupId)))
    }

    joinGroup(groupId, currentUserId) {
        this.props.addUserToGroup(groupId, currentUserId)
        .then(() => (this.props.fetchGroup(this.props.match.params.groupId)))
    }

    whichButton() {
        const {group, currentUser} = this.props;
        let flag = false;
        group.users.forEach(elem => {
            if(elem._id === currentUser.id) {
                flag = true;
            }
        });
        if (flag){
            return (<button onClick={() => (this.leaveGroup(group._id, currentUser.id))}>Leave Group</button>)
        } else {
            return (<button onClick={() => (this.joinGroup(group._id, currentUser.id))}>Join Group</button>)
        }
    }

    render() {
        const {group, admin, habits, users, logs} = this.props;
        let usersLoaded = Object.keys(users).length > 0;
        console.log(usersLoaded);
        console.log(Object.keys(users));
        if(group && admin && habits && logs && usersLoaded) {
            return(<div>
                    <div className="group-show-name">{group.name}</div>
                    {this.whichButton()}
                    <h2>Logs by User</h2>
                    {Object.keys(this.props.logs).map(key => {

                        const userId = this.props.logs[key].data[0].user;
                        return (
                        <div>
                            <div className="log-show-title">{this.props.users[userId].handle}'s Stats</div>
                            <Logs
                                key={key}
                                habit={this.props.habits[this.props.group.habitId]}
                                logs={this.props.logs[key]}
                                logForm={this.props.logForm}
                            />
                        </div>
                        )
                    })}
                 </div>);
        }
        else {
            return(<div>Loading Data...</div>)
        }
        
    }
}
export default GroupShow;