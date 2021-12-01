import React from 'react';
import Logs from '../logs/logs';
import './group_show.css'

class GroupShow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchGroup(this.props.match.params.groupId)
            .then(() => (this.props.fetchAdmin(this.props.group.admin)))
            .then(() => this.props.fetchHabits())
            .then(() =>{
                return this.props.group.users.forEach(user => {
                this.props.fetchUserLogsByUser(user._id, this.props.group.habitId);
                this.props.fetchUser(user._id);
            })
            });
    }

    componentWillUnmount() {
        this.props.wipeLogsByHabit();
        this.props.wipeUsers();
    }

    leaveGroup(groupId, currentUserId) {
        this.props.removeUserFromGroup(groupId, currentUserId)
        .then(() => (this.props.wipeUsers()))
        .then(() => (this.props.wipeLogsByHabit()))
        .then(() => (this.props.fetchGroup(this.props.match.params.groupId)))
        .then(() => {
            return this.props.group.users.forEach(user => {
            this.props.fetchUserLogsByUser(user._id, this.props.group.habitId);
            this.props.fetchUser(user._id);
            })
        });
    }

    joinGroup(groupId, currentUserId) {
        this.props.addUserToGroup(groupId, currentUserId)
        .then(() => (this.props.wipeUsers()))
        .then(() => (this.props.wipeLogsByHabit()))
        .then(() => (this.props.fetchGroup(this.props.match.params.groupId)))
        .then(() => {
            return this.props.group.users.forEach(user => {
            this.props.fetchUserLogsByUser(user._id, this.props.group.habitId);
            this.props.fetchUser(user._id);
            })
        });
        // .then(() => (this.props.fetchGroup(this.props.match.params.groupId)))
        // .then(() => (this.props.fetchUserLogsByUser(currentUserId, groupId)))
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
            return (<button onClick={() => (this.leaveGroup(group._id, currentUser.id))} className="group-admission-btn leave">Leave Group</button>)
        } else {
            return (<button onClick={() => (this.joinGroup(group._id, currentUser.id))} className="group-admission-btn join">Join Group</button>)
        }
    }

    render() {
          
      const {group, admin, habits, users, logs, currentUser} = this.props;

      if(!group){
        return null;
      }
      let usersLoaded = (Object.keys(users).length === this.props.group.users.length);
      let logsLoaded = (Object.keys(logs).length === this.props.group.users.length);
      if(group && admin && habits && logsLoaded && usersLoaded) {
          const deleteBtn = this.props.currentUser.id === this.props.admin._id ? (
            <button 
              className="delete-group-btn"
              onClick={() => (this.props.destroyGroup(group._id)
                .then(() => this.props.history.push('/groups')))}
            >
              Delete Group
            </button>
          ) : null
            return(<div>
                    <div className="group-show-name">
                        {group.name}
                    </div>
                    <div className="group-show-btn">
                        {this.whichButton()}
                    </div>
                    {deleteBtn}
                    <h2 className="logs-by-user" >Logs by User</h2>
                    {Object.keys(this.props.logs).map(key => {
                        return (
                        <div>
                            <div className="log-show-title">{this.props.users[key].handle}'s Stats</div>
                            <Logs
                                key={key}
                                habit={this.props.habits[this.props.group.habitId]}
                                logs={this.props.logs[key]}
                                logForm={this.props.logForm}
                                currentUser={currentUser}
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