import React from 'react';
import GroupIndexItem from './group_index_item';

class GroupsIndex extends React.Component{

  componentDidMount(){
    this.props.fetchGroups();
  };

  render() {
    const { groups, createGroup } = this.props
    console.log(groups)
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
          <button>Create Group</button>
        </div>
      </div>
    )
  }
}

export default GroupsIndex;