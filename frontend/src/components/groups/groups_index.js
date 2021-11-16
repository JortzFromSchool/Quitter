import React from 'react';
import GroupIndexItem from './group_index_item';

class GroupsIndex extends React.Component{

  componentDidMount(){
    this.props.fetchGroups();
  };

  render() {
    const { groups, createGroup, groupForm } = this.props
    return (
      <div className="groups-index">
        {
          groups.map(group => <GroupIndexItem 
                                key={group.id}
                                group={group}
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