import React from 'react';
import { Link } from 'react-router-dom'
import './group_index_item.css'

class GroupIndexItem extends React.Component{

  render(){
    const { group, destroyGroup, admin, adminId } = this.props 
  if (group.users) {
    return (
      <Link to={`/groups/${group._id}`} className="group-index-item">
        <div className="group-name">
          {group.name}
        </div>
        <div className="group-info">
          {/* <div className="group-admin">
            
          </div> */}
          <div className="group-size">
            Group Size: {Object.values(group.users).length}
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
  } else {
    return null;
    }
  }
};

export default GroupIndexItem;