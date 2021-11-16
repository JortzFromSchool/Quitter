import React from 'react';
import { Link } from 'react-router-dom'

const GroupIndexItem = ({ group, destroyGroup }) => {
  return (
    <Link to={`/groups/${group._id}`} className="group-index-item">
      <div className="group-name">
        {group.name}
      </div>
      <div className="group-info">
        [Group Info Here]
      </div>
      <button onClick={() => (destroyGroup(group._id))}>Delete Group</button>
    </Link>
  )
};

export default GroupIndexItem;