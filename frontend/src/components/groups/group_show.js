import React from 'react';

class GroupShow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchGroup(this.props.match.params.groupId)
            .then(() => (this.props.fetchAdmin(this.props.group.admin)));
        this.props.fetchHabits();
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
        const {group, admin, habits, currentUser} = this.props;
        console.log(group)
        const groupButton = <button onClick={() => (this.leaveGroup(group._id, currentUser.id))}>Leave Group</button>

        if(group && admin && habits) {
            return(<div>
                <div className="group-show-name">{group.name}</div>
                {this.whichButton()}
            </div>);
        }
        else {
            return(<div>Loading Data...</div>)
        }
        
    }
}
export default GroupShow;