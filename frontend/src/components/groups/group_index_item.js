import React from 'react';
import { Link } from 'react-router-dom'

const GroupIndexItem = ({ group }) => {
  return (
    <Link to="/groups/${group.id}" className="group-index-item">
      <div className="group-name">
        {group.name}
      </div>
      <div className="group-info">
        [Group Info Here]
      </div>
    </Link>
  )
};

export default GroupIndexItem;