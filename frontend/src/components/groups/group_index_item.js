import React from 'react';
import { Link } from 'react-router-dom'

class GroupIndexItem extends React.Component{

  componentDidMount() {
    this.props.fetchUser(this.props.adminId)
  }

  render(){
    // console.log(adminId)
    const { group, destroyGroup } = this.props 

  return (
      <Link to={`/groups/${group._id}`} className="group-index-item">
        <div className="group-name">
          {group.name}
        </div>
        <div className="group-info">
          <div className="group-admin">
            Admin: 
          </div>
          <div className="group-size">
            Group Size: {group.users.length}
          </div>
        </div>
        <button 
          className="delete-group-btn"
          onClick={() => (destroyGroup(group._id))}
        >
          Delete Group
        </button>
      </Link>
    )
  }
};

export default GroupIndexItem;