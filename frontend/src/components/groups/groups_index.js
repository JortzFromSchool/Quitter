import React from 'react';
import GroupIndexItem from './group_index_item';

class GroupsIndex extends React.Component{

  componentDidMount(){
    this.props.fetchGroups();
  };

  render() {
    const { groups, groupForm, destroyGroup } = this.props
    if (!groups) return null; 
    return (
      <div className="groups-index">
        {
          Object.values(groups).map(group => <GroupIndexItem 
                                key={`group-index-${group._id}`}
                                group={group}
                                destroyGroup={destroyGroup}
                              />
                    )
        }
        <div>
          { groupForm } 
        </div>
      </div>
    )
  }
}

export default GroupsIndex;