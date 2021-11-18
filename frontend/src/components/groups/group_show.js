import React from 'react';

class GroupShow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchGroup(this.props.match.params.groupId)
            // .then(() => (this.props.fetchAdmin(this.props.group.admin)));
        this.props.fetchHabits();
    }

    leaveGroup(groupId, currentUserId) {
        this.props.removeUserFromGroup(groupId, currentUserId)
        .then(() => (this.props.fetchGroup(this.props.match.params.groupId)))
    }

    render() {
        const {group, admin, habits, currentUser} = this.props;
        const groupButton = <button onClick={() => (this.leaveGroup(group._id, currentUser.id))}>Leave Group</button>

        if(group && admin && habits) {
            console.log(group);
            const groupButton = (<button onClick={() => (this.leaveGroup(group._id, currentUser.id))}>Leave Group</button>)
            return(<div>
                <div className="group-show-name">{group.name}</div>
                {/* <div className="group-admin">{admin}</div> */}
                {groupButton}
            </div>);
        }
        else {
            return(<div>Loading Data...</div>)
        }
        
    }
}
export default GroupShow;